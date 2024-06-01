"use client"
import WertWidget from "@wert-io/widget-initializer"
import axios from "axios"
import Image from "next/image"
import Toob from "@/assets/buy-text.png"
import InputGroup from "./InputGroup"
import { useEffect, useState } from "react"
import USD from "@/assets/usd.png"
import Logo from "@/assets/logo.png"
import Arb from "@/assets/arbitrum-flat.png"
import ArrowRight from "./svgs/ArrowRight"
import { Luckiest_Guy } from "next/font/google"
import toast from "react-hot-toast"
import {
  createPublicClient,
  formatEther,
  http,
  isAddress,
  parseEther,
} from "viem"
import { bscTestnet } from "viem/chains"
import PayABI from "@/contracts/PayABI"
import { PAY_ADDRESS } from "@/contracts"
import { useQuery } from "@tanstack/react-query"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const publicClient = createPublicClient({
  chain: bscTestnet,
  transport: http("https://endpoints.omniatech.io/v1/bsc/testnet/public"),
})

const Fiat = () => {
  const [amount, setAmount] = useState("")
  const [wallet, setWallet] = useState("")

  const { data: convertedAmount } = useQuery({
    queryKey: ["converter", amount],
    queryFn: async () => {
      try {
        if (!amount || Number(amount) < 10 || Number(amount) > 1000) return 0
        const { data: estimated } = await axios.post(
          "http://localhost:8001/api/purchase",
          {
            address: "0x0A6f13A3F415316174F9c216cFa274343fE0f150",
            amount: 1,
          }
        )
        const { data } = await axios.post(
          "https://sandbox.wert.io/api/v3/partners/convert",
          {
            from: "USD",
            network: "bsc",
            to: "BNB",
            amount: Number(amount),
            partner_data: {
              sc_address: estimated.sc_address,
              sc_input_data: estimated.sc_input_data,
              signature: estimated.signature,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-Partner-ID": "01HX6HQ30A9TS3011V6A9Y5AHV",
            },
          }
        )
        return data?.body?.commodity_amount ?? 0
      } catch (err) {
        console.log(err)
      }
    },
    refetchInterval: 10000,
  })

  const { data: result } = useQuery({
    queryKey: ["result", convertedAmount],
    queryFn: async () => {
      try {
        if (!convertedAmount) return 0
        const { result } = await publicClient.simulateContract({
          account: "0x745bCE0D540AbE9cB639b6eACb5f6Ded3Cf947C9",
          abi: PayABI,
          address: PAY_ADDRESS,
          args: ["0x0A6f13A3F415316174F9c216cFa274343fE0f150"],
          functionName: "pay",
          value: parseEther(convertedAmount.toString()),
        })
        return Number(formatEther(result))
      } catch (err) {
        console.log(err)
        return 0
      }
    },
    refetchInterval: 100000,
  })

  const onBuy = async () => {
    try {
      // if (!amount || !convertedAmount) {
      //   toast.error("Input the valid amount")
      //   return
      // }
      // if (!isAddress(wallet)) {
      //   toast.error("Input the valid address")
      //   return
      // }
      const { data } = await axios.post(
        "http://localhost:8001/api/purchase",
        {
          address: wallet,
          amount: 11,
        }
      )

      if (!data) {
        return
      }
      const wertWidget = new WertWidget({
        partner_id: "01HX6HQ30A9TS3011V6A9Y5AHV",
        origin: "https://sandbox.wert.io",
        // color_secondary_text: "#fff",
        ...data,
        extra: {
          item_info: {
            image_url: "https://toob-token-app.vercel.app/logo.png",
            name: "Buy TOOB",
          },
        },
      })

      wertWidget.open()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      id="chat"
      className="bg-[linear-gradient(#E7AB01,#FDED00)] rounded-[30px] p-4 mx-4 md:mx-[100px] my-8"
    >
      <div className="flex flex-col items-center bg-white px-2 md:px-8 xl:px-[90px] pt-8 lg:pt-10 pb-11 lg:pb-14 rounded-[20px]">
        <Image
          src={Toob.src}
          width={Toob.width}
          height={Toob.height}
          alt="buy"
          className="max-sm:w-[180px] max-xl:w-[260px]"
        />
        <InputGroup
          title="YOU PAY"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value.replace(/\D/g, ""))
          }
          placeholder="100.00"
          error={
            Number(amount) < 10
              ? "Minimum amount is $10"
              : Number(amount) > 1000
              ? "Maximum amount is $1,000"
              : undefined
          }
          dollar
          right={
            <div className="flex items-center w-[80px] sm:w-[130px] xl:w-[180px]">
              <Image
                src={USD.src}
                width={USD.width}
                height={USD.height}
                alt="usd"
                className="w-6 sm:w-[30px] xl:w-11 h-6 sm:h-[30px] xl:h-11"
              />
              <span className="ml-2 sm:text-2xl xl:text-[32px] text-black">
                USD
              </span>
            </div>
          }
          className="mt-4"
        />
        <InputGroup
          title="YOU RECEIVE (estimated)"
          value={result?.toFixed(0) ?? "0"}
          onChange={() => {}}
          placeholder="100.00"
          disabled
          right={
            <div className="flex items-center w-[80px] sm:w-[130px] xl:w-[180px]">
              <Image
                src={Logo.src}
                width={Logo.width}
                height={Logo.height}
                alt="logo"
                className="w-6 sm:w-[30px] xl:w-11 h-6 sm:h-[30px] xl:h-11"
              />
              <span className="ml-2 sm:text-2xl xl:text-[32px] text-black">
                TOOB
              </span>
            </div>
          }
          className="mt-0.5"
        />
        <InputGroup
          title="YOUR WALLET ADDRESS (receive TOOB)"
          value={wallet}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWallet(e.target.value)
          }
          placeholder="0x..."
          sm
          bottom
          error={!isAddress(wallet) ? "Invalid address" : undefined}
          right={
            <Image
              src={Arb.src}
              width={Arb.width}
              height={Arb.height}
              alt="arb"
              className="max-xl:w-[130px]"
            />
          }
          className="mt-10 sm:mt-[88px]"
        />
        <button
          className="flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#E5A301_0%,#FFF500_101.5%)] text-black py-2.5 sm:py-4 sm:px-20 lg:px-32 mt-8 sm:mt-14 enabled:hover:scale-105 transition-all disabled:bg-[linear-gradient(90deg,#959186_0%,#EBEBE6_101.5%)] disabled:text-[#5F5656] max-sm:w-full"
          disabled={!amount || !isAddress(wallet)}
          onClick={onBuy}
        >
          <span className={`sm:text-2xl ${luckiestGuy.className}`}>BUY</span>
          <ArrowRight className="ml-3 sm:ml-3.5 max-sm:w-5" />
        </button>
      </div>
    </div>
  )
}

export default Fiat
