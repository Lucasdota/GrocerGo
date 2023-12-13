"use client";
import React, { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface formDataObject {
  contactName: string | null;
  contactEmail: string | null;
  contactMessage: string | null;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: EventTarget & {
    elements: HTMLFormControlsCollection;
  };
}

const Form = () => {
  //starts validating onChange only after submitting once
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  //called on submitting to validate fields
  function validateForm(data: formDataObject) {
    const errors = [];

    if (data.contactName === "") {
      setNameError("Please enter your name");
      errors.push("nameError");
    }
    if (
      data.contactEmail!.trim() === "" ||
      !/\S+@\S+\.\S+/.test(data.contactEmail!)
    ) {
      setEmailError("Please enter a valid email address");
      errors.push("emailError");
    }
    if (
      data.contactMessage!.trim() === "" ||
      !/\d{3}-\d{2}-\d{4}/.test(data.contactMessage!)
    ) {
      setMessageError("Please tell us more about yourself");
      errors.push("messageError");
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
      contactName: formData.get("contact_name") as string | null,
      contactEmail: formData.get("contact_email") as string | null,
      contactMessage: formData.get("contact_message") as string | null,
    };	
    validateForm(formDataObject);
  };

  //onChange functions below to validate on real time
  function validateName(e: ChangeEvent<HTMLInputElement>) {
    if (!submittedOnce) return;

    if (e.target.value === "" || e.target.value.length < 3) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
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

	function validateMessage(e: ChangeEvent<HTMLTextAreaElement>) {
		if (!submittedOnce) return;

		if (e.target.value === "" || e.target.value.length < 10) {
      setMessageError("Please tell us more about yourself");
    } else {
      setMessageError("");
    }
	}

  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-4 mb-4 lg:text-lg lg:mb-3">
        Contact Form
      </h2>
      <form
        action="/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="grid grid-cols-2 md:flex md:flex-col gap-6 font-mono"
      >
        {/* name */}
        <label htmlFor="contact_name" className="lg:text-base">
          <span>Name:</span>
          <input
            type="text"
            onChange={validateName}
            id="contact_name"
            name="contact_name"
            placeholder="john doe"
            autoComplete="name"
            className="w-full border lg:text-base border-green-5 text-green-5 p-1 px-2 rounded-lg drop-shadow outline-none "
          />
          <div className="h-4 mt-0.5 ml-2 flex">
            <AnimatePresence>
              {nameError && (
                <motion.span
                  role="alert"
                  aria-label="name field error"
                  key="nameError-span"
                  className="text-red-400 text-[0.75rem]"
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
        <label htmlFor="contact_email" className="lg:text-base">
          <span>Email:</span>
          <input
            type="email"
            onChange={validateEmail}
            id="contact_email"
            name="contact_email"
            autoComplete="email"
            placeholder="johndoe@email.com"
            className="w-full border lg:text-base border-green-5 text-green-5 p-1 px-2 rounded-lg drop-shadow outline-none"
          />
          <div className="h-4 mt-0.5 ml-2 flex">
            <AnimatePresence>
              {emailError && (
                <motion.span
                  role="alert"
                  aria-label="email field error"
                  key="emailError-span"
                  className="text-red-400 text-[0.75rem]"
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
        {/* message */}
        <label
          htmlFor="contact_message"
          className="lg:text-base col-span-2 w-full"
        >
          <span>Message:</span>
          <textarea
            onChange={validateMessage}
            id="contact_message"
            name="contact_message"
            placeholder="Leave your message here"
            className="w-full border lg:text-base border-green-5 text-green-5 p-1 px-2 rounded-lg min-h-[10rem] outline-none drop-shadow"
          />
          <div className="h-4 ml-2 flex">
            <AnimatePresence>
              {messageError && (
                <motion.span
                  role="alert"
                  aria-label="message field error"
                  key="messageError-span"
                  className="text-red-400 text-[0.75rem]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {messageError}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </label>

        <div className="col-span-2">
          <button
            aria-label="submit form"
            type="submit"
            className="py-2 px-4 rounded-lg lg:text-base text-green-5 w-fit mx-auto drop-shadow hover-bg2-effect outline outline-[1px] outline-green-5 active:translate-y-[3px] hover:text-white after:bg-green-5"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
