import React, { useRef, useState } from "react";
import { allServices } from "../utils/constants";
import FormBox from "./FormBox";

const PopUpForm = ({ toggleShow }) => {
  const formRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      toggleShow();
    }
  };



  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50"
    >
      <FormBox reference={formRef} />
    </div>
  );
};

export default PopUpForm;
