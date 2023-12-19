import Image from 'next/image';
import dog from '../../public/Dog.svg';

function Nav(){
    return <div className="flex max-h-16 w-full px-5 py-2 bg-white">
        <div className="flex gap-3 items-center">
            <Image src={dog} />
            <h2 className='text-xl font-bold'>Breedpedia</h2>
        </div>
    </div>
}

export default Nav;