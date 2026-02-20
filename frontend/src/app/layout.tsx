import "./globals.css";

import { Navigation } from "@/src/components/Navigation";
import { Footer } from "@/src/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}











// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
// import "./globals.css";
// // import ClientLayout from "./client-layout";

// export const metadata: Metadata = {
//   title: "UNECAS - Western Africa Business Linkage",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         suppressHydrationWarning={true}
//         className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}
//       >
//         {/* <ClientLayout>{children}</ClientLayout> */}
//       </body>
//     </html>
//   );
// }

