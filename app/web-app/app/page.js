import Image from "next/image"

import Nav from "./Components/Nav"
import Upload from "../public/upload.svg"
import happyDog from "../public/happyDog.png"

function Content(){
  return (
    <div className="w-full h-full px-5 mt-5">
      <div className="flex flex-col md:grid md:grid-cols-3">
        <div className="flex flex-col col-span-2 gap-5 md:gap-10">
          <h2 className="text-4xl md:text-5xl md:leading-snug font-bold">Snap, Click, Identify: Unraveling Breeds Through Photos!</h2>
          <div className="flex flex-col gap-3">
            <p>With over <strong>360</strong> recognized dog breeds worldwide, identifying a specific dog can be challenging unless one has taken the time to study each breed.</p>
            <p>Breedpedia makes this <strong>easy</strong>, just upload an image below and get your information in just a <strong>few seconds!</strong>​</p>
          </div>
          <div className="flex justify-center md:block">
            <button className="max-h-12 flex max-w-72 w-56 justify-around px-3 rounded-md border-2 border-solid border-black py-2 items-center">
              <Image src={Upload} />
              <p className="text-black">Upload your Photo!</p>
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <figure className='md:absolute md:bottom-0 md:right-0 md:w-4/12 mx-auto w-6/12'>
            <Image src={happyDog} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
   <div className='w-full min-h-screen bg-[#F5F5F5]'>
    <Nav />
    <Content />
   </div>
  )
}
