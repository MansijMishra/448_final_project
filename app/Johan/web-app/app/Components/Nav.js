"use client"

import Image from 'next/image';
import dog from '../../public/Dog.svg';
import Link from 'next/link';

function Nav(){
    return <div className="flex h-16 w-full px-5 py-2 bg-white overflow-hidden">
        <Link href={"/"} className='flex gap-3 items-center'>
                <Image src={dog} />
                <h2 className='text-xl font-bold m-0'>Dogpedia</h2>
        </Link>
    </div>
}

export default Nav;