import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Raleway } from "next/font/google";
const raleway = Raleway({
  weight: ["100", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dolar Blue",
  description: "Ultima cotización del dolar blue - Argentina -",
  keywords: [
    "dolarblue",
    "dolar argentina",
    "dolar cotizacion",
    "argentina dolar blue",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`{raleway.className} flex flex-col min-h-screen `}>
        <Navbar />
        <h1 className="text-center text-6xl text-bold p-5">
          Ultima Cotización del dolar
        </h1>
        <h3 className="text-center text-3xl text-bold">Dolar Blue</h3>

        {children}
        <Footer />
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}
