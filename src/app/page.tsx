import About from "@/components/About"
import Chat from "@/components/Chat"
import Contract from "@/components/Contract"
import Divider from "@/components/Divider"
import FAQ from "@/components/FAQ"
import FaceAI from "@/components/FaceAI"
import Fiat from "@/components/Fiat"
import Hero from "@/components/Hero"
import Mission from "@/components/Mission"
import Tokenomics from "@/components/Tokenomics"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full opacity-20 -z-[1] bg-[length:100%] bg-[url('/bg3.png')]" />
        <About />
        <Divider />
        <Mission />
        <Divider />
        <Tokenomics />
        <Divider />
        <Contract />
        {/* <Fiat /> */}
        <Divider />
        <FaceAI />
        <Divider />
        <Chat />
        <Divider />
        <FAQ />
      </div>
    </main>
  )
}
