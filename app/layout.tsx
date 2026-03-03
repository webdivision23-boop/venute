import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsButton from "@/components/WhatsButton";

export const metadata = {
  title: "Venute",
  description: "Vestidos para momentos inesquecíveis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsButton />
      </body>
    </html>
  );
}