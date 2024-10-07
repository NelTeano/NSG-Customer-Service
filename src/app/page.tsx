'use client'
import Image from "next/image";
import Script from 'next/script';


// COMPONENTS
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"


import { NextPage } from 'next'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/headerBanner/Header";

// IMAGES

// ICONS
import {
  BookHeart,
  UserCog
} from "lucide-react"

async function getOrders() {
	const orders = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API_DOMAIN}/api/orders`);
  return orders.data;
}

async function getInventory() {
  const inventory = await axios.get('../lib/mock/data/menuInventory.json');
  return inventory.data;
}



interface Props {}



const Page: NextPage<Props> = ({}) => {
  const { setTheme } = useTheme()

  const { data: orders, error: ordersErr, isLoading: ordersLoading } = useQuery({
      queryKey: ['orders'],  
      queryFn: getOrders, 
  });

  


  // if(isLoading){
  //   console.log("wait still loading");
  // }

  // if(!isLoading){
  //   console.log("heres the data", data)
  // }
 
  {/* <Script
    id="chatling-embed-script"
    strategy="afterInteractive"
    src="https://chatling.ai/js/embed.js"
    async
    data-id="8414771916"
  /> */}

  const TabSettings = [
    {
      tabIcon: <BookHeart className='h-4 w-4 text-Light group-data-[state=active]:text-primaryOrange'  />,
      tabName: "Products Management",
      tabDescription: "Manage your product, pricing and etc",
      tabContent: <ManageProduct />,
    },
    {
      tabIcon: <UserCog className='h-4 w-4 text-Light group-data-[state=active]:text-primaryOrange'  />,
      tabName: "Security",
      tabDescription: "Configure Users, Password, PIN, etc",
      tabContent: <Security />,
    },
  ]


  return (
    <div className='flex flex-col gap-6 h-auto min-h-[1000px] bg-BaseBg p-4'>
      <Header headerTag="Home"/>
        <Tabs defaultValue="Products">
          <section className="flex flex-row items-center justify-center gap-6">
            <div className="h-[723px] w-[275px] bg-DarkBg rounded-md">
              {TabSettings.map((tab, index) => (
                  <TabsList
                    key={index}
                    className="w-full h-auto p-0 rounded-none bg-transparent"
                  >
                  <TabsTrigger
                    className="group flex flex-row py-6 items-start justify-center gap-2 w-full h-[87px] relative rounded-none bg-transparent data-[state=active]:text-primaryOrange data-[state=active]:bg-primaryOrange/50 data-[state=active]:shadow-none"
                    value={tab.tabName}
                  >
                    <div className="flex text-white">
                      {tab.tabIcon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-left text-Lighter group-data-[state=active]:text-primaryOrange">
                        {tab.tabName}
                      </p>
                      <p className="text-xs text-left text-Light">
                        {tab.tabDescription}
                      </p>
                    </div>
                  </TabsTrigger>
                </TabsList>
              ))}
            </div>
            <div className="h-[723px] w-[743px] bg-DarkBg rounded-md">
              {TabSettings.map((tab, index) => (
                  <TabsContent
                    key={index}
                    value={tab.tabName}
                  >
                    {tab.tabContent}
                  </TabsContent>
              ))}
            </div>
          </section>
        </Tabs>
    </div>
  )
}

const ManageProduct: React.FC= (): JSX.Element => {

 

  return (
      <div>
          Manage Product
      </div>
  )
}


const Security: React.FC= (): JSX.Element => {

 

  return (
      <div>
          Security
      </div>
  )
}


export default Page