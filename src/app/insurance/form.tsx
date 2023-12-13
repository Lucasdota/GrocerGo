"use client";
import React, {useState, ChangeEvent} from 'react';
import { motion, AnimatePresence } from "framer-motion"

interface formDataObject {
  insuranceName: string | null;
  insuranceEmail: string | null;
  insuranceNumber: string | null;
  insuranceCellphone: string | null;
  selectedPlan: string | null;
  agreement: string | null;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: EventTarget & {
    elements: HTMLFormControlsCollection;
  };
}

const Form = () => {
	//starts validating onChange only after submitting once
	const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);
	const [plan, setPlan] = useState<string>("");
	const [agreed, setAgreed] = useState<boolean>(false);
	const [nameError, setNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [socialError, setSocialError] = useState<string>("");
	const [cellphoneError, setCellphoneError] = useState<string>("");
	const [planError, setPlanError] = useState<string>("");
	const [agreementError, setAgreementError] = useState<string>("");

	//called on submitting to validate fields
	function validateForm(data: formDataObject) {
		const errors = [];

    if (data.insuranceName === "") {
      setNameError("Please enter your name");
			errors.push("nameError");
    }
    if (
      data.insuranceEmail!.trim() === "" ||
      !/\S+@\S+\.\S+/.test(data.insuranceEmail!)
    ) {
      setEmailError("Please enter a valid email address");
			errors.push("emailError")
    }
    if (
      data.insuranceNumber!.trim() === "" ||
      !/\d{3}-\d{2}-\d{4}/.test(data.insuranceNumber!)
    ) {
      setSocialError("Please enter a valid social number");
			errors.push("socialError")
    }
    if (
      data.insuranceCellphone!.trim() === "" ||
      !/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(data.insuranceCellphone!)
    ) {
      setCellphoneError("Please enter a cellphone number");
			errors.push("cellphoneError")
    }
		if (!data.selectedPlan) {
			setPlanError("Please select a plan")
			errors.push("planError")
		}
		if (!agreed) {
			setAgreementError("You must agree to our clauses in order to proceed");
			errors.push("agreementError")
		}

		//SEND DATA TO THE SERVER
		//if there were a server, we would send the whole data
		if (errors.length === 0) {
      // Send data to the server using Fetch API
      // fetch("https://your-server-url.com/api/submit", {
      //  method: "POST",
      //  body: JSON.stringify(data),
      //  headers: {
      //    "Content-Type": "application/json",
      //  },
      // })
      //  .then((response) => response.json())
      //  .then((responseData) => {
          // Handle successful response
         // console.log("Data sent successfully:", responseData);
        // })
        // .catch((error) => {
          // Handle error
          // console.error("Error sending data:", error);
        // });
    } else {
      // Handle validation errors
      // console.error("Validation errors:", errors);
    }

  }

	const handleSubmit = (event: FormEvent) => {
		setSubmittedOnce(true);
    event.preventDefault();

    // Accessing form data
    const formData = new FormData(event.target as HTMLFormElement);

    // Creating an object with the form data
    const formDataObject: formDataObject = {
      //the FormData object can hold various types of values, including files, so we need to explicitly specify the expected types for each form field
      insuranceName: formData.get("insurance_name") as string | null,
      insuranceEmail: formData.get("insurance_email") as string | null,
      insuranceNumber: formData.get("insurance_number") as string | null,
      insuranceCellphone: formData.get("insurance_cellphone") as string | null,
      selectedPlan: formData.get("selectedPlan") as string | null,
      agreement: formData.get("agreement") as string | null,
    };	

    validateForm(formDataObject);		
  };

	//onChange functions below to validate on real time
	function validateName(e: ChangeEvent<HTMLInputElement>) {
		if (!submittedOnce) return;

      if (e.target.value === "" || e.target.value.length < 3) {
        setNameError("Please enter your name");
      } else {
				setNameError("")
			}
	}

	function validateEmail(e: ChangeEvent<HTMLInputElement>) {
    if (!submittedOnce) return;

    if (e.target.value === "" || !/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

	function validateSocial(e: ChangeEvent<HTMLInputElement>) {
		if (!submittedOnce) return;

    if (e.target.value === "" || !/\d{3}-\d{2}-\d{4}/.test(e.target.value)) {
      setSocialError("Please enter a valid social number");
    } else {
      setSocialError("");
    }
	}

	function validateCellphone(e: ChangeEvent<HTMLInputElement>) {
		if (!submittedOnce) return;

    if (
      e.target.value === "" ||
      !/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(e.target.value)
    ) {
      setCellphoneError("Please enter a cellphone number");
    } else {
      setCellphoneError("");
    }
	}

	function validatePlan(e: any){
		if (!submittedOnce) return;

		setPlan(e.target.value)
	}

	function validateAgreement(){
		if (!submittedOnce) return;

		setAgreed(!agreed)
	}

	return (
    <fieldset>
      <legend className="text-2xl lg:text-lg font-semibold text-green-4 mb-3">
        How to Apply
      </legend>
      <p className="text-green-5 whitespace-normal lg:text-base">
        Applying for our insurance coverage is simple. Fill out this form below
        with your information, read all plans carefully to choose the one that
        suits you better, and we&apos;ll take care of the rest!
      </p>

      {/* FORM */}
      <form
        action="/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="insurance-form flex max-w-[800px] mx-auto font-mono drop-shadow-sm flex-col bg-neutral-200 text-green-5 w-full p-8 lg:text-base border mt-4 border-green-5"
      >
        {/* name */}
        <label className="flex flex-col" htmlFor="insurance_name">
          <span>Name:</span>
          <input
            type="text"
            onChange={validateName}
            id="insurance_name"
            name="insurance_name"
            placeholder="john doe"
            autoComplete="name"
            className="px-2 outline-none w-full"
          />
          <div className="h-4 flex">
            <AnimatePresence>
              {nameError && (
                <motion.span
                  role="alert"
                  aria-label="name field error"
                  key="nameError-span"
                  className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {nameError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </label>

        {/* email */}
        <label className="flex flex-col" htmlFor="insurance_email">
          <span>Email:</span>
          <input
            type="email"
            onChange={validateEmail}
            id="insurance_email"
            name="insurance_email"
            autoComplete="email"
            placeholder="johndoe@email.com"
            className="px-2 outline-none w-full"
          />
          <div className="h-4 flex">
            <AnimatePresence>
              {emailError && (
                <motion.span
                  role="alert"
                  aria-label="email field error"
                  key="emailError-span"
                  className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {emailError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </label>

        {/* social number */}
        <label className="flex flex-col" htmlFor="insurance_number">
          <span>Social Number:</span>
          <input
            type="tel"
            onChange={validateSocial}
            id="insurance_number"
            name="insurance_number"
            pattern="\d{3}-\d{2}-\d{4}"
            placeholder="123-45-6789"
            className="px-2 outline-none w-full"
          />
          <div className="h-4 flex">
            <AnimatePresence>
              {socialError && (
                <motion.span
                  role="alert"
                  aria-label="social number field error"
                  className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                  key="socialError-span"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {socialError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </label>

        {/* cellphone */}
        <label className="flex flex-col" htmlFor="insurance_cellphone">
          <span>Cellphone Number:</span>
          <input
            type="tel"
            onChange={validateCellphone}
            id="insurance_cellphone"
            name="insurance_cellphone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            className="px-2 outline-none w-full"
            autoComplete="tel"
          />
          <div className="h-4 flex">
            <AnimatePresence>
              {cellphoneError && (
                <motion.span
                  role="alert"
                  aria-label="cellphone field error"
                  className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                  key="cellphoneError-span"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {cellphoneError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </label>

        {/* plans */}
        <h3 className="mb-4 mt-1">Select Your Plan:</h3>
        <div className="flex flex-col space-y-4 mb-4 select-none">
          <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 md:whitespace-normal">
            <label
              htmlFor="bronze"
              className="hover:brightness-125 [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:brightness-125 outline-[6px] p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
            >
              <input
                type="radio"
                id="bronze"
                name="selectedPlan"
                value="bronze"
                className="hidden"
                onClick={validatePlan}
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
              htmlFor="silver"
              className="hover:brightness-125  [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:brightness-125 outline-[6px] p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
            >
              <input
                type="radio"
                id="silver"
                name="selectedPlan"
                value="silver"
                className="hidden"
                onClick={validatePlan}
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
              htmlFor="gold"
              className="hover:brightness-125  [&:has(input:checked)]:outline-green-2 [&:has(input:checked)]:outline [&:has(input:checked)]:brightness-125 outline-[6px] p-4 rounded-lg cursor-pointer w-1/3 bg-gradient-to-r from-green-5 to-green-6 text-white transition duration-300 ease-out lg:w-full"
            >
              <input
                type="radio"
                id="gold"
                name="selectedPlan"
                value="gold"
                className="hidden"
                onClick={validatePlan}
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
          <div className="h-4 flex">
            <AnimatePresence>
              {!plan && (
                <motion.span
                  role="alert"
                  aria-label="plan field error"
                  className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                  key="planError-span"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {planError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <p className="text-[0.7rem] lg:whitespace-normal">
            *Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
            minima aspernatur quisquam? Nam omnis, quos libero qui, nesciunt
            nobis ab quibusdam mollitia ex nihil, provident hic soluta a
            exercitationem minus nisi explicabo quam! Voluptatibus fugiat velit
            maiores eveniet eaque suscipit officia eum similique beatae ipsum.
            Quam debitis ad dolorum!
          </p>
        </div>

        {/* AGREEMENT */}
        <label
          htmlFor="agreement"
          className="text-sm whitespace-normal flex items-start h-fit"
        >
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            onClick={validateAgreement}
            className="mr-1 mt-[2.5px] accent-green-3"
          />
          <div className="h-20 md:h-24 xs:h-32 xxs:h-40">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              excepturi at ratione rerum, alias dolore.
            </p>
            <div className="flex">
              <AnimatePresence>
                {!agreed && (
                  <motion.span
                    role="alert"
                    aria-label="agreement field error"
                    className="text-red-400 text-[0.75rem]"
                    key="agreementError-span"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {agreementError}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </label>

        {/* SUBMIT BUTTON */}
        <button
          aria-label="submit form"
          type="submit"
          className="bg-green-5 lg:text-base px-4 py-1 text-white w-fit mx-auto hover:brightness-150 transition duration-300 focus:outline-none focus:ring focus:border-green-2 active:bg-green-6 block"
        >
          Apply
        </button>
      </form>
    </fieldset>
  );
}

export default Form