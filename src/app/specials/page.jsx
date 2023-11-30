import Interface from "./Interface";

export const metadata = {
  title: "GrocerGo | Specials",
  description: "GrocerGo specials page.",
};

const page = () => {
  return (
    <main
      className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		mx-auto"
    >
      <Interface />
    </main>
  );
};

export default page;
