import SectionPage from "../../../components/shared/SectionsPage/SectionsPage";

export const metadata = {
  title: "GrocerGo | Essentials",
  description: "GrocerGo essentials page.",
};

const page = () => {
  return (
    <SectionPage
      section="essentials"
      subtitle="Everyday essentials, your one-stop shop for necessities."
      imgLink="/images/sections/essentials.webp"
    />
  );
};

export default page;
