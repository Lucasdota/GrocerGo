import Posts from './Posts';
import Image from "next/image";
import Farm from "../../../../public/images/specials/farm.webp";

const Interface = () => {
	return (
    <section className="h-full w-full z-10">
      <header className="h-80 sm:h-60 w-full relative flex items-center justify-center">
        <Image
          src={Farm}
          alt="beautiful farm"
					width={1920}
					height={1279}
          className="w-full h-full object-cover absolute top-0"
        />
        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
          <div className="custom-shape-divider-bottom-1697064370">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-20"
            >
              <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                className="fill-[#ECECDB]"
              ></path>
            </svg>
          </div>
        </div>
        <div className="select-none px-4 pt-2 pb-4 rounded-xl mb-12 sm:mb-14 bg-neutral-100 flex items-center justify-center z-10">
          <h2 className="text-5xl sm:text-3xl tracking-wide font-bold text-green-5 font-sansita">
            Grocer<span className="text-green-3">Go</span>&nbsp;Blog
          </h2>
        </div>
      </header>
      <Posts />
    </section>
  );
}

export default Interface