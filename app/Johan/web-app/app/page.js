"use client";

import Image from "next/image";
import { useState } from "react";

import happyDog from "../public/happyDog.png";

import { useRouter } from "next/navigation";

function Content() {
  const router = useRouter();

  const [file, setFile] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      var formdata = new FormData();
      formdata.append("file", file, "n02100583_216.jpg");

      const url = URL.createObjectURL(file);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://74b2-54-83-177-126.ngrok-free.app/predict_breed",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          router.push(`/result?breed=${result.Breed}&imgSrc=${url}`);
        })
        .catch((error) => console.log("error", error));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full h-full px-5 pt-5 ">
      <div className="flex flex-col md:grid md:grid-cols-3">
        <div className="flex flex-col col-span-2 gap-5 md:gap-10">
          <h2 className="text-4xl md:text-5xl md:leading-snug font-bold">
            Snap, Click, Identify: Unraveling Breeds Through Photos!
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              With over <strong>360</strong> recognized dog breeds worldwide,
              identifying a specific dog can be challenging unless one has taken
              the time to study each breed.
            </p>
            <p>
              Breedpedia makes this <strong>easy</strong>, just upload an image
              below and get your information in just a{" "}
              <strong>few seconds!</strong>​
            </p>
          </div>
          <div className="flex md:block">
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
                className="w-fit"
              />
              <input type="submit" className="border-2 rounded-md border-black text-black w-20 cursor-pointer" value="Upload" />
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <figure className="md:absolute md:bottom-0 md:right-0 md:w-4/12 mx-auto w-6/12">
            <Image src={happyDog} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full Main-screen">
      <Content />
    </div>
  );
}
