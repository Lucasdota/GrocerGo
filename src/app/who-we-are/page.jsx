import React from 'react'
import About from './interface'

export const metadata = {
  title: "GrocerGo | Who We Are",
  description: "We let you know who we are.",
};

const page = () => {
	return (
    <main className="max-w-[2560px] mx-auto">
      <About />
    </main>
  );
}

export default page