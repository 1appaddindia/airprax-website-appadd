"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .length(10)
    .required("Number is required")
    .matches(/^\d+$/, "Invalid number"),
  email: yup.string().email("Invalid email").required("Email is required"),
  department: yup.string().required("Product is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    data.toemail = ["vinayak@appaddindia.com", "sales@airprax.com"];
    data.toke = "1dytfchtgfghvyhvvhvh";
    try {
      const response = await axios.post(
        "https://emailer-phi.vercel.app/hospital",
        data
      );
      data.name = "";
      alert("We will contact you soon.");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center p-3 lg:w-[50%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="contact-form"
          method="post"
          className="shadow-xl flex flex-col gap-1 p-5 w-full "
        >
          <div className="text-center m-3 ">
            <h1 className="text-lg">
              We Are <span className="text-[#BF1E2E]">Listening!</span>
            </h1>
            <span>Please contact us if you have any queries.</span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  className="border border-gray-200 p-3 rounded-sm w-full m-2"
                />
                {errors.name && (
                  <span className="text-red-500 ml-3">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                  className="border border-gray-200 p-3 rounded-sm w-full m-2"
                />
                {errors.email && (
                  <span className="text-red-500 ml-3">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("phone")}
                  name="phone"
                  type="text"
                  placeholder="Enter your number"
                  className="border border-gray-200 p-3 rounded-sm w-full m-2"
                />
                {errors.phone && (
                  <span className="text-red-500 ml-3">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  {...register("department")}
                  name="department"
                  type="text"
                  placeholder="Enter the Product name"
                  className="border border-gray-200 p-3 rounded-sm w-full m-2"
                />
                {errors.department && (
                  <span className="text-red-500 ml-3">
                    {errors.department.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input ">
                <textarea
                  {...register("message")}
                  name="message"
                  placeholder="Type Your Requirement in Detail"
                  className="border border-gray-200 p-3 rounded-sm w-full m-2"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 ml-3">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button
                  type="submit"
                  className="bg-[#BF1E2E] border-none p-3 rounded-md text-white mt-3 w-full m-2"
                >
                  Send Message
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
