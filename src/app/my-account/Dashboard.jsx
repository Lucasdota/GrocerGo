import Image from "next/image";
import { GoCopy } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dashboard = ({ setCopiedSnackbar }) => {
  const [copied, setCopied] = useState({
    name: false,
    email: false,
  });
  const { data: session } = useSession();

  const handleCopy = (field) => {
    setCopied({ ...copied, [field]: true });
    setCopiedSnackbar(true);
    setTimeout(() => {
      setCopied({ ...copied, [field]: false });
      setCopiedSnackbar(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col">
      {/* title */}
      <h2 className="text-gray-800 text-3xl tracking-wider mx-auto mb-12 font-bold font-sansita drop-shadow-sm xxs:text-2xl">
        Dashboard
      </h2>

      {/* terms */}
      <div className="rounded-lg p-8 border space-y-4 whitespace-normal text-gray-700 w-full">
        <h3 className="text-xl font-bold">Comprehensive Overview</h3>
        <p>
          In the vast digital landscape, our Terms of Use serve as the guiding
          principles that govern your interaction with our platform. By
          accessing and utilizing our services, you agree to abide to our terms.
        </p>
        <p>
          Here is the document -{" "}
          <Link
            href="/terms"
            className="font-bold underline underline-offset-2 cursor-pointer"
          >
            Terms
          </Link>
        </p>
      </div>

      <div className="gap-8 flex flex-col lg:h-fit mt-8">
        {/* profile pic */}
        <div className="flex flex-col gap-4 lg:gap-8 items-center">
          <Image
            src={session.user.image}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full aspect-square"
          />
          <h2 className="text-gray-800 whitespace-normal text-center">
            Profile picture retrieved from your login provider.
          </h2>
        </div>

        <div className="h-1 w-full bg-gray-200 rounded-lg shadow xl:hidden" />

        <div className="space-y-4 mx-auto">
          {/* name */}
          <div className="flex items-center gap-2 w-fit min-w-[400px] lg:min-w-fit lg:w-full">
            <span
							id="username"
              className="font-semibold text-gray-800 w-14"
            >
              Name:
            </span>
            <p
							aria-describedby="username"
              className="w-full flex sm:flex-wrap items-center relative p-2 pr-8 border border-gray-300 bg-white rounded text-gray-600"
            >
              {session.user.name}
              <CopyToClipboard
                text={session.user.name}
                onCopy={() => handleCopy("name")}
              >
                <span className="ml-2 cursor-pointer absolute right-3">
                  {copied.name ? (
                    <IoCheckmarkDone className="text-green-2" />
                  ) : (
                    <GoCopy className="text-gray-600" />
                  )}
                </span>
              </CopyToClipboard>
            </p>
          </div>
          {/* email */}
          <div className="flex items-center relative gap-2 w-fit min-w-[400px] lg:min-w-fit lg:w-full">
            <span
              id="my email"
              className="font-semibold text-gray-800 w-14"
            >
              Email:
            </span>
            <p
              aria-describedby="my email"
              className="w-full flex sm:flex-wrap items-center relative p-2 pr-8 border border-gray-300 bg-white rounded text-gray-600"
            >
              {session.user.email}
              <CopyToClipboard
                text={session.user.email}
                onCopy={() => handleCopy("email")}
              >
                <span className="ml-2 cursor-pointer absolute right-3">
                  {copied.email ? (
                    <IoCheckmarkDone className="text-green-2" />
                  ) : (
                    <GoCopy className="text-gray-600" />
                  )}
                </span>
              </CopyToClipboard>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
