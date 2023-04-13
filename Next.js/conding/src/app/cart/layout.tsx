import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <p className="text-center text-amber-400">현대카드 무이자이벤트중</p>
        {children}
      </body>
    </html>
  );
}
