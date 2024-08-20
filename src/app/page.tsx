'use client'
import Image from "next/image";
import Script from 'next/script';

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { setTheme } = useTheme()

  return (
    <main className="flex flex-col bg-slate-200 h-full w-full text-black">
      <div className="mt-[80px]">
        <p>This is the form page</p>
        <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
          <div>
            <Script
              id="chatling-embed-script"
              strategy="afterInteractive"
              src="https://chatling.ai/js/embed.js"
              async
              data-id="8414771916"
            />
          </div>
      </div>
    </main>
  )
}

export default Page