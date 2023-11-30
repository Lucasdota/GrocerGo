import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Fruits",
  description: "GrocerGo fruits page.",
};

const page = () => {
  return (
    <SectionPage
      section="fruits"
      subtitle="Explore nature's sweetness in our fresh fruit!"
      imgLink="/images/sections/fruits.jpg"
    />
  );
};

export default page;
