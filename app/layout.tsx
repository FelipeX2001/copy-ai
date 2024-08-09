import { Montserrat } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CopyAI | IApps",
  description: "Asistente IA para copywrite",
  icons: {
    icon: "/aiclon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/aiclon.svg" alt="AICLON Logo" />
      </body>
    </html>
  );
}
