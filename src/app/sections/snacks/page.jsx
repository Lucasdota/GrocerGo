import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Snacks",
  description: "GrocerGo snacks page.",
};

const page = () => {
  return (
    <SectionPage
      section="snacks"
      subtitle="Snack attack and satisfy your cravings with delicious treats!"
      imgLink="/images/sections/snacks.webp"
    />
  );
};

export default page;
