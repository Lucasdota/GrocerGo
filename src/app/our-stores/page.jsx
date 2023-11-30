import Interface from "./Interface";

export const metadata = {
  title: "GrocerGo | Our Stores",
  description: "Visit us in major cities across the country.",
};

const OurStoresPage = () => {
  return (
    <main className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 text-white min-h-screen max-w-[2560px] mx-auto">
      <Interface />
    </main>
  );
};

export default OurStoresPage;
