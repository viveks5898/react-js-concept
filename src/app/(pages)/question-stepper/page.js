"use client"
import React from "react";
import Questions from "../../../data/Questions"
import StepperQ from "@/components/QuestionStepper/StepperQ";
const page = () => {
  
  return (
    <div className="container px-3.5 m-auto w-full text-center py-11">
      <h1 className="text-4xl">Multiple Choice Questions</h1>
   <StepperQ  data={Questions}/>
    </div>
  );
};

export default page;
