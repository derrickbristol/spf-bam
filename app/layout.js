
import "./globals.css";



export const metadata = {
  title: "BAM",
  description: "Benefit Application Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
