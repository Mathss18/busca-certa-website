import Copyright from "../components/copyright/Copyright";
import Footer from "../components/footer/Footer";
import "../global.css";
import Providers from "../Providers";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body>
        <Providers>
          {children}
          {/* <Footer /> */}
          <Copyright />
        </Providers>
      </body>
    </html>
  );
}
