import type React from "react"
// import Image from "next/image" // Removed Image import as it's no longer used

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">About Xyberchain</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Vision for a Connected Future</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Xyberchain is more than just a blockchain; it's a commitment to a future where digital interactions are
                secure, transparent, and accessible to everyone. We aim to foster a vibrant ecosystem of decentralized
                applications and services.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-purple-600" />
                Empowering innovation through open-source technology.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-purple-600" />
                Building a community-driven and governed network.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-purple-600" />
                Ensuring long-term sustainability and growth.
              </li>
            </ul>
          </div>
          {/* Removed Image component */}
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
