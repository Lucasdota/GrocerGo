import Container from "./Container";

export const metadata = {
  title: "GrocerGo | Search results"
};

function SearchResults() {
  return (
    <main className="max-w-[2560px] flex min-h-screen flex-col xl:gap-6 px-64 gg:px-44 xxl:px-28 xl:px-20 lg:px-0 mx-auto w-full md:px-1 pb-[6.5rem]">
      <Container />
    </main>
  );
}

export default SearchResults;
