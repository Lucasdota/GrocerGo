import Link from 'next/link';
import { usePathname } from "next/navigation";

const Links = () => {
	const pathname = usePathname();
	return (
    <ul className={`flex w-full justify-between text-sm text-green-5 h-full`}>
      <li className="w-full">
        <Link
          href="/sections/offers"
          className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center group relative flex z-[40] ${
            pathname === "/sections/offers"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">Offers</p>
        </Link>
      </li>

      <li className="w-full">
        <Link
          href="/specials/chefs"
          className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center group relative flex z-[40] ${
            pathname === "/specials/chefs"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">Chefs</p>
        </Link>
      </li>

      <li className="w-full">
        {" "}
        <Link
          href="/specials/blog"
          className={`group w-full h-full after:bg-neutral-300/50 items-center group relative justify-center flex z-[40] ${
            pathname === "/specials/blog"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">GrocerGo Blog</p>
        </Link>
      </li>

      <li className="w-full">
        <Link
          href="/specials/space-you"
          className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center group relative flex z-[40] ${
            pathname === "/specials/space-you"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">Space You</p>
        </Link>
      </li>

      <li className="w-full">
        <Link
          href="/recipes"
          className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center group relative flex z-[40] ${
            pathname === "/recipes"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">Recipes</p>
        </Link>
      </li>

      <li className="w-full">
        <Link
          href="/catalog"
          className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center group relative flex z-[40] ${
            pathname === "/catalog"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">Catalog</p>
        </Link>
      </li>

      <li className="w-full">
        <Link
          href="/my-favorites"
          className={`group w-full h-full after:bg-neutral-300/50 items-center group relative justify-center flex z-[40] ${
            pathname === "/my-favorites"
              ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
              : "hover-bg-effect"
          }`}
        >
          <p className="font-semibold">My Favorites</p>
        </Link>
      </li>
    </ul>
  );
}

export default Links
