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
import { Input } from "../ui/input";
import { CirclePlus, CircleMinus, SendHorizonal} from "lucide-react"

interface MenuDetails {
    name: string,
    subCategory: subCategory[]
}


interface subCategory {
    name: string,
    price: number,
}

interface Order {
    name: string, option: string, quantity: number, price: number
}

const MenuCard: React.FC<MenuDetails> = (props): JSX.Element => {

    const [Quantity, setQuantity] = useState(1);
    const [isOpen, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<subCategory>()
    const [order, setOrder] = useState<Order>()

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10); // Parse the input value as an integer
        if (!isNaN(value) && value >= 1) { // Ensure it's a valid number and at least 1
          setQuantity(value);
        }
    };

    const handleSubmit = (name: string, option: string, quantity: number, price: number) => {
        // console.log(`${name} ${option}  added with quantity: ${quantity} total price: ${price * quantity}`);
        setOrder({
            name: name,        
            option: option,
            quantity: quantity,
            price: price * quantity,
          });

        setOpen(false);
        setQuantity(1)
    };
    console.log("Order Data to be submitted: ", order)

    const subCategory = props.subCategory;

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <div className='flex flex-col w-[150px] h-auto bg-DarkBg rounded-md cursor-pointer shadow-md'>
                <DialogTrigger onClick={() => setOpen(true)}>
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
                    <Dialog>
                        <div className="flex flex-row w-full bg-DarkBg justify-center items-center gap-6 flex-wrap mt-4">
                            {subCategory.map((options, index) => (
                                <div key={index}>
                                    <DialogTrigger>
                                    <div
                                        className="flex flex-col justify-center items-center text-white rounded-sm bg-primaryOrange h-auto w-[190px] min-h-[100px]"
                                        onClick={(() => setSelectedOption({name: options.name, price: options.price}))}
                                    >
                                        <VisuallyHidden>
                                            <DialogTitle>MenuCard {options.name}</DialogTitle>
                                            <DialogDescription>MenuCard Description</DialogDescription>
                                        </VisuallyHidden>
                                            <p className="text-lg">
                                                {options.name}
                                            </p>
                                            <p className="text-sm">
                                                Price : {options.price}
                                            </p>
                                    </div>
                                    </DialogTrigger>
                                    <DialogContent
                                        className="flex flex-row items-center bg-DarkBg border border-Light shadow-sm max-w-xl"
                                    >
                                        <Input
                                            className="flex text-center text-[40px] h-[140px] w-[130px] bg-BaseBg border border-[#393C49] text-white disabled:opacity-100 disabled:cursor-not-allowed"
                                            type="number"
                                            value={Quantity}
                                            onChange={handleQuantityChange}
                                            min={1}
                                            max={20}
                                            disabled
                                        />
                                        <div className="flex flex-col justify-center gap-4">
                                            <Button 
                                                className="h-20 w-20 bg-transparent border border-primaryOrange text-primaryOrange"
                                                onClick={() => Quantity < 20 ? setQuantity(Quantity + 1) : null}
                                            >
                                                <CirclePlus className="h-15 w-15" />
                                            </Button>
                                            <Button 
                                                className="h-20 w-20 bg-transparent border border-primaryOrange text-primaryOrange"
                                                onClick={() => Quantity > 1 ? setQuantity(Quantity - 1) : null}
                                            >
                                                <CircleMinus className="h-15 w-15" />
                                            </Button>
                                        </div>
                                        <DialogClose asChild>
                                            <Button 
                                                className="flex flex-row items-center justify-center text-white text-sm rounded-sm gap-2 h-[80px] w-[150px] bg-primaryOrange"
                                                onClick={(() => handleSubmit(props.name, selectedOption.name, Quantity, selectedOption.price))}
                                            >
                                                <p>Add Order</p> 
                                                <SendHorizonal className="h-13 w-13 " />
                                            </Button>
                                        </DialogClose>
                                    </DialogContent>
                                </div>
                            ))}
                        </div>
                    </Dialog>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default MenuCard;