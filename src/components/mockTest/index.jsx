import React from "react";
import { Icons } from "@/assets/icons";
import { cardData } from "@/utils/data";

const MockTest = () => {
  return (
    <>
      <div className="container">
        <div className="flex-col pt-10 text-darkBlue">
          <h2 className="text-darkBlue font-bold text-4xl pb-10">
            Mock - Ielts
          </h2>
          <div className="bg-white p-8 rounded-2xl flex-col grid gap-10">
            <h3 className="font-bold text-2xl">IELTS - Mock test 1</h3>
            <div className="flex gap-5">
              {cardData.map((el) => {
                return (
                  <div
                    className="bg-gray rounded-2xl p-6 w-64 flex-col gap-5 grid"
                    key={el.id}
                  >
                    <span>{el.icon}</span>
                    <p className="text-darkBlue font-bold text-xl">
                      {el.title}
                    </p>
                    {/*  */}
                    <progress
                      className="progress progress-primary w-52 "
                      value={el.procress}
                      max="100"
                    ></progress>
                    {/*  */}
                    <button className=" p-2 transition  flex items-center border-darkBlue border-2 gap-2 rounded-2xl hover:border-blue hover:bg-blue hover:text-white text-darkBlue w-52 mt-4 group   justify-center">
                      Boshlash{" "}
                      <span className="text-xl w-3.5 block mb-1 group-hover:text-white">
                        →
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockTest;
