import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

// SHADCN THEME
import { ThemeProvider } from "@/components/theme/theme-provider"

// PROVIDERS
import QueryClientProvider from "@/components/provider/QueryClientProvider"
import { ClerkProvider } from '@clerk/nextjs'

// COMPONENTS
import SideBar from "@/components/navbar/sidebar";


const noto_sans = Noto_Sans({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "POS RETS",
  description: "POS System for Rets Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInFallbackRedirectUrl="/Home"
      appearance={{
        elements: {
          footer: "hidden",
        },
    }}>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={noto_sans.className}>
        <QueryClientProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <SideBar/>
            <main className="flex flex-col bg-slate-200 h-full w-full text-black ">
              <div className="flex flex-col h-auto ml-[100px]">
                {children}
              </div> 
            </main>
          </ThemeProvider>
        </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
