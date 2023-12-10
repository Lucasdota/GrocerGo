"use client";
import React, { useState, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";

interface formDataObject {
  workName: string | null;
  workEmail: string | null;
  workResume: File | null;
  workCellphone: string | null;
	workMessage: string | null
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: EventTarget & {
    elements: HTMLFormControlsCollection;
  };
}

const Form = () => {
  //starts validating onChange only after submitting once
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);
	const [resumeUploaded, setResumeUploaded] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [cellphoneError, setCellphoneError] = useState<string>("");
  const [resumeError, setResumeError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  //called on submitting to validate fields
  function validateForm(data: formDataObject) {
    const errors = [];

    if (data.workName === "") {
      setNameError("Please enter your name");
      errors.push("nameError");
    }
    if (
      data.workEmail!.trim() === "" ||
      !/\S+@\S+\.\S+/.test(data.workEmail!)
    ) {
      setEmailError("Please enter a valid email address");
      errors.push("emailError");
    }
    if (
      data.workCellphone!.trim() === "" ||
      !/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(data.workCellphone!)
    ) {
      setCellphoneError("Please enter a cellphone number");
      errors.push("cellphoneError");
    }
    if (!data.workResume!.name) {
      setResumeError("Please send us your resume");
      errors.push("resumeError");
    }
    if (data.workMessage!.length < 10) {
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
      workName: formData.get("work_name") as string | null,
      workEmail: formData.get("work_email") as string | null,
      workCellphone: formData.get("work_cellphone") as string | null,
      workResume: formData.get("work_resume") as File | null,
      workMessage: formData.get("work_message") as string | null,
    };

		console.log(formDataObject.workResume);
		

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

	function validateResume(e: ChangeEvent<HTMLInputElement>) {
		if (!submittedOnce) return;

		if (e.target.value) {
			setResumeError("");
			setResumeUploaded(true);
		}	else {
			setResumeError("Please send us your resume");
			setResumeUploaded(false);
		}
	}

	function validateMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    if (!submittedOnce) return;

    if (
      e.target.value.length < 10
    ) {
      setMessageError("Please tell us more about yourself");
    } else {
      setMessageError("");
    }
  }

  return (
    <form
      action="/submit"
      method="POST"
      onSubmit={handleSubmit}
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white/70"
    >
      {/* name */}
      <label htmlFor="work_name">
        <span className="block text-gray-700 text-sm font-bold mb-1">
          Full Name:
        </span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
          id="work_name"
          onChange={validateName}
          name="work_name"
          type="text"
          placeholder="john doe"
					autoComplete="name"
        />
        <div className="h-4 flex mb-1 mt-0.5 ml-2">
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
      <label htmlFor="work_email">
        <span className="block text-gray-700 text-sm font-bold mb-1">
          Email:
        </span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
          onChange={validateEmail}
          id="work_email"
          name="work_email"
          type="email"
					autoComplete="email"
          placeholder="youremail@.com"
        />
        <div className="h-4 flex mb-1 mt-0.5 ml-2">
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

      {/* cellphone */}
      <label htmlFor="work_cellphone">
        <span className="block text-gray-700 text-sm font-bold mb-1">
          Phone Number:
        </span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
          id="work_cellphone"
          onChange={validateCellphone}
          name="work_cellphone"
          type="tel"
					autoComplete="tel"
          placeholder="123-456-7891"
        />
        <div className="h-4 flex mb-1 mt-0.5 ml-2">
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

      {/* resume */}
      <label htmlFor="work_resume">
        <div className="flex gap-2 items-center mt-4">
          <div className="text-gray-700 shadow text-sm font-bold cursor-pointer bg-white/40 px-4 py-2 rounded border border-neutral-200 active:translate-y-0.5 focus:shadow-outline hover:bg-white focus:bg-white transition duration-200 flex gap-2 items-center">
            <span>Upload your resume</span>
            <BsDownload />
          </div>
          <AnimatePresence mode="wait">
            {resumeUploaded ? (
              <motion.span
                className="flex items-center gap-1 text-sm text-neutral-700"
                key="file-span"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AiOutlineFileDone className="text-green-2 w-5 h-5" /> File
                uploaded!
              </motion.span>
            ) : (
              <motion.p
                className="text-gray-700 text-sm"
                key="file2-span"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                (PDF format only)
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <input
          type="file"
          className="hidden"
          id="work_resume"
          name="work_resume"
          accept=".pdf"
          onChange={validateResume}
        />
        <div className="h-4 flex mb-4 mt-0.5 ml-2">
          <AnimatePresence>
            {resumeError && (
              <motion.span
                role="alert"
                aria-label="resume field error"
                className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                key="resumeError-span"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {resumeError}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </label>

      {/* message */}
      <label htmlFor="work_message">
        <span className="block text-gray-700 text-sm font-bold mb-1">
          Message:
        </span>
        <textarea
          spellCheck="false"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 min-h-[100px] hover:bg-white focus:bg-white transition duration-200"
          id="work_message"
          name="work_message"
          onChange={validateMessage}
          placeholder="Send us a message..."
        />
        <div className="h-4 flex mb-8 ml-2">
          <AnimatePresence>
            {messageError && (
              <motion.span
                role="alert"
                aria-label="message field error"
                className="text-red-400 text-[0.75rem] md:text-[0.6rem] md:leading-4"
                key="messageError-span"
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

      {/* button */}
      <div className="flex items-center justify-between">
        <button
          aria-label="submit form"
          className="bg-green-4 hover:bg-green-4/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
