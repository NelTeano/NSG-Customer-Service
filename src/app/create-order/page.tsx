'use client'
import React, { Component, useState } from 'react'

// COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeaderBanner from '@/components/headerbanner/Header'
import MenuCard from '@/components/MenuCard/MenuCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import {
  Trash
} from "lucide-react"

import { NextPage } from 'next'

interface Order {
  name: string;  
  diningOption: string; 
}

const menuInventory = [
  {
    name: "Sisig Wrap",
    category: "Snacks",
    subCategory: [
      {
        name: "Solo",
        price: 150,
      },
      {
        name: "Buy 1 Take 1",
        price: 250,
      },
    ],
  },
  {
    name: "Beef Shawarma",
    category: "Snacks",
    subCategory: [
      {
        name: "Solo",
        price: 180,
      },
      {
        name: "Buy 1 Take 1",
        price: 300,
      },
    ],
  },
  {
    name: "Beef Shawarma Rice",
    category: "Main Dishes",
    subCategory: [
      {
        name: "Solo",
        price: 150,
      },
      {
        name: "Barkada",
        price: 270,
      },
      {
        name: "Family",
        price: 400,
      },
    ],
  },
  {
    name: "Tapsilog Rice",
    category: "Main Dishes",
    subCategory: [
      {
        name: "Solo",
        price: 150,
      },
      {
        name: "Barkada",
        price: 270,
      },
      {
        name: "Family",
        price: 400,
      },
    ],
  },
  {
    name: "Sisig Rice",
    category: "Main Dishes",
    subCategory: [
      {
        name: "Solo",
        price: 140,
      },
      {
        name: "Barkada",
        price: 260,
      },
      {
        name: "Family",
        price: 380,
      },
    ],
  },
  {
    name: "Sisig",
    category: "Main Dishes",
    subCategory: [
      {
        name: "Solo",
        price: 140,
      },
      {
        name: "Barkada",
        price: 260,
      },
      {
        name: "Family",
        price: 380,
      },
    ],
  },
  // Add Drinks Category
  {
    name: "Coke",
    category: "Drinks",
    subCategory: [
      {
        name: "Swakto",
        price: 50,
      },
      {
        name: "Mismo",
        price: 50,
      },
      {
        name: "Malaki",
        price: 50,
      },
    ],
  },
  {
    name: "Royal",
    category: "Drinks",
    subCategory: [
      {
        name: "Swakto",
        price: 50,
      },
      {
        name: "Mismo",
        price: 50,
      },
      {
        name: "Malaki",
        price: 50,
      },
    ],
  },
  {
    name: "Sprite",
    category: "Drinks",
    subCategory: [
      {
        name: "Swakto",
        price: 50,
      },
      {
        name: "Mismo",
        price: 50,
      },
      {
        name: "Malaki",
        price: 50,
      },
    ],
  },
  {
    name: "Regular Rice",
    category: "Addons",
    subCategory: [
      {
        name: "1x Qty",
        price: 10,
      },
      {
        name: "2x Qty",
        price: 20,
      },
      {
        name: "3x Qty",
        price: 30,
      },
    ],
  },
  {
    name: "Java Rice",
    category: "Addons",
    subCategory: [
      {
        name: "1x Qty",
        price: 10,
      },
      {
        name: "2x Qty",
        price: 20,
      },
      {
        name: "3x Qty",
        price: 30,
      },
    ],
  },
  {
    name: "Egg",
    category: "Addons",
    subCategory: [
      {
        name: "1x Qty",
        price: 10,
      },
      {
        name: "2x Qty",
        price: 20,
      },
      {
        name: "3x Qty",
        price: 30,
      },
    ],
  },
];

const Page: NextPage = ({}) => {

  const [order, setOrder] = useState<Order>({
    name: '',        
    diningOption: ''  
  });
  
  
  const Categories = ['Main Dishes', 'Snacks', 'Drinks', 'Addons'];
  const packageType = ['Dine In', 'Take out', 'Delivery'];  
  

    

    return (
      <div className='flex flex-row h-auto min-h-[1000px] bg-BaseBg'>
        <div className='flex flex-col gap-10 w-full bg-BaseBg p-4'>
          <div>
            <HeaderBanner />
          </div>
            <Tabs defaultValue="Main Dishes" className="relative w-full">
              <TabsList className="w-full justify-start rounded-none bg-transparent p-0 mb-4">
                {Categories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category}
                    className="relative rounded-none border-b-2 border-b-[#2D303E] bg-transparent px-4 pb-3 pt-2 font-semibold text-white shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primaryOrange data-[state=active]:text-primaryOrange data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <p className='text-left'>{category}</p>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Categories.map((categories, index) => (
                <TabsContent 
                  key={index}
                  className="flex flex-row flex-wrap gap-8"
                  value={categories}
                >
                  {menuInventory
                    .filter(menu => menu.category === categories) // Filter based on the current category
                    .map((menus, index) => (
                      <MenuCard 
                        key={index} 
                        name={menus.name} 
                        subCategory={menus.subCategory}
                      />
                    ))
                  }
                </TabsContent>
              ))}
            </Tabs>
        </div>
        <div className='flex flex-col w-[500px] bg-DarkBg p-6 gap-4'>
            <div>
              <p className='text-white text-lg'>
                Customer Orders
              </p>
            </div>
            <div className='flex gap-2'>
                {packageType.map((type, index) => (
                  <Button key={index} className='text-primaryOrange bg-transparent border border-Light h-10 w-17 text-sm p-2'>{type}</Button>
                ))}
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between text-white text-sm'>
                <p>Item</p>
                <div className='flex flex-row gap-8'>
                  <p>Qty</p>
                  <p>Price</p>
                </div>
              </div>
              <Separator className="my-4" />
            <div className='flex flex-col gap-6 h-[350px] border-b pb-4 pt-2 border-Light w-full bg-transparent overflow-hidden overflow-y-scroll'>
                {[0,1,2,3,4,5,6,7,8,9].map((item, index) => (
                  <ItemCard key={index} />
                ))}
            </div>
            <div className='flex flex-row justify-between items-center text-sm mt-2 gap-8'>
              <div className='flex flex-col gap-2 text-Light'>
                <div>
                  <p>Received</p>
                  <p>Change</p>
                </div>
                <div>
                  <p className='text-lg'>Total</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 text-white'>
                <div>
                  <div className='flex flex-row gap-2'>
                    <p>₱</p>
                    <Input className='h-5 w-20 text-DarkBg text-right' placeholder='####' />
                  </div>
                  <p className='text-right text-sm'>50</p>
                </div>
                <p className='text-right text-lg'>100</p>
              </div>
            </div>
            </div>
           <Button
            className='bg-primaryOrange text-white border-none hover:bg-primaryOrange hover:shadow-md hover:shadow-primaryOrange transition delay-75 ease-in hover:border-2 hover:border-DarkBg'
           >
            Submit Order
           </Button>
        </div>
      </div>
    )
}


export default Page;


const ItemCard: React.FC = (props): JSX.Element => {

    return (
      <div className='flex flex-row justify-between w-full h-[110px] gap-4 bg-DarkBg border-none'>
        <div className='flex flex-col w-full justify-between gap-2'>
          <div className='flex flex-row justify-between text-white text-sm'>
            <div>
              <p>Shawarma Rice</p>
              <p className='text-Light' >₱ 70</p>
            </div>
            <Input 
              className='h-12 w-12 bg-BaseBg border border-[#393C49] text-white text-center'
              defaultValue={1}
            />
          </div>
          <Input 
              className='h-12 bg-BaseBg border border-[#393C49] text-Lighter placeholder:text-Light text-left' 
              placeholder='Order Note...'
            />
        </div>
        <div className='flex flex-col justify-between text-white'>
          <p className='text-right'>5000</p>
          <Button className='h-12 w-13 text-lg text-primaryOrange border border-primaryOrange bg-transparent'>
              <Trash className='h-13 w-13' />
          </Button>
        </div>
      </div>
    )
}

