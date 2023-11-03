import "./globals.css";
import { ContextProvider } from "../utils/context";

export const metadata = {
  title: "matera",
  description: "Onestop spot for all study materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
        <ContextProvider>
            {children}
        </ContextProvider>
      </body>
    </html>
  );
}
