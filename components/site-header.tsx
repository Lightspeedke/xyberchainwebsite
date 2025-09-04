import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold sm:text-base">
          <Image
            src="/images/xyberchain-logo.png"
            alt="Xyberchain Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold">Xyberchain</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="#community" className="text-muted-foreground hover:text-foreground">
            Community
          </Link>
          <Link
            href="https://www.xyberchainexplorer.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            Explorer
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden bg-transparent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Image
                src="/images/xyberchain-logo.png"
                alt="Xyberchain Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold">Xyberchain</span>
            </Link>
            <nav className="grid gap-2 py-6 text-lg font-medium">
              <Link href="#features" className="hover:text-foreground">
                Features
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="#community" className="text-muted-foreground hover:text-foreground">
                Community
              </Link>
              <Link
                href="https://www.xyberchainexplorer.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Explorer
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
