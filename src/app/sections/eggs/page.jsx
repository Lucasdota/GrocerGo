import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Eggs",
  description: "GrocerGo eggs page.",
};

const page = () => {
  return (
    <SectionPage
      section="eggs"
      subtitle="Eggcellent choices: Explore freshness and variety."
      imgLink="/images/sections/eggs.jpg"
    />
  );
};

export default page;
