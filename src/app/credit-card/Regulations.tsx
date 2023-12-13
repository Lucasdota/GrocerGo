import Link from 'next/link';
import React from 'react'

const Regulations = () => {
	return (
    <div className="px-20 md:px-10 w-full bg-green-4 text-neutral-50 pb-[9.5rem]">
      <div className="mx-auto max-w-[2560px]">
        <div className="flex justify-around lg:flex-wrap md:whitespace-normal">
          <Link
            href="https://grocergo.vercel.app/credit-card"
            className="p-12 lg:p-6"
          >
            Contract
          </Link>
          <Link
            href="https://grocergo.vercel.app/credit-card"
            className="p-12 lg:p-6"
          >
            Tariff
          </Link>
          <Link
            href="https://grocergo.vercel.app/credit-card"
            className="p-12 lg:p-6"
          >
            International Card Regulation
          </Link>
          <Link
            href="https://grocergo.vercel.app/credit-card"
            className="p-12 lg:p-6"
          >
            Platinum Card Regulation
          </Link>
          <Link
            href="https://grocergo.vercel.app/credit-card"
            className="p-12 lg:p-6"
          >
            Black Card Regulation
          </Link>
        </div>
        <div className="whitespace-normal text-sm space-y-4">
          <div>
            <p>
              To access all the benefits of GrocerGo stores and the GrocerGo
              cards, such as discounts, installment plans, and a points program,
              you will be enrolled, at no additional cost, within 30 (thirty)
              days of credit card activation in the &quot;Customer Plus&quot;
              Loyalty Club, managed by GrocerGo. If you prefer, you can already
              enjoy the Customer Plus benefits by downloading the GrocerGo app
              from your mobile app store, filling out the registration, and
              enjoying these benefits. Just don&apos;t forget to always activate
              the discounts.
            </p>
          </div>

          <div>
            <p>
              Important: Always remember to understand how all the benefits that
              GrocerGo and Customer Plus bring work, as failure to comply with
              the rules for granting benefits does not guarantee the advantages
              that are available to you.
            </p>
          </div>

          <div>
            <p>
              You will be redirected to a secure JPMorgan domain. Any and all
              information provided here will be entered directly into the
              JPMorgan CBD S.A. Credit Financing and Investment system, located
              at Rd. Ficticious Adress, 100, Seattle - Washington, which will
              provide your credit analysis. GrocerGo simply provides quicker and
              easier access to the JPMorgan page, where the credit card proposal
              can be filled out.
            </p>
          </div>

          <div>
            <p className="font-[350]">
              If you have any questions, visit
              http://www.anywebsite.com/customers-service
            </p>
          </div>

          <div>
            <p>Customer Service Center:</p>
            <ul>
              <li>Capital and metropolitan regions: 300 333 3030</li>
              <li>Other locations: 000 720 3030</li>
            </ul>
            <p>Ombudsman: 000 570 0011</p>
          </div>

          <div>
            <p className="font-[350]">
              This company provides services as a correspondent contracted by
              JPMorgan Financial N.A, as per CMN Resolution No. 4,935/2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regulations