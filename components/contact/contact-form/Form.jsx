"use client";

import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Form = () => {
  const signUpSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    textArea: Yup.string().required("Type your requirement in detail"),
    mobileNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10 digit mobile number")
      .required("Enter Your Contact Number"),
  });

  const initialValues = {
    email: "",
    textArea: "",
    mobileNo: "",
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      action.resetForm();
      console.log(values);
    },
  });

  return (
    <div className="lg:flex lg:items-center lg:justify-center p-3 lg:w-[80%]">
      <form
        action=""
        onSubmit={handleSubmit}
        className="shadow-xl flex flex-col gap-1 p-5 w-full"
      >
        <div className="text-center m-3 ">
          <h1 className="text-lg">
            We Are <span className="text-[#BF1E2E]">Listening!</span>
          </h1>
          <span>Please contact us if you have any queries.</span>
        </div>
        <label htmlFor="email">Email id:</label>
        <input
          type="email"
          placeholder="Enter Your Email id..."
          name="email"
          value={values.email}
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-sm"
        />
        {errors.email && touched.email && (
          <p className="text-red-700 mb-5 font-medium text-xs">
            {errors.email}
          </p>
        )}

        <label htmlFor="mobileNo">Mobile No:</label>
        <input
          type="text"
          placeholder="Enter your mobile No..."
          name="mobileNo"
          value={values.mobileNo}
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-sm"
        />
        {errors.mobileNo && touched.mobileNo && (
          <p className="text-red-700 mb-5 font-medium text-xs">
            {errors.mobileNo}
          </p>
        )}

        <label htmlFor="textArea">Requirement:</label>
        <textarea
          placeholder="Type Your Requirement in Detail"
          name="textArea"
          value={values.textArea}
          onChange={handleChange}
          className="border border-gray-200 p-3 rounded-sm"
        />
        {errors.textArea && touched.textArea && (
          <p className="text-red-700 mb-5 font-medium text-xs">
            {errors.textArea}
          </p>
        )}

        <button
          type="submit"
          className="bg-[#BF1E2E] border-none p-3 rounded-md text-white mt-3"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
