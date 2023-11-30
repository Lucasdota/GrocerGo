import Link from 'next/link';
import { usePathname } from "next/navigation";

const Links = () => {
	const pathname = usePathname();
	return (
    <ul className={`flex w-full justify-between text-sm text-green-5 h-full`}>
      <Link
        href="/sections/offers"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/sections/offers"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">Offers</p>
        </li>
      </Link>

      <Link
        href="/specials/chefs"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/specials/chefs"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">Chefs</p>
        </li>
      </Link>

      <Link
        href="/specials/blog"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/specials/blog"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">GrocerGo Blog</p>
        </li>
      </Link>

      <Link
        href="/specials/space-you"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/specials/space-you"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">Space You</p>
        </li>
      </Link>

      <Link
        href="/recipes"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/recipes"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">Recipes</p>
        </li>
      </Link>

      <Link
        href="/catalog"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/catalog"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">Catalog</p>
        </li>
      </Link>

      <Link
        href="/my-favorites"
        className={`group w-full h-full after:bg-neutral-300/50 items-center justify-center flex z-[40] ${
          pathname === "/my-favorites"
            ? "hover:after:opacity-100 hover:after:scale-100 relative overflow-hidden after:absolute after:w-full after:h-full after:-z-10"
            : "hover-bg-effect"
        }`}
      >
        <li className="group relative">
          <p className="font-semibold">My Favorites</p>
        </li>
      </Link>
    </ul>
  );
}

export default Links
