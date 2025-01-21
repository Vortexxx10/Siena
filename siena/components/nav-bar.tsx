import Link from "next/link"
import Image from "next/image"
import { UserCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavBarProps {
  pageTitle: string
}

export function NavBar({ pageTitle }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-sm" />
          <span className="text-lg font-semibold hidden sm:inline-block">Your Brand</span>
        </Link>
        <h1 className="text-xl font-bold hidden sm:block">{pageTitle}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold sm:hidden">{pageTitle}</h1>
        <Button variant="ghost" size="icon" aria-label="User profile">
          <UserCircle className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  )
}

