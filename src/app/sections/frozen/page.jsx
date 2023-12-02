import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Frozen",
  description: "GrocerGo frozen page.",
};

const page = () => {
  return (
    <SectionPage
      section="frozen"
      subtitle="Chill out with our exciting frozen selection."
      imgLink="/images/sections/frozen.webp"
    />
  );
};

export default page;
