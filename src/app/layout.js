import "./globals.css";
import { ContextProvider } from "../utils/context";
import Header from "@/_local-components/header";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaMailBulk, FaMailchimp, } from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi"
import {FaMessage} from "react-icons/fa6"

export const metadata = {
  title: "mufcstand blog",
  description: "Get all Manchester united updates here, Live!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <ContextProvider>
        
        <Header />
        
        <div className="hidden fixed md:flex bg-bg p-2 rounded-lg md:flex-col top-[10em] z-50  left-[2em]">
              <div className="mb-[4em] bg-bg"><BiLogoGmail /></div> <div className="flex flex-col">  <FaWhatsapp /> <br />  <FaInstagram /> <br />  <FaFacebook /><br /> <FaTwitter /> </div>
            </div>    
            
            {children}
        </ContextProvider>
      </body>
    </html>
  );
}
