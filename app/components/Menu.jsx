import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <Link href="/">Main</Link>
      <Link href="/favorites">Favorites</Link>
    </div>
  );
};

export default Menu;
