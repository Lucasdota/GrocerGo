import Image from "next/image";

export const metadata = {
  title: "GrocerGo | Insurance",
  description: "We take care of what's important to you.",
};

const Insurance = () => {
  return (
    <section
      className="text-white w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		min-h-screen mx-auto"
    >
      <header className="bg-green-5 h-80 xl:h-64 md:h-48 flex justify-between rounded-bl-[3rem] md:rounded-bl-none">
        <div className="m-16 md:m-8">
          <h1 className="text-3xl lg:text-2xl md:text-lg tracking-wide font-sansita">
            <span className="italic text-green-1 brightness-125">GrocerGo</span>{" "}
            Insurance
          </h1>
          <p className="lg:text-lg md:text-sm md:whitespace-normal tracking-wide font-sansita">
            We take care of what&apos;s important to you.
          </p>
        </div>
        <Image
          src="/images/mini-pages/insurance-1.jpg"
          alt="a happy family"
          width={1920}
          height={1080}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] xs:hidden"
        />
      </header>
      <main className="w-[60%] gg:w-[90%] xxl:w-4/5 xl:w-[90%] lg:w-[90%] mx-auto p-8 md:px-4 md:w-full">
        <section className="mb-8">
          <h2 className="text-2xl lg:text-lg font-semibold text-green-2 mb-3">
            Coverage Plans
          </h2>
          <p className="text-green-5 whitespace-normal lg:text-base">
            We offer a range of insurance coverage plans to protect your
            purchases. Whether it&apos;s accidental damage or theft, our
            insurance has you covered.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl lg:text-lg font-semibold text-green-2 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-green-5 lg:text-base">
            <li>Peace of mind knowing your purchases are protected.</li>
            <li>Quick and hassle-free claims process.</li>
            <li>Flexible coverage options to suit your needs.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl lg:text-lg font-semibold text-green-2 mb-3 ">
            How to Apply
          </h2>
          <p className="text-green-5 whitespace-normal lg:text-base">
            Applying for our insurance coverage is simple. Fill out this form
            below with your information, read all plans carefully to choose the
            one that suits you better, and we&apos;ll take care of the rest!
          </p>

          {/* FORM */}
          <form
            action="/submit"
            method="POST"
            className="flex max-w-[800px] mx-auto font-mono drop-shadow-sm flex-col bg-neutral-200 text-green-5 w-full p-8 lg:text-base border mt-4 border-green-5"
          >
            <label className="" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="john doe"
              required
              className="px-2 mb-4 outline-none"
            />

            <label className="" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@email.com"
              required
              className="px-2 mb-4 outline-none"
            />

            <label className="" htmlFor="number">
              Social Number:
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              pattern="\d{3}-\d{2}-\d{4}"
              placeholder="123-45-6789"
              required
              className="px-2 mb-4 outline-none"
            />

            <label htmlFor="cellphone">Cellphone Number:</label>
            <input
              type="tel"
              id="cellphone"
              name="cellphone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
              className="px-2 mb-4 outline-none"
            />

            {/* PLANS */}
            <h3 className="mb-4">Select Your Plan:</h3>
            <div className="flex flex-col space-y-4 mb-4 select-none">
              <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
                <label
                  htmlFor="bronze"
                  className="hover:brightness-125  [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:scale-105 outline-2 p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
                >
                  <input
                    type="radio"
                    id="bronze"
                    name="selectedOption"
                    value="bronze"
                    className="hidden"
                  />
                  <h3 className="text-xl lg:text-base text-center italic mb-4 text-yellow-600 brightness-150">
                    Bronze
                  </h3>
                  <ul className="text-sm list-disc list-inside p-4">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </label>

                <label
                  htmlFor="Silver"
                  className="hover:brightness-125  [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:scale-105 p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
                >
                  <input
                    type="radio"
                    id="Silver"
                    name="selectedOption"
                    value="Silver"
                    className="hidden"
                  />
                  <h3 className="text-xl lg:text-base  text-center italic mb-4 text-[#C0C0C0] brightness-150">
                    Silver
                  </h3>
                  <ul className="text-sm list-disc list-inside p-4">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </label>

                <label
                  htmlFor="Gold"
                  className="hover:brightness-125  [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:scale-105 p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
                >
                  <input
                    type="radio"
                    id="Gold"
                    name="selectedOption"
                    value="Gold"
                    className="hidden"
                  />
                  <h3 className="text-xl lg:text-base text-center italic mb-4 text-[#FFD700] brightness-150">
                    Gold
                  </h3>
                  <ul className="text-sm list-disc list-inside p-4">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </label>
              </div>
              <p className="text-[0.7rem] lg:whitespace-normal">
                *Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                magnam minima aspernatur quisquam? Nam omnis, quos libero qui,
                nesciunt nobis ab quibusdam mollitia ex nihil, provident hic
                soluta a exercitationem minus nisi explicabo quam! Voluptatibus
                fugiat velit maiores eveniet eaque suscipit officia eum
                similique beatae ipsum. Quam debitis ad dolorum!
              </p>
            </div>

            {/* AGREEMENT */}
            <label
              htmlFor="agreement"
              className="text-sm whitespace-normal mb-4 flex items-start"
            >
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                required
                className="mr-1 mt-[2.5px] accent-green-3"
              />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                excepturi at ratione rerum, alias dolore.
              </p>
            </label>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-green-5 lg:text-base px-4 py-1 text-white w-fit mx-auto hover:brightness-150 transition duration-300"
            >
              Apply
            </button>
          </form>
        </section>
      </main>
      <div className="bg-green-5 h-80 xl:h-64 md:h-48 flex justify-between rounded-tr-[3rem] md:rounded-tr-none">
        <Image
          src="/images/mini-pages/insurance-2.jpg"
          alt="a happy family"
          width={1920}
          height={1080}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] sm:hidden"
        />
        <p className="text-green-1 brightness-125 m-16 md:m-8 md:text-base">
          Contact us at{" "}
          <span className="text-white brightness-100">
            insurance@grocergo.com
          </span>{" "}
          for any inquiries or assistance.
        </p>
      </div>
    </section>
  );
};

export default Insurance;
