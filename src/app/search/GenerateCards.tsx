import Image from 'next/image';
import Link from 'next/link';
import AddToCart from "@/components/shared/AddToCart";
import AddToFav from '@/components/shared/AddToFav';

type Props = {
  uiGrid: boolean;
  image: string;
  alt: string;
  title: string;
  old_price: number | undefined;
  price: number;
  section?: string;
};

const GenerateCards = ({
  image,
  alt,
  title,
  old_price,
  price,
  uiGrid,
  section,
}: Props) => {
  //if the title has any space, replaces it with dashes
  const stringWithHyphens = title.toLocaleLowerCase().replace(/\s+/g, "-");
  const stringWithoutNumbersAndSpecialChars = stringWithHyphens.replace(
    /[^a-zA-Z-]/g,
    ""
  );
  const linkTitle =
    stringWithoutNumbersAndSpecialChars.charAt(0) === "-"
      ? stringWithoutNumbersAndSpecialChars.replace(
          stringWithoutNumbersAndSpecialChars.charAt(0),
          ""
        )
      : stringWithoutNumbersAndSpecialChars;

	const fixedSection = section ? section : "undefined";		

  return (
    <li
      className={`${
        uiGrid ? "flex-col border justify-between" : "items-center xs:flex-col"
      } h-fit w-full flex bg-white text-center p-4 rounded-lg transition duration-200 ease-in-out relative after:absolute after:w-full after:h-full after:shadow-[0_5px_20px_rgba(0,0,0,.15)] after:opacity-0 after:transition-[opacity] after:duration-200 after:ease-in-out after:hover:opacity-100 product-card after:z-[-1] after:top-0 after:left-0 group`}
    >
      <AddToFav title={title} />
      <Link
        href={`/sections/${section}/${linkTitle}`}
        className={`${
          uiGrid
            ? "rounded-t-lg flex-col"
            : "border-none justify-center xs:flex-col"
        } flex items-center`}
      >
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className={`${
            uiGrid
              ? "w-3/5 rounded-t-lg pt-3 xl:px-3"
              : "w-36 md:w-24 ml-6 mr-10 md:ml-2 md:mr-6 xs:ml-0 xs:mr-0"
          } drop-shadow`}
        />
        <div
          className={`${
            uiGrid
              ? "mt-4 sm:mt-2 sm:py-2"
              : "text-left text-xl xs:px-4 xl:mr-6"
          } text-gray-700 font-bold w-full py-4 leading-6 flex  flex-col`}
        >
          <small
            className={`${
              uiGrid ? "hidden" : "block"
            } text-[0.7rem] text-gray-500 font-normal`}
          >
            Brand
          </small>
          <h3
            className={`${
              uiGrid
                ? "flex items-center justify-center h-14 sm:text-sm sm:h-12"
                : "md:text-base"
            } whitespace-normal `}
          >
            {title}
          </h3>
          <span
            className={`${
              uiGrid ? "hidden" : "block"
            } xl:text-base md:text-sm xs:whitespace-normal`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            mollitia.
          </span>
          <div>
            <span
              className={`${
                uiGrid ? "inline-block sm:text-[.7rem] sm:mr-1" : "hidden"
              } ${
                old_price === 0 ? "hidden" : "inline-block"
              } font-normal text-sm text-red-500 line-through mr-2`}
            >
              {old_price?.toFixed(2)}
            </span>
            <span
              className={`${
                uiGrid ? "inline-block sm:text-base" : "hidden"
              }  text-green-4 font-extrabold text-2xl`}
            >
              $&nbsp;{price?.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <div
        className={`${
          uiGrid ? "w-full" : "ml-4 w-52 h-full xs:w-full"
        } flex flex-col gap-2`}
      >
        <p
          className={`${
            uiGrid ? "hidden" : "md:text-lg"
          } font-extrabold text-2xl w-full h-full text-green-4 flex items-center justify-center`}
        >
          <span
            className={`${
              old_price === 0 ? "hidden" : "inline-block"
            } font-normal text-sm text-red-500 line-through mr-2 md:text-[.7rem]`}
          >
            {old_price?.toFixed(2)}
          </span>
          $&nbsp;{price?.toFixed(2)}
        </p>
        <AddToCart
          name={title}
          image={image}
          price={price}
          section={fixedSection}
          text={"ADD TO CART"}
          className={`${
            uiGrid
              ? "w-full xs:text-[.65rem] xs:p-2 xxs:text-[.55rem] xxs:gap-0.5"
              : "place-self-end w-full md:text-[.65rem] xs:w-1/2 xs:place-self-center"
          } rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] p-2.5`}
        />
      </div>
    </li>
  );
};

export default GenerateCards