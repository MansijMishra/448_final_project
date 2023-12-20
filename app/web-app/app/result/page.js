"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getID from "../utils/dogIDs";

function Result() {
  const searchParams = useSearchParams();
  const breed = searchParams.get("breed").toLowerCase();
  const imgSrc = searchParams.get("imgSrc");

  const [loading, setLoading] = useState(true);

  const [attributes, setAttributes] = useState({});

  async function getDogInfo() {
    const id = getID(breed);
    console.log(id)
    fetch(`https://dogapi.dog/api/v2/breeds/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        if (json.data) {
          setAttributes(json.data.attributes);
          console.log(json.data.attributes);
        }
      }).catch((error) => console.log(error));
  }

  const LifeExpectancy = () => {
    if (attributes.life) {
      if (attributes.life.max && attributes.life.min) {
        return (
          <div className="flex flex-col text-center text-black">
            <p className="text-lg font-bold">Life Expectancy</p>
            <p>
              {attributes.life.min} - {attributes.life.max}
            </p>
          </div>
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };

  const ExpectedWeight = () => {
    if (attributes.male_weight && attributes.female_weight) {
      if (attributes.male_weight && attributes.female_weight) {
        const min_weight = Math.min(
          attributes.male_weight.min,
          attributes.female_weight.min
        );
        const max_weight = Math.max(
          attributes.male_weight.max,
          attributes.female_weight.max
        );

        return (
          <div className="flex flex-col text-center text-black">
            <p className="text-lg font-bold">Weight</p>
            <p>
              {min_weight} - {max_weight} lbs
            </p>
          </div>
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    setLoading(true);
    getDogInfo()
      .then(() => setLoading(false));
  }, []);

  return loading ? (
    <>loading</>
  ) : (
    <div className="flex flex-col w-full h-full Main-screen justify-center items-center">
      <div className=" w-11/12 md:w-6/12 flex flex-col md:grid md:grid-cols-2 h-fit bg-white rounded-md">
        <div className="flex flex-col gap-5 col-span-1 p-3">
          <div className="flex flex-col text-black">
            <p className="text-lg">That is a...</p>
            <p className="text-3xl font-bold">{breed}</p>
          </div>
          <div className="flex text-justify">
            <p className="text-base">
              {attributes.description ? attributes.description : ""}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <LifeExpectancy />
            </div>
            <div className="col-span-1">
              <ExpectedWeight />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          {imgSrc && imgSrc !== undefined ? <Image
            src={imgSrc}
            width={300}
            height={300}
            alt={"dog"}
            className="rounded-md hidden md:block"
          /> : <></>}  
        </div>
      </div>
    </div>
  );
}
export default Result;
