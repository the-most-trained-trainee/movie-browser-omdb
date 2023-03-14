// "use client";

import Searchbar from "./app_files/components/SearchBar";

import { Roboto } from "next/font/google";

const font = Roboto({ weight: "400", subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main className={font.className}>
      <Searchbar />
    </main>
  );
};
export default Home;
