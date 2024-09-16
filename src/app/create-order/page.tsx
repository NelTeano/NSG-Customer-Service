'use client'
import React, { Component } from 'react'

// COMPONENTS
import HeaderBanner from '@/components/headerbanner/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCard from '@/components/MenuCard/MenuCard'

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


const Categories = ['Main Dishes', 'Snacks', 'Drinks', 'Addons'];


export default class Page extends Component {



  render() {
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
                      <MenuCard key={index} name={menus.name} />
                    ))
                  }
                </TabsContent>
              ))}
              {/* <TabsContent value="Snacks">
                Snacks
              </TabsContent>
              <TabsContent value="Drinks">
                Drinks
              </TabsContent>
              <TabsContent value="Addons">
                Addons
              </TabsContent> */}
            </Tabs>
        </div>
        <div className='flex flex-col w-[500px] bg-DarkBg'>
           asdasd
        </div>
      </div>
    )
  }
}
