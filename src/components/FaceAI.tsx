"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Luckiest_Guy } from "next/font/google"
import toast from "react-hot-toast"
import * as faceapi from "face-api.js"
import crypto from "crypto"
import { preload } from "react-dom"

import ArrowLeft from "./svgs/ArrowLeft"
import Placeholder from "@/assets/image-placeholder.png"
import Photo1 from "@/assets/photo1.png"
import LinkArrow from "@/assets/link-arrow.png"
import ToobText from "@/assets/toob-text2.png"
import ToobText1 from "@/assets/toob-text1.png"
import Toob from "@/assets/toob.png"
import ToobEye from "@/assets/toob-eye.png"
import { loadImage } from "@/utils/loadImage"
import Spinner from "./Spinner"
import { sleep } from "@/utils/sleep"

import Sample1 from "@/assets/sample1.png"
import Sample2 from "@/assets/sample2.png"
import Sample3 from "@/assets/sample3.png"
import Sample4 from "@/assets/sample4.png"
import Sample5 from "@/assets/sample5.png"
import Sample6 from "@/assets/sample6.png"
import ArbEyeSwitch from "./ArbEyeSwitch"

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] })

const FaceAI = () => {
  const ref = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [file, setFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState<string>()
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [genereated, setGenerated] = useState(false)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [current, setCurrent] = useState(-1)
  const [eye, setEye] = useState(false)

  useEffect(() => {
    preload("/bg3.png", { as: "image" })
    Promise.all([
      faceapi.nets.faceRecognitionNet.load(
        "https://justadudewhohacks.github.io/face-api.js/models/face_recognition_model-weights_manifest.json"
      ),
      faceapi.nets.ssdMobilenetv1.load(
        "https://justadudewhohacks.github.io/face-api.js/models/ssd_mobilenetv1_model-weights_manifest.json"
      ),
      faceapi.nets.faceLandmark68Net.load(
        "https://justadudewhohacks.github.io/face-api.js/models/face_landmark_68_model-weights_manifest.json"
      ),
    ])
    Promise.all(
      [Sample1, Sample2, Sample3, Sample4, Sample5, Sample6].map((item) =>
        loadImage(item.src)
      )
    ).then((res: any) => {
      setImages(res)
      setCurrent(0)
    })
  }, [])

  const onFileUpload = () => {
    ref.current?.click()
  }

  const onFileUploaded = async () => {
    if (ref.current?.files?.[0]) {
      const reader = new FileReader()
      setFile(ref.current.files[0])
      setGenerated(false)

      reader.onload = (e) => {
        setImageUrl(e.target?.result?.toString())
      }

      reader.readAsDataURL(ref.current.files[0])
    } else {
      setImageUrl(undefined)
    }
  }

  const onToobIt = async () => {
    if (!file) {
      toast.error("Upload the image to TOOB IT")
      return
    }
    if (imageRef.current) {
      try {
        setLoading(true)
        await sleep(2000)
        setGenerated(false)
        const face = await faceapi.ssdMobilenetv1(
          imageRef.current,
          new faceapi.SsdMobilenetv1Options({})
        )
        if (face.length === 0) {
          setLoading(false)
          toast.error(
            "TOOB AI failed to TOOB IT using this image, try different image with clear faces."
          )
          return
        }

        if (canvasRef.current) {
          const canvas = canvasRef.current
          const ctx = canvas.getContext("2d")
          if (ctx) {
            canvas.width = imageRef.current.naturalWidth
            canvas.height = imageRef.current.naturalHeight
            ctx.drawImage(imageRef.current, 0, 0)
            const toob: any = await loadImage(eye ? ToobEye.src : Toob.src)

            face.forEach((item) => {
              const scaledW =
                Math.max(
                  item.box.width,
                  (item.box.height / toob.naturalHeight) * toob.naturalWidth
                ) * 1.5
              const scaledH =
                Math.max(
                  item.box.height,
                  (item.box.width / toob.naturalWidth) * toob.naturalHeight
                ) * 1.5
              const midX = item.box.left + item.box.width / 2
              const midY = item.box.top + item.box.height / 2
              const scaledX = midX - scaledW / 2
              const scaledY = midY - (scaledH / 2) * 1.25
              ctx.drawImage(toob as any, scaledX, scaledY, scaledW, scaledH)
            })
          }
          const img = document.createElement("img")
          img.src = canvas.toDataURL()
          img.width = canvas.width
          img.height = canvas.height
          setCurrent(images.length)
          setImages([...images, img])

          setGenerated(true)
        }
      } catch (err) {
        console.log(err)
        toast.error("Failed to TOOB IT.. try again later")
      }
      setLoading(false)
    }
  }

  const onDownload = async () => {
    if (genereated) {
      const canvas = canvasRef.current

      if (canvas) {
        const dataURL = canvas.toDataURL("image/png")

        const link = document.createElement("a")
        link.href = dataURL
        link.download = `toob-${crypto.randomBytes(4).toString("hex")}`

        link.click()
      }
    }
  }

  useEffect(() => {
    if (images.length > current && current >= 0) {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        const image = images[current]
        if (ctx) {
          canvas.width = image.naturalWidth
          canvas.height = image.naturalHeight
          ctx.drawImage(image, 0, 0)
        }
      }
    }
  }, [current])

  return (
    <div
      id="toob-it"
      className="relative px-4 sm:px-[30px] xl:px-[60px] 2xl:px-[100px] pt-[100px] md:pt-[160px] base:pt-[200px] pb-[120px] base:pb-[200px] overflow-hidden"
    >
      <Image
        src={ToobText1.src}
        width={ToobText1.width}
        height={ToobText1.height}
        priority
        alt="toob-text"
        className="absolute top-14 base:top-44 left-10 base:left-16 max-base:w-[120px] max-sm:hidden"
      />
      <div className="flex justify-center">
        <div className="flex flex-col items-center relative">
          <Image
            src={LinkArrow.src}
            width={LinkArrow.width}
            height={LinkArrow.height}
            priority
            alt="link"
            className="absolute top-1/2 -right-5 xl:-right-8 2xl:-right-12 -translate-y-1/2 translate-x-1/2 max-base:w-[30px] max-xl:w-[40px] max-2xl:w-[60px] max-md:hidden"
          />
          <div className="absolute -bottom-5 -right-[180px] base:-right-[220px] xl:-right-[280px] 2xl:-right-[340px] max-md:hidden">
            <span
              className={`absolute top-0 left-0 whitespace-nowrap -translate-x-[40%] -translate-y-[90%] -rotate-[11deg] text-[20px] base:text-3xl
               xl:text-[40px] ${luckiestGuy.className}`}
            >
              THE POWER OF AI!
            </span>
            <Image
              src={Photo1.src}
              width={Photo1.width}
              height={Photo1.height}
              alt="photo"
              priority
              className="rounded-[30px] w-[120px] base:w-[140px] xl:w-[180px] 2xl:w-[210px] border-4 border-white"
            />
          </div>
          <h4
            className={`flex items-center text-[20px] base:text-[40px] ${luckiestGuy.className}`}
          >
            <ArrowLeft className="rotate-180 text-[#FFF500] mr-1.5 max-base:w-[20px]" />
            TOOB IT!
          </h4>
          <p className="text-xs base:text-xl text-center mt-4 base:mt-10 max-w-[400px] base:max-w-[540px] xl:max-w-[680px] 2xl:max-w-[836px] uppercase">
            Toob It: Because Everything Looks Better with Toob&apos;s Face on
            It! Upload your pic, and let&apos;s give it the Toob treatment! Get
            ready to smile like never before!
          </p>
        </div>
      </div>
      <div className="relative bg-[linear-gradient(#E5A301_0%,#FFF500_101.5%)] p-4 rounded-[30px] flex max-md:flex-col max-md:space-y-4 md:space-x-4 mt-7 md:mt-[75px] base:mt-12">
        <div className="bg-white flex flex-col items-center justify-between w-full px-4 base:px-5 py-4 base:py-12 rounded-ss-[20px] max-md:rounded-se-[20px] md:rounded-es-[20px]">
          <div
            className="relative rounded-[30px] border border-dashed border-black w-full pb-8 base:pb-20 px-5 pt-3 cursor-pointer overflow-hidden my-auto"
            onClick={onFileUpload}
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={1000}
                height={1000}
                alt="image"
                ref={imageRef}
                className="absolute top-0 left-0 right-0 bottom-0 object-contain w-full h-full"
              />
            ) : null}
            <div
              data-hide={Boolean(imageUrl)}
              className="flex flex-col items-center transition-all data-[hide=true]:opacity-0"
            >
              <Image
                src={Placeholder.src}
                width={Placeholder.width}
                height={Placeholder.height}
                alt="placeholder"
                className="my-5 sm:my-7 base:my-14 max-sm:w-[70px] max-base:w-[90px]"
              />
              <input
                type="file"
                ref={ref}
                hidden
                accept="image/*"
                onChange={onFileUploaded}
              />
              <div
                className={`text-xs base:text-xl uppercase text-[#231F20] text-center ${luckiestGuy.className}`}
              >
                Drag and DROP YOUR image here or{" "}
                <span className="text-[#0B80FF]">select a file</span> from your
                computer
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-3 md:mt-3.5 base:mt-10">
            <ArbEyeSwitch open={eye} setOpen={setEye} className="" />
            <button
              className={`flex justify-center items-center text-xs base:text-2xl text-black py-2.5 base:py-5 px-9 base:px-[75px] rounded-full bg-[linear-gradient(90deg,#E5A301_0%,#FFF500_101.5%)] enabled:hover:scale-105 disabled:grayscale transition-all mt-2 base:mt-6 ${luckiestGuy.className}`}
              onClick={onToobIt}
              disabled={loading}
            >
              {loading ? (
                <Spinner className="w-4 h-4 base:w-8 base:h-8 text-white" />
              ) : (
                "TOOB IT!"
              )}
            </button>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-between items-center w-full px-4 base:px-5 py-4 base:py-12 max-md:rounded-es-[20px] md:rounded-se-[20px] rounded-ee-[20px]">
          <h4
            className={`text-xl base:text-[40px] text-black text-center ${luckiestGuy.className}`}
          >
            GET YOUR OWN TOOB FACE!
          </h4>
          <div className="relative flex items-center justify-between w-full mt-6 base:mt-10">
            <button
              className="text-[#231F20]"
              onClick={() => setCurrent(Math.max(0, current - 1))}
            >
              <ArrowLeft className="max-base:w-[22px]" />
            </button>

            {loading ? (
              <Spinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 w-16 h-16" />
            ) : null}
            <canvas
              ref={canvasRef}
              className="rounded-[30px] mx-3 base:mx-5 2xl:mx-10 w-full min-w-0"
            />
            <button
              className="text-[#231F20]"
              onClick={() =>
                setCurrent(Math.min(current + 1, images.length - 1))
              }
            >
              <ArrowLeft className="rotate-180 max-base:w-[22px]" />
            </button>
          </div>
          <button
            className={`text-xs base:text-2xl rounded-full py-2.5 base:py-5 px-6 base:px-14 bg-[linear-gradient(90deg,#1F8916_0%,#24FF00_101.5%)] mt-4 md:mt-6 base:mt-[50px] hover:scale-105 transition-all ${luckiestGuy.className}`}
            onClick={onDownload}
          >
            DOWNLOAD
          </button>
        </div>
        <Image
          src={ToobText.src}
          width={ToobText.width}
          height={ToobText.height}
          alt="toob"
          priority
          className="absolute bottom-0 right-0 -rotate-[22deg] translate-x-[30%] translate-y-[20%] max-base:w-[150px] max-md:hidden"
        />
      </div>
    </div>
  )
}

export default FaceAI
