"use client"
import { GiVibratingSmartphone } from '@react-icons/all-files/gi/GiVibratingSmartphone';
import { MdTouchApp } from '@react-icons/all-files/md/MdTouchApp';
import { HiOutlineChatAlt2 } from "@react-icons/all-files/hi/HiOutlineChatAlt2";
import Link from 'next/link';
import GooglePlay from "../../../public/images/footer/google-play.webp";
import Apple from "../../../public/images/footer/apple.webp";
import Image from 'next/image';
import HandleImageLoad from '@/components/shared/HandleImageLoad';

const Callcenter = () => {
	return (
    <div className="px-20 pb-16 md:px-10 md:pb-8 w-full max-w-[2560px] mx-auto">
      <h3 className="text-3xl mb-8 font-bold flex flex-wrap font-sansita tracking-wide">
        JPMorgan&nbsp;<span className="text-green-4">Callcenter</span>
      </h3>
      <div>
        <div className="flex w-full flex-wrap lg:flex-col lg:items-center lg:gap-4">
          <h4 className="font-semibold flex gap-2 items-center mb-4 text-xl w-full lg:whitespace-normal text-neutral-800">
            <GiVibratingSmartphone className="text-orange-500" />
            JPMorgan Central
          </h4>
          {/* FIRST DIV */}
          <div className="w-1/3 lg:w-full">
            <p className="text-neutral-800 lg:whitespace-normal font-[350]">
              Capital cities, metropolitan areas, and mobile phones:
            </p>
            <Link
              href="tel:+0001112222"
              className="text-neutral-800 font-semibold hover:underline underline-offset-2"
            >
              000 111 2222
            </Link>
          </div>
          {/* SECOND DIV */}
          <div className="w-1/3 lg:w-full flex flex-col items-center lg:items-start">
            <div>
              <p className="text-neutral-800 font-[350]">Other locations:</p>
              <Link
                href="tel:+2221112222"
                className="text-neutral-800 font-semibold hover:underline underline-offset-2"
              >
                222 111 2222
              </Link>
            </div>
          </div>
          {/* THIRD DIV */}
          <div className="w-1/3 lg:w-full flex flex-col items-end lg:items-start">
            <div>
              <p className="text-neutral-800 font-[350]">Service hours:</p>
              <p className="text-neutral-800 lg:whitespace-normal font-[350]">
                Monday to Saturday (excluding national holidays)
              </p>
              <p className="text-neutral-800 font-semibold">
                6:00 AM to 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-300 my-4" />
      <div className="flex lg:flex-col lg:gap-8 w-full">
        {/* FOURTH DIV */}
        <div className="w-1/3 lg:w-full">
          <h4 className="font-semibold flex gap-2 items-center mb-4 text-xl w-full text-neutral-800">
            <HiOutlineChatAlt2 className="text-orange-500" />
            Text Messages
          </h4>
          <p className="text-neutral-800 font-semibold">000 222 3333</p>
        </div>
        {/* FIFTH DIV */}
        <div className="w-1/3 lg:w-full flex flex-col items-center lg:items-start">
          <div>
            <h4 className="font-semibold flex gap-2 items-center mb-4 text-xl w-full text-neutral-800">
              <MdTouchApp className="text-orange-500" />
              JPMorgan App
            </h4>
            <p className="text-neutral-800 font-[350]">
              Chat and others functionalities
            </p>
            <div className="flex gap-2">
              <Link href="" className="w-1/2 lg:w-full flex">
                <div className="flex gap-2 bg-black text-neutral-50 p-2 items-center lg:justify-center">
                  <Image
                    src={GooglePlay}
                    alt="google play"
                    width={128}
                    height={128}
                    onLoad={HandleImageLoad}
                    className="w-10 h-10 transition-opacity opacity-0 duration-[.3s]"
                  />
                  <p className="text-[0.6rem] flex items-start justify-center flex-col leading-3">
                    Available on
                    <br />
                    <span className="text-[0.75rem]">Google Play</span>
                  </p>
                </div>
              </Link>
              <Link href="" className="w-1/2 lg:w-full flex">
                <div className="flex gap-2 bg-black text-neutral-50 p-2 items-center lg:justify-center">
                  <Image
                    src={Apple}
                    alt="apple"
                    width={128}
                    height={128}
                    onLoad={HandleImageLoad}
                    className="w-9 h-9 transition-opacity opacity-0 duration-[.3s]"
                  />
                  <p className="text-[0.6rem] flex items-start justify-center flex-col leading-3">
                    Available in the
                    <br />
                    <span className="text-[0.75rem]">App store</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callcenter