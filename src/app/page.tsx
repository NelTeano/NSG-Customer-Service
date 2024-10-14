'use client'
// import Image from "next/image";
// import Script from 'next/script';

import next from "next";


// // COMPONENTS
// import { useTheme } from "next-themes"
// import { UserProfile } from '@clerk/nextjs'


// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// import { 
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger
// } from "@/components/ui/tabs"


// import { NextPage } from 'next'
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import Header from "@/components/headerBanner/Header";

// // IMAGES

// // ICONS
// import {
//   BookHeart,
//   UserCog,
//   PencilLine,
//   Plus
// } from "lucide-react"

// // MOCK DATA
// import { menuInventory } from '@/lib/mockData'

// // async function getOrders() {
// // 	const orders = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API_DOMAIN}/api/orders`);
// //   return orders.data;
// // }

// async function getInventory() {
//   const inventory = await axios.get('../lib/mock/data/menuInventory.json');
//   return inventory.data;
// }

// interface DishCard {
//   name: string,
//   category: string,
//   subCategory: subCategory[]
// }


// interface subCategory {
//   name: string | undefined,
//   price: number | undefined,
// }


// interface Props {}



// const Page: NextPage<Props> = ({}) => {
//   const { setTheme } = useTheme()

//   // const { data: orders, error: ordersErr, isLoading: ordersLoading } = useQuery({
//   //     queryKey: ['orders'],  
//   //     queryFn: getOrders, 
//   // });

  


//   // if(isLoading){
//   //   console.log("wait still loading");
//   // }

//   // if(!isLoading){
//   //   console.log("heres the data", data)
//   // }
 
//   {/* <Script
//     id="chatling-embed-script"
//     strategy="afterInteractive"
//     src="https://chatling.ai/js/embed.js"
//     async
//     data-id="8414771916"
//   /> */}

//   const TabSettings = [
//     {
//       tabIcon: <BookHeart className='h-4 w-4 text-Light group-data-[state=active]:text-primaryOrange'  />,
//       tabName: "Products Management",
//       tabDescription: "Manage your product, pricing and etc",
//       tabContent: <ManageProduct />,
//     },
//     {
//       tabIcon: <UserCog className='h-4 w-4 text-Light group-data-[state=active]:text-primaryOrange'  />,
//       tabName: "Security",
//       tabDescription: "Configure Users, Password, PIN, etc",
//       tabContent: <Security />,
//     },
//   ]


//   return (
//     <div className='flex flex-col gap-6 h-auto min-h-[1000px] bg-BaseBg p-4'>
//       <Header headerTag="Home"/>
//         <Tabs defaultValue="Products">
//           <section className="flex flex-row gap-6">
//             <div className="h-[585px] w-[275px] bg-DarkBg rounded-md">
//               {TabSettings.map((tab, index) => (
//                   <TabsList
//                     key={index}
//                     className="w-full h-auto p-0 rounded-none bg-transparent"
//                   >
//                   <TabsTrigger
//                     className="group flex flex-row py-6 items-start justify-center gap-2 w-full h-[87px] relative rounded-none bg-transparent data-[state=active]:text-primaryOrange data-[state=active]:bg-primaryOrange/50 data-[state=active]:shadow-none"
//                     value={tab.tabName}
//                   >
//                     <div className="flex text-white">
//                       {tab.tabIcon}
//                     </div>
//                     <div className="flex flex-col gap-1">
//                       <p className="text-sm text-left text-Lighter group-data-[state=active]:text-primaryOrange">
//                         {tab.tabName}
//                       </p>
//                       <p className="text-xs text-left text-Light">
//                         {tab.tabDescription}
//                       </p>
//                     </div>
//                   </TabsTrigger>
//                 </TabsList>
//               ))}
//             </div>
//             <div className="h-[585px] w-[743px] bg-DarkBg rounded-md p-0">
//               {TabSettings.map((tab, index) => (
//                   <TabsContent
//                     key={index}
//                     value={tab.tabName}
//                   >
//                     {tab.tabContent}
//                   </TabsContent>
//               ))}
//             </div>
//           </section>
//         </Tabs>
//     </div>
//   )
// }

// const ManageProduct: React.FC= (): JSX.Element => {

//   const ProductTab =  ['Main Dishes', 'Snacks', 'Drinks', 'Addons'];

//   const DishCard: React.FC<DishCard> = (props): JSX.Element => {

//     return (
//       <div className="flex flex-col justify-between w-[190px] h-[230px] rounded-md bg-transparent border border-[#2D303E]">
//         <section className="flex flex-col justify-center gap-4 h-[150px] w-full bg-DarkBg rounded-t-md">
//           <div className="flex flex-col justify-center items-center">
//             <p className="text-white">{props.name}</p>
//             <p className="text-Light text-sm">{props.category}</p>
//           </div>
//           <div className="text-sm text-Light">
//             {props.subCategory.map((sub, index) => (
//               <div className="flex flex-row justify-between px-4" key={index}>
//                 <p>
//                   {sub.name}
//                 </p>
//                 <p>
//                   {sub.price}
//                 </p>
//               </div>
//             ))}
//           </div>
//           {/* {props.name}
//           {props.category}
//           {props.subCategory.map((sub) => (
//               <p>
//                 {sub.name}
//                 {sub.price}
//               </p>
//           ))} */}
//         </section>
//         <section className="h-[52px] flex flex-row gap-2 items-center justify-center text-sm text-primaryOrange bg-primaryOrange bg-opacity-[24%] rounded-b-md">
//           <PencilLine className="h-[15px] w-[15px]" />
//           <p>Edit Dish</p>
//         </section>
//       </div>
//     )
//   }

//   return (
//       <div className="flex flex-col w-full h-auto">
//         <section className="text-lg text-white px-3 py-3">
//           <p>Products Management</p>
//         </section>
//         <Tabs defaultValue="Main Dishes">
//           <section className="text-white px-3">
//               <div>
//                 <TabsList className="w-full justify-start rounded-none bg-transparent p-0 mb-4">
//                   {ProductTab.map((category, index) => (
//                     <TabsTrigger
//                       key={index}
//                       value={category}
//                       className="relative rounded-none border-b-2 border-b-[#2D303E] bg-transparent px-0 pr-4 pb-3 pt-2 font-semibold text-white shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primaryOrange data-[state=active]:text-primaryOrange data-[state=active]:bg-transparent data-[state=active]:shadow-none"
//                     >
//                       <p className='text-left'>{category}</p>
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>
//               </div>
//           </section>
//           <section className="w-full h-[390px] bg-DarkBg overflow-hidden overflow-y-scroll">
//               {ProductTab.map((tab, index) => (
//                 <TabsContent
//                   key={index}
//                   value={tab}
//                 >
//                   <div className="flex flex-row items-center justify-center gap-2 py-1 flex-wrap bg-DarkBg">
//                     <div className="flex flex-col justify-center items-center gap-4 text-sm text-primaryOrange w-[190px] h-[230px] border border-dashed border-primaryOrange">
//                       <Plus className="w-[20px] h-[20px]"/>
//                       <p>Add new dish</p>
//                     </div>
//                     {menuInventory.filter(menu => menu.category === tab).map((menu, index) => (
//                       <DishCard  
//                         name={menu.name} 
//                         category={menu.category} 
//                         subCategory={menu.subCategory}
//                         key={index}
//                       />
//                     ))}
//                   </div>
//                 </TabsContent>
//                 ))}
//           </section>
//         </Tabs>
//         <section className="flex flex-row gap-2 h-full min-h-[50px] border-t border-[#2D303E] w-full bg-transparent px-4 py-3">
//             <Button className="w-[172px] h-[45px]  text-primaryOrange border border-primaryOrange bg-transparent text-sm">
//               Discard Changes 
//             </Button>
//             <Button className="w-[172px] h-[45px] text-white bg-primaryOrange">
//               Save Changes
//             </Button>
//         </section>
//       </div>
//   )

// }


// const Security: React.FC= (): JSX.Element => {

 

//   return (
//       <div>
//           <UserProfile  />
//       </div>
//   )
// }


// export default Page



import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
