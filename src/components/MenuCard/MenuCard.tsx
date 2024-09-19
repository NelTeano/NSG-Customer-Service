import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"

import { Separator } from '@/components/ui/separator'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// MOCK IMAGE 
import SampleDisplay from "../../../public/assets/sisig.jpg"
import Image from "next/image";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";


interface MenuDetails {
    name: string,
    subCategory: subCategory[]
}


interface subCategory {
    name: string,
    price: number,
}

const MenuCard: React.FC<MenuDetails> = (props): JSX.Element => {

    const subCategory = props.subCategory

    return (
        <Dialog>
            <div className='flex flex-col w-[150px] h-auto bg-DarkBg rounded-md cursor-pointer shadow-md'>
                <DialogTrigger>
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
                </DialogTrigger>
                <DialogContent className="flex flex-col bg-DarkBg border-none shadow-lg shadow-BaseBg h-auto max-w-3xl min-h-[350px]">
                    <VisuallyHidden>
                        <DialogTitle>MenuCard Title</DialogTitle>
                        <DialogDescription>MenuCard Description</DialogDescription>
                    </VisuallyHidden>
                    <p className="text-white text-lg">
                        {props.name}
                    </p>
                    <div className="flex flex-row justify-center items-center gap-6 flex-wrap mt-4">
                        {
                            subCategory.map((options, index) => (
                                <DialogClose 
                                    className="flex flex-col justify-center items-center text-white rounded-sm bg-primaryOrange h-auto w-[190px] min-h-[100px]"
                                    key={index}
                                >
                                    <p className="text-lg">
                                        {options.name}
                                    </p>
                                    <p className="text-sm">
                                        Price : {options.price}
                                    </p>
                                </DialogClose>
                            ))
                        }
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    )
}

export default MenuCard;