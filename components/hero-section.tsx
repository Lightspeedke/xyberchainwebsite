import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-xyber-purple-700 to-xyber-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-up">
              Xyberchain: The Future of Decentralized Innovation
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl animate-fade-in-up animation-delay-200">
              Empowering developers and users with a scalable, secure, and truly decentralized blockchain platform.
            </p>
          </div>
          <div className="space-x-4 animate-fade-in-up animation-delay-400">
            <Link href="#features">
              <Button className="bg-xyber-cyan-500 text-white hover:bg-xyber-cyan-600 transition-colors duration-300">
                Learn More
              </Button>
            </Link>
            <Link href="https://www.xyberchainexplorer.xyz//" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-xyber-purple-800 bg-transparent transition-colors duration-300"
              >
                Explore Chain
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
