import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./globals.css";
import { PRODUCT_PROVIDER } from "./components/Context";

export const metadata = {
  title: "Home | ShopPost - Your Hub for Products and Content",
  description:
    "Discover a wide range of products and posts in one place. ShopPost brings you a seamless shopping and reading experience, with fast loading, responsive design, and optimized SEO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PRODUCT_PROVIDER>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex mx-auto w-full max-w-screen-xl p-4">
            {children}
          </main>
          <Footer />
        </body>
      </PRODUCT_PROVIDER>
    </html>
  );
}
