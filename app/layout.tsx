export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-lt-installed="true">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
