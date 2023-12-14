"use client"
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import GoogleMaps from "./GoogleMaps";
import StoreItem from "./StoreItem";

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

const storeLocations: StoreLocation[] = [
  {
    lat: 33.5207,
    lng: -86.8025,
    address: "543 Maple Ave, Birmingham, AL",
    state: "AL",
    title: "Southern Charm Store",
    telephone: "(555) 444-3333",
    timeWeek: "8:30 AM - 6:30 PM",
    timeHoliday: "9:30 AM - 5:30 PM",
  },
  {
    lat: 33.4484,
    lng: -112.074,
    address: "654 Pine St, Phoenix, AZ",
    state: "AZ",
    title: "Desert Oasis Store",
    telephone: "(333) 444-5555",
    timeWeek: "9:30 AM - 7:30 PM",
    timeHoliday: "10:30 AM - 5:30 PM",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    address: "567 Cedar Dr, San Francisco, CA",
    state: "CA",
    title: "Golden Gate Store",
    telephone: "(444) 555-6666",
    timeWeek: "9:00 AM - 7:00 PM",
    timeHoliday: "10:00 AM - 5:00 PM",
  },
  {
    lat: 36.7783,
    lng: -119.4179,
    address: "432 Maplewood Rd, Fresno, CA",
    state: "CA",
    title: "Central Valley Store",
    telephone: "(777) 888-9999",
    timeWeek: "8:00 AM - 7:00 PM",
    timeHoliday: "9:00 AM - 5:00 PM",
  },
  {
    lat: 33.6846,
    lng: -117.8265,
    address: "765 Cedar Dr, Irvine, CA",
    state: "CA",
    title: "OC Sunshine Store",
    telephone: "(555) 444-3333",
    timeWeek: "10:00 AM - 7:00 PM",
    timeHoliday: "Closed on Holidays",
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    address: "234 Oakwood Ave, Denver, CO",
    state: "CO",
    title: "Mile-High Store",
    telephone: "(123) 456-7890",
    timeWeek: "9:00 AM - 7:00 PM",
    timeHoliday: "10:00 AM - 5:00 PM",
  },
  {
    lat: 25.7617,
    lng: -80.1918,
    address: "876 Chestnut St, Miami, FL",
    state: "FL",
    title: "Ocean Breeze Store",
    telephone: "(555) 444-3333",
    timeWeek: "10:00 AM - 6:00 PM",
    timeHoliday: "Closed on Holidays",
  },
  {
    lat: 28.6139,
    lng: -81.209,
    address: "987 Oakwood Ave, Orlando, FL",
    state: "FL",
    title: "Theme Park Store",
    telephone: "(777) 888-9999",
    timeWeek: "10:00 AM - 8:00 PM",
    timeHoliday: "11:00 AM - 6:00 PM",
  },
  {
    lat: 41.8781,
    lng: -87.6298,
    address: "789 Oak Blvd, Chicago, IL",
    state: "IL",
    title: "Windy City Store",
    telephone: "(555) 123-4567",
    timeWeek: "10:00 AM - 6:00 PM",
    timeHoliday: "Closed on Holidays",
  },
  {
    lat: 39.2904,
    lng: -76.6122,
    address: "543 Willow St, Baltimore, MD",
    state: "MD",
    title: "Charm City Store",
    telephone: "(111) 222-3333",
    timeWeek: "9:30 AM - 6:30 PM",
    timeHoliday: "10:30 AM - 5:30 PM",
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    address: "876 Chestnut St, Boston, MA",
    state: "MA",
    title: "Historic Boston Store",
    telephone: "(555) 444-3333",
    timeWeek: "10:00 AM - 7:00 PM",
    timeHoliday: "Closed on Holidays",
  },
  {
    lat: 39.0997,
    lng: -94.5786,
    address: "432 Birch Ln, Kansas City, MO",
    state: "MO",
    title: "Midwest Gem Store",
    telephone: "(555) 444-3333",
    timeWeek: "8:00 AM - 6:00 PM",
    timeHoliday: "9:00 AM - 5:00 PM",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    address: "456 Elm Ave, New York, NY",
    state: "NY",
    title: "Central Park Store",
    telephone: "(987) 654-3210",
    timeWeek: "8:00 AM - 8:00 PM",
    timeHoliday: "9:00 AM - 6:00 PM",
  },
  {
    lat: 35.2271,
    lng: -80.8431,
    address: "543 Elm St, Charlotte, NC",
    state: "NC",
    title: "Queen City Store",
    telephone: "(123) 456-7890",
    timeWeek: "9:30 AM - 7:30 PM",
    timeHoliday: "10:30 AM - 5:30 PM",
  },
  {
    lat: 29.7604,
    lng: -95.3698,
    address: "987 Maple Rd, Houston, TX",
    state: "TX",
    title: "Southern Comfort Store",
    telephone: "(777) 888-9999",
    timeWeek: "8:30 AM - 6:30 PM",
    timeHoliday: "11:00 AM - 4:00 PM",
  },
  {
    lat: 32.7767,
    lng: -96.797,
    address: "876 Birch Ln, Dallas, TX",
    state: "TX",
    title: "Texan Pride Store",
    telephone: "(777) 888-9999",
    timeWeek: "8:30 AM - 6:30 PM",
    timeHoliday: "9:30 AM - 4:30 PM",
  },
  {
    lat: 30.2672,
    lng: -97.7431,
    address: "432 Pine St, Austin, TX",
    state: "TX",
    title: "Live Music Store",
    telephone: "(999) 888-7777",
    timeWeek: "9:00 AM - 8:00 PM",
    timeHoliday: "10:00 AM - 4:00 PM",
  },
  {
    lat: 32.7555,
    lng: -97.3308,
    address: "234 Elmwood Rd, Fort Worth, TX",
    state: "TX",
    title: "Texan Treasures Store",
    telephone: "(888) 999-0000",
    timeWeek: "9:00 AM - 6:00 PM",
    timeHoliday: "10:00 AM - 4:00 PM",
  },
  {
    lat: 36.1627,
    lng: -86.7816,
    address: "987 Maplewood Ave, Nashville, TN",
    state: "TN",
    title: "Music City Store",
    telephone: "(777) 888-9999",
    timeWeek: "9:00 AM - 7:00 PM",
    timeHoliday: "10:00 AM - 5:00 PM",
  },
  {
    lat: 47.6062,
    lng: -122.3321,
    address: "765 Pine St, Seattle, WA",
    state: "WA",
    title: "Emerald City Store",
    telephone: "(888) 999-0000",
    timeWeek: "9:00 AM - 6:00 PM",
    timeHoliday: "10:00 AM - 4:00 PM",
  },
];

const dropdownOptions = [
	{ acronym: "AL", state: "Alabama"},
	{ acronym: "AZ", state: "Arizona"},
	{ acronym: "CA", state: "California"},
	{ acronym: "CO", state: "Colorado"},
	{ acronym: "FL", state: "Florida"},
	{ acronym: "IL", state: "Illinois"},
	{ acronym: "MD", state: "Maryland"},
	{ acronym: "MA", state: "Massachusettss"},
	{ acronym: "MO", state: "Missouri"},
	{ acronym: "NY", state: "New York"},
	{ acronym: "NC", state: "North Carolina"},
	{ acronym: "TN", state: "Tennessee"},
	{ acronym: "TX", state: "Texas"},
	{ acronym: "WA", state: "Washington"}
]

type Props = {}

const Interface = (props: Props) => {
	const [selectedState, setSelectedState] = useState<string>('all');
	const [isDropdownFocused, setIsDropdownFocused] = useState(false);
	//dynamic variable display filtered stores from the dropdown menu options
	const filteredStoreLocations =
    selectedState === "all"
      ? storeLocations
      : storeLocations.filter((store) => store.state === selectedState);

	//dropdown menu changes state with selected option		
	const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedState(event.target.value)
	}	 

	const handleDropdownFocus = () => {
    setIsDropdownFocused(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownFocused(false);
  };

	return (
    <>
      <header className="bg-green-5 pr-16 pt-16 pl-16 md:pr-8 md:pt-8 md:pl-8">
        <h1 className="text-3xl italic tracking-wide font-sansita">
          <span className="text-green-1 brightness-125">Our</span> Locations
        </h1>
        <p className="tracking-wide font-sansita">
          Visit us in major cities across the country.
        </p>
      </header>
      <main className="bg-green-5 p-16 md:p-8 pb-[8.5rem] min-h-screen">
        <section>
          <motion.div
            className="drop-shadow-sm h-[60dvh] xs:h-[40dvh] w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <GoogleMaps
              selectedState={selectedState}
              storeLocations={storeLocations}
            />
          </motion.div>
        </section>
        <section className="pt-8">
          {/* DROPDOWN */}
          <label htmlFor="state" id="dropdown-description" className="mr-2">
            Select a state:
          </label>
          <select
            name="state"
            id="state"
            value={selectedState}
            onChange={handleStateChange}
            onFocus={handleDropdownFocus}
            onBlur={handleDropdownBlur}
            aria-expanded={isDropdownFocused}
            aria-describedby="dropdown-description"
            className={`
							font-semibold outline-none px-1 py-[0.15rem] text-green-6 transition duration-300 drop-shadow ${
                isDropdownFocused ? "focused" : ""
              }`}
          >
            <option value="all" defaultChecked>
              All
            </option>
            {dropdownOptions.map((state, index) => (
              <option key={index} value={state.acronym}>
                {state.state}
              </option>
            ))}
          </select>
          <ul className="grid grid-cols-2 md:flex flex-col items-center grid-rows-10 pt-4">
            {filteredStoreLocations.map((store, index) => (
              <StoreItem key={index} store={store} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Interface