import Copyright from "../components/copyright/Copyright";
// import Footer from "../components/footer/Footer";
import "../global.css";
import GlobalProviders from "../GlobalProviders";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <GlobalProviders>{children}</GlobalProviders>
        {/* <Footer /> */}
        <Copyright />
      </body>
    </html>
  );
}
