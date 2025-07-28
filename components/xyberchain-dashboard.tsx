"use client"

import { Blocks, Clock, GitCommit, LayoutDashboard, LinkIcon, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function XyberchainDashboard() {
  // Placeholder data - you'll replace this with actual data fetched from your blockchain
  const latestBlock = {
    number: 1234567,
    timestamp: "20 seconds ago",
    transactions: 15,
    miner: "0xAbc...123",
    gasUsed: "2,100,000",
    gasLimit: "30,000,000",
  }

  const totalTransactions = "12,345,678"
  const averageBlockTime = "3.2 seconds"

  const recentBlocks = [
    {
      number: 1234567,
      age: "20s ago",
      txns: 15,
      miner: "0xAbc...123",
      gasUsed: "2.1M",
      gasLimit: "30M",
    },
    {
      number: 1234566,
      age: "25s ago",
      txns: 12,
      miner: "0xDef...456",
      gasUsed: "1.8M",
      gasLimit: "30M",
    },
    {
      number: 1234565,
      age: "30s ago",
      txns: 18,
      miner: "0xGhi...789",
      gasUsed: "2.5M",
      gasLimit: "30M",
    },
    {
      number: 1234564,
      age: "35s ago",
      txns: 10,
      miner: "0xJkl...012",
      gasUsed: "1.5M",
      gasLimit: "30M",
    },
  ]

  const recentTransactions = [
    {
      hash: "0x1a2b...c3d4",
      age: "10s ago",
      from: "0xSender...Addr",
      to: "0xReceiver...Addr",
      value: "0.05 XYB",
    },
    {
      hash: "0x5e6f...g7h8",
      age: "15s ago",
      from: "0xAnother...Sender",
      to: "0xContract...Addr",
      value: "1.2 XYB",
    },
    {
      hash: "0x9i0j...k1l2",
      age: "22s ago",
      from: "0xReceiver...Addr",
      to: "0xSender...Addr",
      value: "0.001 XYB",
    },
    {
      hash: "0x3m4n...o5p6",
      age: "30s ago",
      from: "0xContract...Addr",
      to: "0xAnother...Sender",
      value: "5 XYB",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-background">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
          <LayoutDashboard className="w-6 h-6" />
          <span className="font-bold">Xyberchain Explorer</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="text-foreground">
            Dashboard
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Blocks
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Transactions
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Addresses
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by Address / Txn Hash / Block Number..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Xyberchain Overview</h1>
        </div>
        <div className="grid gap-6 max-w-6xl w-full mx-auto lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Block</CardTitle>
              <Blocks className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{latestBlock.number}</div>
              <p className="text-xs text-muted-foreground">{latestBlock.timestamp}</p>
              <div className="text-sm text-muted-foreground mt-2">
                <p>Transactions: {latestBlock.transactions}</p>
                <p>Miner: {latestBlock.miner}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
              <GitCommit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTransactions}</div>
              <p className="text-xs text-muted-foreground">on Xyberchain</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Block Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageBlockTime}</div>
              <p className="text-xs text-muted-foreground">across the network</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 max-w-6xl w-full mx-auto lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Blocks</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {recentBlocks.map((block, index) => (
                <div key={block.number} className="flex items-center gap-4">
                  <Blocks className="h-5 w-5 text-muted-foreground" />
                  <div className="grid gap-1">
                    <Link href="#" className="font-medium hover:underline">
                      Block #{block.number}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {block.age} | {block.txns} Txns
                    </div>
                  </div>
                  <div className="ml-auto text-sm text-right">
                    <p>
                      Miner:{" "}
                      <Link href="#" className="hover:underline">
                        {block.miner}
                      </Link>
                    </p>
                    <p className="text-muted-foreground">
                      Gas: {block.gasUsed} / {block.gasLimit}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Blocks
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {recentTransactions.map((tx, index) => (
                <div key={tx.hash} className="flex items-center gap-4">
                  <LinkIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="grid gap-1">
                    <Link href="#" className="font-medium hover:underline">
                      {tx.hash.substring(0, 10)}...{tx.hash.slice(-4)}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {tx.age} | From:{" "}
                      <Link href="#" className="hover:underline">
                        {tx.from.substring(0, 6)}...
                      </Link>{" "}
                      To:{" "}
                      <Link href="#" className="hover:underline">
                        {tx.to.substring(0, 6)}...
                      </Link>
                    </div>
                  </div>
                  <div className="ml-auto text-sm font-medium">{tx.value}</div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
