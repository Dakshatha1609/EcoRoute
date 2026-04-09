import "./globals.css";

export const metadata = {
  title: "EV Infrastructure Planning System",
  description: "ML-based EV station planning",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
