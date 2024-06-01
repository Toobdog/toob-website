"use client"

import { Luckiest_Guy } from "next/font/google"
import FAQItem from "./FAQItem"
import { useState } from "react"
import Decoration1 from "@/assets/decoration2.png"
import Decoration2 from "@/assets/decoration3.png"
import Image from "next/image"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const faqItems = [
  {
    title: "What’s is Arbitrum?",
    content:
      "Arbitrum is a layer 2 scaling solution for Ethereum, offering Ethereum level security with super fast and cheap transactions.",
  },
  {
    title: "Which wallets supports Toob?",
    content: "Wallets like MetaMask, CoinBase and Trust Wallet support Toob.",
  },
  {
    title: "How to send Toob to friends?",
    content:
      "To send Toob to friends, you can use compatible wallets and send them directly to their address.",
  },
  {
    title: "How to buy Toob?",
    content: "Currently you can buy Toob on Uniswap.",
  },
  {
    title: "Is Toob a real dog?",
    content: "Yes",
  },
  {
    title: "How old is Toob?",
    content: "10 years old",
  },
]

const FAQ = () => {
  const [open, setOpen] = useState(-1)

  return (
    <div
      id="faq"
      className="relative flex flex-col items-center py-[54px] lg:py-[84px] max-sm:px-2"
    >
      <Image
        src={Decoration1.src}
        width={Decoration1.width}
        height={Decoration1.height}
        alt="dec"
        className="absolute top-0 right-0 w-20 lg:w-[100px] max-md:hidden"
      />
      <Image
        src={Decoration2.src}
        width={Decoration2.width}
        height={Decoration2.height}
        alt="dec"
        className="absolute bottom-10 left-0 w-20 lg:w-[100px] max-md:hidden"
      />
      <h2
        className={`text-xl lg:text-[32px] uppercase ${luckiestGuy.className}`}
      >
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-xs lg:text-lg text-center max-w-[700px] lg:max-w-[950px] max-lg:leading-[30px]">
        Answers to the most frequent questions Toob gets asked on daily basis.
      </p>
      <div className="flex flex-col mt-10 lg:mt-[60px] max-w-[600px] lg:max-w-[800px]">
        {faqItems.map((item, i) => (
          <FAQItem
            key={i}
            open={open === i}
            title={item.title}
            content={item.content}
            onClick={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQ
