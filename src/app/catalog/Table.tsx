import { catalog } from "@/components/shared/Catalog";
import CapitalizeWords from "@/components/shared/CapitalizeWords";

type Props = {
  discount: number;
	card: string;
};

type ObjectProps = {
	id: number;
	category: string;
	image: string;
	name: string;
	old_price: number;
	price: number;
	search_words: string[];
}

const Table = ({ discount, card }: Props) => {
	const noDuplicatesCatalog:ObjectProps[]  = [];
	const title = CapitalizeWords(card);

	catalog.forEach((obj) => {
		obj.products.forEach((obj2) => {
			// Check if an object with the same "name" value exists in noDuplicatesCatalog
			const isDuplicate = noDuplicatesCatalog.some(
				(existingObj) => existingObj.name === obj2.name
			);

			// If not a duplicate, add it to the noDuplicatesCatalog
			if (!isDuplicate) {
				noDuplicatesCatalog.push(obj2);
			}
		})	
	});

	noDuplicatesCatalog.sort((a, b) => {
    // Use localeCompare for case-insensitive alphabetical sorting
    return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  });

  return (
    <table className="w-full text-left border divide-y divide-gray-300 text-gray-700 shadow">
      <caption className="text-2xl md:text-xl xxs:text-base font-semibold py-2 px-4 border-t border-x border-gray-300 md:leading-5 xxs:leading-4">
        <h3>{title}&nbsp;Card Table</h3>
        <small className="md:text-sm  xxs:text-[0.7rem]">
          {discount === 0.03 ? "3%" : discount === 0.06 ? "6%" : "9%"}
          &nbsp;Discount On All Products
        </small>
      </caption>
      <thead>
        <tr className="md:text-sm xxs:text-[0.65rem]">
          <th className="px-3 py-1.5 xs:px-2 xs:py-0.5 border-r xxs:leading-4 border-gray-300">
            Product
          </th>
          <th className="px-3 py-1.5 xs:px-2 xs:py-0.5 border-r xxs:leading-4 border-gray-300">
            Old Price
          </th>
          <th className="px-3 py-1.5 xs:px-2 xs:py-0.5 border-r xxs:leading-4 border-gray-300">
            Sale Price
          </th>
          <th className="px-3 py-1.5 xs:px-2 xs:py-0.5 border-r xxs:leading-4 border-gray-300">
            Discount Value
          </th>
          <th className="px-3 py-1.5 xs:px-2 xs:py-0.5 xxs:leading-4">
            Final Price
          </th>
        </tr>
      </thead>
      <tbody className="w-full md:text-[0.8rem] xxs:text-[0.55rem]">
        {noDuplicatesCatalog.map((item, index) => {
          const discountPrice = item.price - item.price * discount;
          const diffPrice = (item.price - discountPrice).toFixed(2);
          return (
            <tr key={index} className="text-gray-700">
              <td className="px-3 py-1.5 xs:px-2 xs:py-0.5 border border-gray-300">
                {item.name}
              </td>
              <td className="px-3 py-1.5 xs:px-2 xs:py-0.5 border border-gray-300">
                {item.old_price === 0 ? "-/-" : item.old_price}
              </td>
              <td className="px-3 py-1.5 xs:px-2 xs:py-0.5 border border-gray-300">
                {item.price}
              </td>
              <td className="px-3 py-1.5 xs:px-2 xs:py-0.5 border border-gray-300">
                {diffPrice}
              </td>
              <td className="px-3 py-1.5 xs:px-2 xs:py-0.5 border border-gray-300">
                {discountPrice.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
