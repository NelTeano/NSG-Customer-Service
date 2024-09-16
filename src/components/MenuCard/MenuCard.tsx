import React from "react";


// MOCK IMAGE 
import SampleDisplay from "../../../public/assets/sisig.jpg"
import Image from "next/image";


interface MenuDetails {
    name: string,
}

const MenuCard: React.FC<MenuDetails> = (props): JSX.Element => {


    return (
        <div className='flex flex-col w-[150px] h-auto bg-DarkBg rounded-md cursor-pointer shadow-md'>
            <div className="h-[130px] w-full bg-BaseBg ">
                <Image 
                    src={SampleDisplay}
                    priority={true}
                    width="0"
                    height="0"
                    className='lg:h-full lg:w-full relative sm:h-[120px] sm:w-full rounded-t-md'
                    alt='product image'
                />
            </div>
            <div className="p-4">
                <p className="text-white text-center text-md">{props.name}</p>
            </div>
        </div>
    )
}

export default MenuCard;