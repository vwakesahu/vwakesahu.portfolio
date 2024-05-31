import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inter.className} p-4 md:flex md:flex-col md:items-center min-h-[100vh]`}>
        <div className="md:max-w-6xl">{children}</div>
      </body>
    </html>
  );
}
