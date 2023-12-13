"use client";
import Image from "next/image";
import { catalog } from "@/components/shared/Catalog";
import { useEffect, useState } from "react";
import DummyImage from "../../../../public/images/others/more-images.webp";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import GenerateCards from "./GenerateCards";
import SnackbarComponent from "../SnackbarComponent";
import AddToFav from "../AddToFav";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import NoResults from "../../../../public/images/mini-pages/no_results.webp";
import AddBtn from "./AddBtn";
import handleImageLoad from "../HandleImageLoad";

type Product = {
  product: string;
  section: string;
};

const ProductsPage = ({ product, section }: Product) => {
  const [image, setImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [sectionName, setSectionName] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // Get the current pathname from the URL
    const pathname = window.location.pathname;
    // Split the pathname into segments using '/'
    const segments = pathname.replace("/sections", "").split("/");
    setSectionName(segments[1]);
  }, []);

  const objArray = catalog.map((section) => {
    //gets the correct obj containing the params url(product) in the search_words property
    const item = section.products.filter((item) => {
      //if the param url has any dash, it replaces with space
      const spacedParams = product.replace(/-/g, " ");
      const fixedParams = spacedParams.replace(/ +/g, " ");		
      return item.search_words.includes(fixedParams);
    });
    return item;
  });
  const obj = objArray.flat()[0];

  // if no products are found
  if (!obj) {
    return (
      <main className="mx-auto flex flex-col items-center gap-12 min-h-screen px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-3xl font-bold mx-auto text-gray-800 mt-12">
            No products found.
          </h1>
          <button
						aria-label="go back to previous url"
            onClick={() => router.back()}
            className="hover-bg2-effect text-neutral-100 bg-green-4 after:bg-green-3 hover:text-neutral-100 outline outline-[2px] outline-green-3 hover:outline-green-4 font-bold text-2xl  px-4 py-1.5 rounded-lg drop-shadow-md"
          >
            Back
          </button>
        </div>
        <Image
          src={NoResults}
          alt="no results found"
          width={512}
          height={512}
					onLoad={handleImageLoad}
          className="transition-opacity opacity-0 duration-[.3s]"
        />
      </main>
    );
  }

  const slidesImages = [obj.image, DummyImage];
  const productName = product.replace(/-/g, " ").replace("&", "and");
  let relatedProducts = 4;

  return (
    <main
      className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		min-h-screen mx-auto flex justify-center"
    >
      <section className="bg-white p-16 flex flex-col gap-36 xl:gap-16 md:px-4 md:gap-8 xl:p-8 relative lg:pt-14">
        <button
				aria-label="go back to previous url"
          onClick={() => window.history.back()}
          className="absolute top-5 flex items-center gap-1 group shadow p-1 rounded-full bg-neutral-50"
        >
          <AiOutlineArrowLeft className="w-5 h-5 text-green-5 xs:w-4 xs:h-4 group-active:translate-y-[1px]" />
        </button>
        <div className="flex gap-16 xl:flex-col xl:items-center md:gap-8 xs:gap-4">
          {/* slides */}
          <div className="flex h-fit drop-shadow xl:relative">
            <div className="w-24 xl:w-16 xs:w-12 xl:absolute xl:-left-16 xs:-left-12">
              <div className="h-24 xl:h-16 xs:h-12 cursor-pointer relative border-l border-t border-green-4/60">
                {image === 0 && (
                  <motion.div
                    layoutId="border"
                    className="absolute border-green-4/60 border-[3px] w-full h-full z-10"
                  />
                )}
                <Image
                  onClick={() => setImage(0)}
                  src={obj.image}
                  alt={obj.name}
                  width={500}
                  height={500}
                  onLoad={handleImageLoad}
                  className="p-2 transition-opacity opacity-0 duration-[.3s]"
                />
              </div>
              <div className="h-24 xl:h-16 xs:h-12 cursor-pointer relative border-l border-b border-green-4/60">
                {image === 1 && (
                  <motion.div
                    layoutId="border"
                    className="absolute border-green-4/60 border-[3px] w-full h-full z-10"
                  />
                )}
                <Image
                  onClick={() => setImage(1)}
                  src={DummyImage}
                  alt={"dummy image"}
                  width={500}
                  height={500}
                  onLoad={handleImageLoad}
                  className="transition-opacity opacity-0 duration-[.3s]"
                />
              </div>
            </div>
            {/* big image */}
            <div className="w-[30rem] xl:w-96 md:w-80 sm:w-72 xs:w-56 xxs:w-44 aspect-square border border-green-4/60 group">
              <AddToFav title={obj.name} />
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  className="p-12 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: easeInOut }}
                  key={image}
                >
                  {image === 0 ? (
                    <Image
                      src={slidesImages[0]}
                      alt={obj.name}
                      width={500}
                      height={500}
                      priority
                      loading="eager"
											onLoad={handleImageLoad}
                      className="drop-shadow transition-opacity opacity-0 duration-[.3s]"
                    />
                  ) : (
                    <Image
                      src={slidesImages[1]}
                      alt={obj.name}
                      width={500}
                      height={500}
                      priority
                      loading="eager"
											onLoad={handleImageLoad}
                      className="drop-shadow transition-opacity opacity-0 duration-[.3s]"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* details */}
          <div className="space-y-8 xl:flex xl:items-center xl:flex-col xl:space-y-6">
            <h2 className="font-sansita text-4xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-green-4 to-green-5 text-transparent leading-[3rem] sm:text-3xl xxs:text-2xl">
              {obj.name}
            </h2>

            {/* price */}
            <div className="flex gap-16 items-end font-bold">
              <div>
                <p
                  className={`${
                    obj.old_price === 0 ? "hidden" : null
                  } text-sm text-red-500 line-through sm:text-[0.7rem] xxs:text-[0.65rem]`}
                >
                  {obj.old_price.toFixed(2)}
                </p>
                <p className="text-2xl text-green-4 font-extrabold sm:text-xl xxs:text-lg">
                  ${obj.price.toFixed(2)}*
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-gray-600 sm:text-sm">Quantity:</h3>
              <div className="flex gap-4 relative xl:items-center xs:flex-col xs:items-start">
                <div className="w-32 border-[1px]  border-green-4/60 text-gray-600 flex items-center justify-between">
                  {/* quantity button */}
                  <button
                    onClick={() => {
                      if (quantity === 1) return;
                      setQuantity((prev) => prev - 1);
                    }}
                    className="text-white bg-green-4 text-4xl w-10 aspect-square text-center group"
                  >
                    <div className="group-active:translate-y-0.5">-</div>
                  </button>
                  {quantity}
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-white bg-green-4 text-3xl xl:-mr-0.5 w-10 aspect-square text-center group"
                  >
                    <div className="group-active:translate-y-0.5">+</div>
                  </button>
                </div>
                {/* price counter */}
                <div
                  className={`${
                    quantity === 1 ? "hidden" : "flex"
                  } items-center justify-center text-lg gap-4 md:gap-1 xl:absolute xl:-right-36 md:text-sm md:-right-24 xs:static`}
                >
                  <p className="text-gray-600 font-bold">Total:</p>
                  <p className="text-gray-600">
                    $&nbsp;{(obj.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <small className="text-gray-500 font-normal">Stock: 999</small>
            </div>
            {/* add to cart */}
            <AddBtn
              name={obj.name}
              image={obj.image}
              price={obj.price}
              quantity={quantity}
							section={section}
            />
            <p className="leading-5 text-gray-800 xl:whitespace-normal sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos quae minus distinctio molestias facere doloremque modi
              error, eligendi explicabo impedit rem quos neque quod, soluta
              culpa corporis nesciunt repudiandae, facilis natus veniam
              voluptate totam voluptatem libero harum! Et culpa minus odio
              ullam? Non a consequatur odit fugiat culpa labore rerum!
            </p>

            <ul className="list-disc ml-4 text-gray-800 xl:self-start sm:text-sm">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
        </div>

        {/* related products */}
        <div className="pb-[6.5rem]">
          <h3 className="mb-6 text-gray-700 text-3xl font-bold sm:text-2xl xxs:text-xl">
            Related products
          </h3>
          <ul className="grid grid-cols-5 w-full gap-4 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
            {catalog
              .filter((item) => item.section === sectionName)
              .map((item) =>
                item.products.map((item, index) => {
                  if (item.search_words.includes(productName)) {
                    relatedProducts = relatedProducts + 1;
                  }
                  if (
                    !item.search_words.includes(productName) &&
                    index <= relatedProducts
                  ) {
                    return (
                      <GenerateCards
                        key={item.id}
                        image={item.image}
                        title={item.name}
                        old_price={item.old_price}
                        price={item.price}
                        section={section}
                      />
                    );
                  }
                })
              )}
          </ul>
        </div>
      </section>
      <SnackbarComponent />
    </main>
  );
};

export default ProductsPage;
