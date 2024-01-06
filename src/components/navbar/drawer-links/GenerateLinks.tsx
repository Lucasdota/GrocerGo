import Link from 'next/link';
import { catalog } from '@/components/shared/Catalog';
import UrlizeWords from "@/components/shared/UrlizeWords";

type Props = {
  section: string;
  setIsOpen: (value: boolean) => void;
};

const GenerateLinks = ({ section, setIsOpen }: Props) => {
  const filteredCatalog = catalog.filter((item) => item.section === section);

  // Flatten the filteredCatalog array into an array of individual products
  const allProducts = filteredCatalog.flatMap((item) => item.products);
  const sortedProducts = allProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

	function closeDrawer() {
		const button = document.querySelectorAll(".has-child > button");
    const modal = document.querySelector(".modal");
		setIsOpen(false);
		button.forEach(
			(menu) =>
				function () {
					menu.parentElement?.classList.remove("expand");
				}
		);
		setTimeout(() => {
			modal?.classList.remove("show");
		}, 500);
	}

  return (
    <>
      {sortedProducts.map((product, index) => {
        //changes the products' names to the url format with dashes
        const url = UrlizeWords(product.name)
        return (
          <Link
            onClick={closeDrawer}
            key={index}
            href={`/sections/${section}/${url}`}
          >
            <li
              key={index + 1}
              className="pl-6 py-3 hover:bg-neutral-300 text-green-6"
            >
              {product.name}
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default GenerateLinks