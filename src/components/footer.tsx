import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-karla",
});

export default function Footer() {
  return (
    <footer
      className={`footer footer-center w-full p-4 bg-palerose text-white mt-5 ${karla.variable} font-sans`}
    >
      <div className="text-center">
        <p>
          Copyright © 2023 -
          <a className="font-semibold" href="mailto:yuritalinda@gmail.com">
            Yuri Baptista
          </a>
        </p>
      </div>
    </footer>
  );
}
