import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AppContextProvider from "@/app/api/AppContext";
import { Nunito } from "next/font/google";
import ScrollToTop from "@/components/shared/ScrollToTop";
import AddToCartPopUp from "@/components/shared/AddToCartPopUp";
const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} pt-36 xl:pt-0`}>
        <AppContextProvider>
					<Navbar />	
					<AddToCartPopUp />		
					<ScrollToTop />		
					{children}					
					<Footer />							
        </AppContextProvider>
      </body>
    </html>
  );
}
