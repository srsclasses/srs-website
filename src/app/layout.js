import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The SRS Classes - Best Online & Offline BPSC Coaching",
  description: "Join The SRS Classes for top-notch BPSC preparation. We offer both online and offline classes with expert faculty and comprehensive study material.",
  icons: {
    icon: [
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
