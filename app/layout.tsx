import type { Metadata } from "next";
import { Inter as FontSans, Geist_Mono as FontMono } from "next/font/google";
import "./globals.css";

import Link from "next/link";

import { Nav, Section, Container, Main } from "@/components/ds";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

const fontSans = FontSans({
  variable: "--font-font-sans",
  subsets: ["latin"],
});

const fontMono = FontMono({
  variable: "--font-font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Main className="flex-1">{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <Nav
      containerClassName="flex justify-between items-center gap-2 sticky top-0 z-50"
      className="border-b bg-accent/30"
    >
      <Link className="font-semibold tracking-tight" href="/">
        Logo
      </Link>

      <Button>
        <Link href="#">Get Started</Link>
      </Button>
    </Nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section className="border-t bg-accent/30">
        <Container className="space-y-2">
          <Link className="font-semibold tracking-tight block" href="/">
            Logo
          </Link>
          <p className="text-muted-foreground text-sm">
            © 2025 Logo. All rights reserved.
          </p>
          <ModeToggle />
        </Container>
      </Section>
    </footer>
  );
};
