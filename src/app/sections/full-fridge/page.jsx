import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Full Fridge",
  description: "GrocerGo full fridge page.",
};

const page = () => {
  return (
    <SectionPage
      section="full-fridge"
      subtitle="Fill up your entire fridge with our selections."
      imgLink="/images/sections/fridge.webp"
    />
  );
};

export default page;
