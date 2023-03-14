"use client";
import Link from "next/link";
import "../styles/global.css";
import { Roboto } from "next/font/google";
import { useSelectedLayoutSegment } from "next/navigation";

const font = Roboto({ weight: "700", subsets: ["latin"] });

const Menu: React.FC = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="navbar">
      <Link
        className={font.className}
        href="/"
        style={
          segment === null
            ? { outline: "2px solid #456af0" }
            : { outline: "none" }
        }>
        Main
      </Link>
      <span>|</span>
      <Link
        className={font.className}
        href="/favorites"
        style={
          segment === "favorites"
            ? { outline: "2px solid #456af0" }
            : { outline: "none" }
        }>
        Favorites
      </Link>
    </div>
  );
};

export default Menu;
