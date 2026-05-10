import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "InstaLink - Automação de Instagram | Transforme Comentários em Leads",
  description: "Responda comentários e envie links no direct automaticamente. Capture leads durante lives sem equipe ou trabalho manual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
