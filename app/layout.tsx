import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@100..700&family=Moulpali&display=swap" />
      </head>
      <body className={inter.className}>
      
        {children}
      </body>
    </html>
  );
}