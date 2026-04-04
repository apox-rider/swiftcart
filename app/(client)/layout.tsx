import type { Metadata } from "next";
import "../globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
 

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "SwiftCart",
  description: "An e-commerce platform for swift and seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
          <Header />
          <TooltipProvider>
            <div className="flex flex-col">
              <main className="flex-1 ">
                {children}
              </main>
            </div>
          </TooltipProvider>
          <Footer />
    </ClerkProvider>
  );
}
