import Footer from "./footer";
import Navmenu from "./navmenu";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-karla",
});

export default function Layout({ children }: any) {
  return (
    <>
      <Navmenu />
      <div className="w-full 2xl:block 2xl:mx-auto p-5 bg-whitebkg">
        <main className={`${karla.variable} font-sans`}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
