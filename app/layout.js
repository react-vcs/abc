import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import "./globals.css";

export const metadata = {
  title: "Home | ShopPost - Your Hub for Products and Content",
  description:
    "Discover a wide range of products and posts in one place. ShopPost brings you a seamless shopping and reading experience, with fast loading, responsive design, and optimized SEO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex mx-auto w-full max-w-screen-xl p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
