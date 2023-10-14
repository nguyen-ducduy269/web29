import QueryWapper from "./_components/QueryWapper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflowX: "hidden" }}>
        <QueryWapper>{children}</QueryWapper>
      </body>
    </html>
  );
}
