"use client"
import { ChangeEvent, useState } from "react";
import InternationalList from "./InternationalList";
import PlatinumList from "./PlatinumList";
import BlackList from "./BlackList";

const Interface = () => {
	const [card, setCard] = useState<string>("international");

	const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCard(event.target.value);
  };	 

	return (
    <section className="border-x md:border-none text-gray-800 min-h-[80dvh] shadow w-[90%] mx-auto p-8 md:px-4 xs:px-0 xs:pt-4 md:w-full pb-44 space-y-4 bg-green-5">
      <div className="xs:px-4 md:py-4">
        <label htmlFor="cards" id="select-card" className="mr-2 font-semibold text-neutral-100">
          Select a card:
        </label>
        <select
          name="cards"
          id="cards"
          value={card}
          onChange={handleStateChange}
          aria-describedby="select-card"
          className="outline-none px-1.5 py-[0.15rem] rounded-t-lg text-gray-600"
        >
          <option defaultChecked value="international">
            International
          </option>
          <option value="platinum">Platinum</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="bg-neutral-100">
        {card === "international" ? (
          <InternationalList card={card} />
        ) : card === "platinum" ? (
          <PlatinumList card={card} />
        ) : (
          <BlackList card={card}  />
        )}
      </div>
    </section>
  );
}

export default Interface