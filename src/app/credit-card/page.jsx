import Header from './Header';
import Discounts from "./Discounts";
import Points from "./Points";
import Cards from "./Cards";
import HowToApp from "./HowToApp";
import Questions from "./Questions";
import Callcenter from "./Callcenter";
import Regulations from "./Regulations";

export const metadata = {
  title: "GrocerGo | Credit Card",
  description:
    "Purchasing online at GrocerGo is effortless, straightforward, and convenient.",
};

const page = () => {
	return (
    <div className="w-full flex flex-col gap-16 min-h-screen">
      <Header />
      <main className="space-y-32">
        <section className="px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-1 space-y-32 max-w-[2560px] mx-auto">
          <Discounts />
          <Points />
          <Cards />
        </section>
        <section>
          <HowToApp />
          <Questions />
          <Callcenter />
          <Regulations />
        </section>
      </main>
    </div>
  );
}

export default page