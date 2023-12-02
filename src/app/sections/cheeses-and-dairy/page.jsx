import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Cheeses and Dairy",
  description: "GrocerGo cheeses and dairy page.",
};

const page = () => {
  return (
    <SectionPage
      section="cheeses-and-dairy"
      subtitle="Say cheeeeese while eating our cheeses!"
      imgLink="/images/sections/cheeses.webp"
    />
  );
};

export default page;
