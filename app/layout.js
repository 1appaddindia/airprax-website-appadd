import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import MyComponent from "../app/CustomScriptComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MyComponent />
      </body>
    </html>
  );
}
