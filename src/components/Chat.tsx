"use client"

import Image from "next/image"
import ChatImg from "@/assets/toob_gpt_ai.png"
import Send from "./svgs/Send"
import Bin from "./svgs/Bin"
import Undo from "./svgs/Undo"
import Redo from "./svgs/Redo"
import UserChat from "./UserChat"
import BotChat from "./BotChat"
import { useState } from "react"
import DottedSpinner from "./DottedSpinner"
import { INITIAL_DATA } from "@/constants/ai"

const Chat = () => {
  const [searchWord, setSearchWord] = useState("")
  const [messages, setMessages] = useState<
    { message: string; sender: string; date: number }[]
  >([{ message: "Welcome to the TOOB!", sender: "gpt", date: 0 }])
  const [loading, setLoading] = useState(false)

  const sendRequest = async () => {
    if (!searchWord) return
    const newMessage = {
      message: searchWord,
      date: Date.now(),
      sender: "user",
    }

    setMessages((prevMessages) => [...prevMessages, newMessage])

    try {
      setLoading(true)
      const response = await processMessageToChatGPT([...messages, newMessage])
      console.log(response)
      const content = response.choices[0]?.message?.content
      if (content) {
        const chatGPTResponse = {
          message: content,
          date: Date.now(),
          sender: "gpt",
        }
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse])
      }
      setSearchWord("")
    } catch (error) {
      console.error("Error processing message:", error)
    } finally {
      setLoading(false)
    }
  }

  async function processMessageToChatGPT(
    chatMessages: { message: string; sender: string }[]
  ) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "gpt" ? "assistant" : "user"
      return { role, content: messageObject.message }
    })

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        ...INITIAL_DATA.map((item) => ({ role: "system", content: item })),
        ...apiMessages,
      ],
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })

    return response.json()
  }

  const onKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      await sendRequest()
    }
  }

  const onClearChat = () => {
    setMessages(messages.slice(0, 1))
  }

  return (
    <div
      id="chat"
      className="bg-[linear-gradient(#E7AB01,#FDED00)] rounded-[30px] p-4 mx-4 md:mx-[100px] my-8"
    >
      <div className="bg-white px-2 md:px-8 lg:px-[90px] pt-3 lg:pt-7 pb-2.5 md:pb-6 lg:pb-[100px] rounded-[20px]">
        <Image
          src={ChatImg.src}
          width={ChatImg.width}
          height={ChatImg.height}
          alt="chat"
          className="max-md:w-[140px] max-lg:w-[180px]"
        />
        <p className="text-sm lg:text-xl text-black leading-[160%]">
          Have fun with our Toob Chat. Type anything you desire and let Toob
          unfold the magic of AI.
        </p>
        <div className="flex flex-col space-y-3.5 md:space-y-8 lg:space-y-12 mt-3 min-h-[400px] max-h-[800px] overflow-y-auto [&::-webkit-scrollbar]:bg-gray-100 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full pb-10 pr-1 md:pr-3 -mr-1 md:-mr-3">
          {messages.map((item, i) =>
            item.sender === "user" ? (
              <UserChat
                key={i}
                date={new Date(item.date)}
                content={item.message}
              />
            ) : (
              <BotChat key={i} content={item.message} />
            )
          )}
        </div>
        <div
          className={`flex max-sm:flex-col max-sm:space-y-2 sm:items-center ${
            loading ? "justify-between" : "justify-end"
          } mt-5 md:mt-8 mb-3`}
        >
          {loading && (
            <div className="text-[#0F172A]/60 flex items-center text-xs max-sm:order-1">
              <DottedSpinner className="w-3.5 mr-1 mt-1.5" />
              Toob dog is thinking now.
            </div>
          )}
          <button className="flex items-center p-3 pl-2 border border-[#E4E6EC] rounded-[4px] w-fit">
            <Bin />
            <span className="text-sm text-[#0F172A] ml-2" onClick={onClearChat}>
              Clear Chat
            </span>
          </button>
          {/* <div className="flex items-center py-2 border border-[#E4E6EC] rounded-[8px] w-fit">
            <button className="flex items-center py-0.5 px-6 text-[#0F172A] border-r border-[#E4E6EC]">
              <Undo />
              <span className="text-sm ml-2.5">Undo</span>
            </button>
            <button className="flex items-center py-0.5 px-6 text-[#0F172A]">
              <Redo className="" />
              <span className="text-sm ml-2.5">Redo</span>
            </button>
          </div> */}
        </div>
        <div className="relative">
          <textarea
            disabled={loading}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyDown={onKeyDown}
            className="py-4 pl-4 pr-14 border border-[#E4E6EC] rounded-lg w-full text-[#64748B] text-lg h-[62px] [&::-webkit-scrollbar]:hidden disabled:bg-black/10"
          />
          <button
            className="absolute right-6 top-[21px] hover:scale-105 transition-all"
            onClick={sendRequest}
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
