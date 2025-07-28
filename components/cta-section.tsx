import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToActionSection() {
  return (
    <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-xyber-purple-700 text-white">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Xyberchain Community</h2>
          <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Connect with other enthusiasts, developers, and innovators. Stay updated on the latest news and
            developments.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link href="https://x.com/xyberchainxyb" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-xyber-purple-800 bg-transparent transition-all duration-300 hover:scale-105"
            >
              Follow on X
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
