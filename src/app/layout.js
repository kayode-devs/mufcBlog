import "./globals.css";
import { ContextProvider } from "../utils/context";
import Header from "@/_local-components/header";


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
        
        <div className="absolute hidden md:flex md:flex-col top-3  left-[2em]">
              <div className="mb-[4em]">M</div> <div className="flex flex-col"> M <br />  M <br /> M <br /> M </div>
            </div>    
            
            {children}
        </ContextProvider>
      </body>
    </html>
  );
}
