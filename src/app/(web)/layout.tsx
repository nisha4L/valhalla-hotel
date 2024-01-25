import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const poppins = Poppins({ subsets : ["latin"],
                           weight : ["400","500","700","900"],
                            style : ["italic","normal"],
                            variable : "--font-poppins"            
                          });

export const metadata: Metadata = {
  title: "Hotel Valhalla",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <NextAuthProvider>
       <ThemeProvider>
        <Toast/>
        <main>
          <Header/>
        {children}
        <Footer/>
        </main>
        </ThemeProvider>
       </NextAuthProvider>
      </body>
    </html>
  );
}
