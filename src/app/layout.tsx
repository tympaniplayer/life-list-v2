import "~/styles/globals.css";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ThemeProvider } from "~/components/ThemeProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { ModeToggle } from "~/components/ModeToggle";

export const metadata: Metadata = {
    title: "Life List",
    description: "Mange your Life List",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html
                lang="en"
                className={`${GeistSans.variable}`}
                suppressHydrationWarning
            >
                <head>
                    <title>Life List</title>
                    <link rel="icon" href="/favicon.ico" />
                </head>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TRPCReactProvider>
                            <main className="mx-8 justify-center lg:mx-96">
                                <div className="my-8 flex flex-col">
                                    <div className="flex flex-row justify-between">
                                        <SignedOut>
                                            <SignInButton>
                                                <div className="hover:cursor-pointer hover:underline">
                                                    Sign in to update your Life
                                                    List
                                                </div>
                                            </SignInButton>
                                        </SignedOut>
                                        <SignedIn>
                                            <UserButton />
                                        </SignedIn>
                                        <ModeToggle />
                                    </div>
                                    {children}
                                </div>
                            </main>
                        </TRPCReactProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
