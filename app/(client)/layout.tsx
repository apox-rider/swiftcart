import type { Metadata } from "next";
import "../globals.css";
import { Geist } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
 

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "JengaCloud",
  description: "An e-commerce platform for swift and seamless shopping experience for hardwares and building materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <Script id="google-translate-init" strategy="afterInteractive">
            {`
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,sw,fr',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `}
          </Script>
          {/*  External Google Script */}
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
          <Header />
          <TooltipProvider>
            <div className="flex flex-col">
              <main className="flex-1 ">
                {children}
              </main>
            </div>
          </TooltipProvider>
          <Footer />
      </ThemeProvider>

    </ClerkProvider>
  );
}
