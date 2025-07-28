"use client"

import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { motion } from "framer-motion"

export default function MetamaskSection() {
  const addXyberchainToMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x23EA", // 9194 in hexadecimal
              chainName: "XYBERCHAIN Mainnet",
              nativeCurrency: {
                name: "XYBER",
                symbol: "XYB",
                decimals: 18,
              },
              rpcUrls: ["https://xyberchain-rpc.xyz/"],
              blockExplorerUrls: ["https://xyberchain.cloud.blockscout.com/"],
            },
          ],
        })
      } catch (error) {
        console.error("Failed to add Xyberchain to MetaMask:", error)
        alert("Failed to add Xyberchain to MetaMask. Please try again or add manually.")
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to add Xyberchain.")
    }
  }

  return (
    <section id="metamask" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
          >
            Connect Wallet
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          >
            Add Xyberchain to MetaMask
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Easily connect your MetaMask wallet to the Xyberchain Mainnet with a single click.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={addXyberchainToMetamask}
              className="bg-xyber-cyan-500 text-white hover:bg-xyber-cyan-600 transition-colors duration-300 flex items-center gap-2"
            >
              <Wallet className="h-5 w-5" /> Add Xyberchain Mainnet
            </Button>
          </motion.div>
          <div className="mt-8 text-left w-full max-w-2xl space-y-4 text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground">Manual Configuration Details:</h3>
            <p>If the automatic connection doesn't work, you can add Xyberchain manually using these details:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Network Name:</strong> XYBERCHAIN Mainnet
              </li>
              <li>
                <strong>New RPC URL:</strong> https://xyberchain-rpc.xyz/
              </li>
              <li>
                <strong>Chain ID:</strong> 9194
              </li>
              <li>
                <strong>Currency Symbol:</strong> XYB
              </li>
              <li>
                <strong>Block Explorer URL:</strong> https://xyberchain.cloud.blockscout.com/
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
