// "use client";

import Searchbar from "./components/SearchBar";

import { Roboto } from "next/font/google";

const font = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={font.className}>
      <Searchbar />
    </main>
  );
}
