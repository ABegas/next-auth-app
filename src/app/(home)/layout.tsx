import type { Metadata } from "next";
import { AuthProvider } from "../Providers"
import localFont from "next/font/local";
import "../globals.scss";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const ppneuemontreal = localFont({
    src: [
        {
            path: '../../../public/fonts/pp-neue-montreal-cufonfonts-webfont/ppneuemontreal-thin.woff',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/pp-neue-montreal-cufonfonts-webfont/ppneuemontreal-book.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/pp-neue-montreal-cufonfonts-webfont/ppneuemontreal-medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/pp-neue-montreal-cufonfonts-webfont/ppneuemontreal-bold.woff',
            weight: '700',
            style: 'normal',
        }
    ]
})

export const metadata: Metadata = {
    title: "Controler",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${ppneuemontreal.className} antialiased`}>
            <Header />
            <AuthProvider>
                {children}
            </AuthProvider>
            <Footer />
        </body>
        </html>
    );
}