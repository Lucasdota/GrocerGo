import React from "react";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";

type StoreLocation = {
  lat: number;
  lng: number;
  title: string;
  telephone: string;
  timeWeek: string;
  timeHoliday: string;
  address: string;
  state: string;
};

const StoreItem = React.memo(({ store }: { store: StoreLocation }) => {
  return (
    <motion.li
      className="border-b border-neutral-500 text-sm py-4 space-y-1"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      role="listitem"
    >
      <div className="flex items-center gap-1">
        <HiLocationMarker className="w-9 h-9 text-red-500" />
        <div>
          <h3 className="text-green-1 brightness-125">{store.title}</h3>
          <p className="text-sm">{store.address}</p>
        </div>
      </div>
      <p>Telephone: {store.telephone}</p>
      <p>Mon-Sat: {store.timeWeek}</p>
      <p>Sunday and Holidays: {store.timeHoliday}</p>
    </motion.li>
  );
});

export default StoreItem;

StoreItem.displayName = "StoreItem";
