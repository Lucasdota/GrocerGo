"use client"
import React, { useState } from 'react'
import { BsRocket } from 'react-icons/bs';
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import { LiaMapMarkerAltSolid } from 'react-icons/lia'
import { AnimatePresence, motion } from 'framer-motion';

const Delivery = () => {
  const [firstIsOpen, setFirstIsOpen] = useState<boolean>(false);
  const [secondIsOpen, setSecondIsOpen] = useState<boolean>(false);
  const [thirdIsOpen, setThirdIsOpen] = useState<boolean>(false);
  const [fourthIsOpen, setFourthIsOpen] = useState<boolean>(false);
	
  return (
    <section className="flex flex-col gap-16 w-full md:px-4">
      <div>
        <h3 className="text-green-5 text-5xl md:mb-2 lg:text-3xl font-bold leading-normal tracking-wide font-sansita">
          Explore Our Delivery Options:
        </h3>
        <p className="text-green-3 text-3xl lg:text-xl sm:whitespace-normal leading-8 font-sansita">
          The product you desire <br className="md:hidden" /> delivered at your
          preferred time and location.
        </p>
      </div>
      {/* CARDS */}
      <div className="flex flex-col w-full font-nunito md:text-sm">
        <div className="flex gap-8 mb-8 flex-wrap w-full justify-center">
          {/* first */}
          <div id="first-card" className="md:w-full">
            <div className="w-[678px] md:w-full overflow-hidden bg-white rounded-xl flex md:flex-col drop-shadow-xl">
              <div className="w-1/5 md:w-full bg-green-5 rounded-l-xl md:rounded-t-xl md:rounded-l-none md:py-4 flex flex-col px-4 pt-6">
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-2">
                  <BsRocket className="text-green-3 w-10 h-10 md:w-7 md:h-7" />
                  <p className="text-white text-sm font-bold text-center leading-5">
                    Flash
                    <br className="md:hidden" /> Devilery
                  </p>
                </div>
              </div>
              <div className="w-4/5 md:w-full flex flex-col items-center px-10 py-7 md:px-6 md:py-4">
                <button
                  id="flash-delivery"
                  aria-label="click to expand details"
                  aria-expanded={firstIsOpen}
                  onClick={() => setFirstIsOpen(!firstIsOpen)}
                  className={`leading-7 md:leading-6 md:mx-auto md:text-center w-full ${
                    firstIsOpen ? "mb-3" : "mb-0"
                  } transition-all duration-300`}
                >
                  <p className="whitespace-normal text-left">
                    With Flash delivery, you receive your purchases within 60
                    minutes, and enjoy free shipping on orders over $99. <br />
                    <span
                      className={`transition duration-300 font-thin ${
                        firstIsOpen ? "text-neutral-400" : "text-blue-400"
                      }`}
                    >
                      [Learn more]
                    </span>
                  </p>
                </button>
                <AnimatePresence>
                  {firstIsOpen && (
                    <motion.div
                      id="flash-delivery-details"
                      aria-labelledby="flash-delivery"
                      role="region"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-neutral-500 text-left leading-6 whitespace-normal">
                        This delivery option is available in select stores and
                        has a limit of up to 10 items per order. Please check
                        the availability of this option in your region.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* second */}
          <div id="second-card" className="md:w-full">
            <div className="w-[678px] md:w-full overflow-hidden bg-white rounded-xl flex md:flex-col drop-shadow-xl whitespace-normal min-h-[140px]">
              <div className="w-1/5 md:w-full bg-green-5 rounded-l-xl md:rounded-t-xl md:rounded-l-none md:py-4 flex flex-col px-4 pt-6">
                <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-2">
                  <MdOutlineDeliveryDining className="text-green-3 w-12 h-12 md:w-8 md:h-8" />
                  <p className="text-white text-sm font-bold text-center leading-5">
                    Right
                    <br className="md:hidden" />
                    &nbsp;On
                  </p>
                </div>
              </div>
              <div className="w-4/5 md:w-full flex flex-col items-center px-10 py-7 md:px-6 md:py-4">
                <button
                  id="right-on"
                  aria-label="click to expand details"
                  aria-expanded={secondIsOpen}
                  onClick={() => setSecondIsOpen(!secondIsOpen)}
                  className={`leading-7 md:leading-6 md:mx-auto md:text-center w-full ${
                    secondIsOpen ? "mb-3" : "mb-0"
                  } transition-all duration-300`}
                >
                  <p className="whitespace-normal text-left">
                    Shop now and receive your purchases within 120 minutes.
                    <br />
                    <span
                      className={`transition duration-300 font-thin ${
                        secondIsOpen ? "text-neutral-400" : "text-blue-400"
                      }`}
                    >
                      [Learn more]
                    </span>
                  </p>
                </button>
                <AnimatePresence>
                  {secondIsOpen && (
                    <motion.div
                      id="right-on-details"
                      aria-labelledby="right-on"
                      role="region"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-neutral-500 text-left leading-6">
                        Visit the GrocerGo website or app and select the
                        &apos;Right On&apos; option, available for purchases
                        until 5:00 PM, with a limit of up to 20 units per order.
                        Please check the availability of this option in your
                        region.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap w-full justify-center">
          {/* third */}
          <div id="third-card" className="md:w-full">
            <div className="w-[678px] md:w-full overflow-hidden bg-white rounded-xl flex md:flex-col drop-shadow-xl">
              <div className="w-1/5 md:w-full bg-green-5 rounded-l-xl md:rounded-t-xl md:rounded-l-none md:py-4 flex flex-col px-4 pt-6">
                <div className="flex-col flex md:flex-row md:justify-center items-center md:gap-2">
                  <TbTruckDelivery className="text-green-3 w-10 h-10 md:w-8 md:h-8" />
                  <p className="text-white text-sm font-bold text-center leading-5">
                    Express Delivery
                  </p>
                </div>
              </div>
              <div className="w-4/5 md:w-full flex flex-col items-center px-10 py-7 md:px-6 md:py-4">
                <button
                  id="express-delivery"
                  aria-label="click to expand details"
                  aria-expanded={thirdIsOpen}
                  onClick={() => setThirdIsOpen(!thirdIsOpen)}
                  className={`leading-7 md:leading-6 md:mx-auto md:text-center w-full ${
                    thirdIsOpen ? "mb-3" : "mb-0"
                  } transition-all duration-300`}
                >
                  <p className="whitespace-normal text-left">
                    With Express Delivery, you will receive your purchases on
                    the same day or within one business day from the purchase
                    date.
                    <br />
                    <span
                      className={`transition duration-300 font-thin ${
                        thirdIsOpen ? "text-neutral-400" : "text-blue-400"
                      }`}
                    >
                      [Learn more]
                    </span>
                  </p>
                </button>
                <AnimatePresence>
                  {thirdIsOpen && (
                    <motion.div
                      id="express-delivery-details"
                      aria-labelledby="express-delivery"
                      role="region"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-neutral-500 text-left leading-6">
                        In this option, there is no limit on items, allowing you
                        to secure everything for your substantial purchase.
                        Furthermore, we deliver orders to all cities where
                        GrocerGo operates, including inland areas, coastal
                        regions, and mountainous areas.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* fourth */}
          <div id="fourth-card" className="md:w-full">
            <div className="w-[678px] md:w-full overflow-hidden bg-white rounded-xl flex md:flex-col drop-shadow-xl">
              <div className="w-1/5 md:w-full bg-green-5 rounded-l-xl md:rounded-t-xl md:rounded-l-none md:py-4 flex flex-col px-4 pt-7">
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-2">
                  <LiaMapMarkerAltSolid className="text-green-3 w-10 h-10 md:w-8 md:h-8" />
                  <p className="text-white text-sm font-bold text-center leading-5">
                    Click and Collect
                  </p>
                </div>
              </div>
              <div className="w-4/5 md:w-full flex flex-col items-center px-10 py-7 md:px-6 md:py-4">
                <button
                  id="click-and-collect"
                  aria-label="click to expand details"
                  aria-expanded={fourthIsOpen}
                  onClick={() => setFourthIsOpen(!fourthIsOpen)}
                  className={`leading-7 md:leading-6 md:mx-auto md:text-center w-full ${
                    fourthIsOpen ? "mb-3" : "mb-0"
                  } transition-all duration-300`}
                >
                  <p className="whitespace-normal text-left">
                    Here, you have the option to make purchases on the website
                    or app and then collect them at your preferred store.
                    <br />
                    <span
                      className={`transition duration-300 font-thin ${
                        fourthIsOpen ? "text-neutral-400" : "text-blue-400"
                      }`}
                    >
                      [Learn more]
                    </span>
                  </p>
                </button>
                <AnimatePresence>
                  {fourthIsOpen && (
                    <motion.p
                      id="click-and-collect-details"
                      aria-labelledby="click-and-collect"
                      role="region"                     
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
											<p className="text-neutral-500 text-left leading-6">
Make your purchase on the GrocerGo website or app, select
                      the Click and Collect option, and upon approval, we will
                      send an email, push notification, or SMS informing you of
                      the availability for pickup. Please note that this option
                      has a limit of 150 items per purchase.
											</p>                    
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery