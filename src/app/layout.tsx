import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blob Dao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="use-credentials"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Electrolize&family=Inter:wght@100;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
