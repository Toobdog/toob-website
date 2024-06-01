"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Logo from "@/assets/logo.png"
import Cancel from "./svgs/Cancel"

const Alert = () => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    localStorage.setItem("alert", "true")
    setOpen(false)
  }

  useEffect(() => {
    const opened = localStorage.getItem("alert")
    console.log(opened)
    if (!opened) setOpen(true)
  }, [])

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full flex flex-col items-center max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute flex items-center justify-center -top-4 -right-4 w-8 h-8 rounded-full bg-white text-red-500 text-xl leading-none outline-none"
                  onClick={onClose}
                >
                  <Cancel />
                </button>
                <Image
                  src={Logo.src}
                  width={Logo.width}
                  height={Logo.height}
                  alt="logo"
                  className="w-32"
                />
                <p className="text-black text-center mt-4">
                  Toob credit card integration is currently under construction,
                  meanwhile you can start toobing it!
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Alert
