import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "vwakesahu",
  description: "Portfolio of vwakesahu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <div vaul-drawer-wrapper="bg-white" className="bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
