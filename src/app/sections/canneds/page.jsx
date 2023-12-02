import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Canneds",
  description: "GrocerGo canneds page.",
};

const page = () => {
  return (
    <SectionPage
      section="canneds"
      subtitle="Canned goodness for your convenience, feel the flavor!"
      imgLink="/images/sections/canneds.webp"
    />
  );
};

export default page;
