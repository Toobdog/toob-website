import type { Metadata } from "next"
import { McLaren } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import Alert from "@/components/Alert"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import Providers from "./providers"

const mcLaren = McLaren({ weight: ["400"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "toob",
  description: "TOOB",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={mcLaren.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
        <Toaster position="top-right" />
        {/* <Alert /> */}
      </body>
    </html>
  )
}
