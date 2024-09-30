'use client'
import React from 'react'

// COMPONENTS

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Separator } from '@/components/ui/separator'

import HeaderBanner from '@/components/headerBanner/Header'

// ICONS
import {
  PhilippinePeso,
  Users,
  HandPlatter,
  ChartLine
} from "lucide-react"

import { RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// LIB
import { numberWithCommas } from '@/lib/numberWithCommas'

export default function Page(){


  const TabsCategories = [
      {
        name: 'Overview',
        component: <Overview/>,
      },
      {
        name: 'Analytics' ,
        component: <Analytics/>,
      }
    ]

    return (
      <div className='flex flex-col gap-10 p-4 h-auto min-h-[1000px] w-full bg-BaseBg'>
          <section>
            <HeaderBanner headerTag='Dashboard'/>
          </section>
          <Tabs defaultValue="Overview" className="w-full">
            <TabsList className="w-full justify-start rounded-none bg-transparent p-0 mb-4">
              {TabsCategories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category.name}
                    className="relative rounded-none border-b-2 border-b-[#2D303E] bg-transparent px-4 pb-3 pt-2 font-semibold text-white shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primaryOrange data-[state=active]:text-primaryOrange data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <p className='text-left'>{category.name}</p>
                  </TabsTrigger>
                ))}
            </TabsList>
            {TabsCategories.map((category, index) => (
              <TabsContent value={category.name} key={index}>
                {category.component}
              </TabsContent>
            ))}
          </Tabs>
      </div>  
    )
}



const Overview = () => {

  const CardsCategories = [
    {
      card_title: "Total Revenue",
      card_icon: <PhilippinePeso className='h-4 w-4 text-Light' />,
    },
    {
      card_title: "Total Customers",
      card_icon: <Users className='h-4 w-4 text-Light' />,
    },
    {
      card_title: "Total Dish Ordered",
      card_icon: <HandPlatter className='h-4 w-4 text-Light' />,
    },
    {
      card_title: "Today Orders",
      card_icon: <ChartLine className='h-4 w-4 text-Light' />,
    },
  ]
  
  const CardsMockData = [
    {   
      overall_value: 45231.89,
      past_difference: 20.1,
    },
    {   
      overall_value: 2350,
      past_difference: 180.1,
    },
    {   
      overall_value: 12234,
      past_difference: 19,
    },
    {   
      overall_value: 573,
      past_difference: 201,
    },
  ];

  const combinedMockData = React.useMemo(() => {
    return CardsCategories.map((category, index) => ({
      ...category,
      ...CardsMockData[index],
    }));
  }, [CardsCategories, CardsMockData]);

  const chartData = [
    { browser: "chrome", visitors: 275, fill: "#65B0F6" },
    { browser: "safari", visitors: 200, fill: "#FFB572" },
    { browser: "firefox", visitors: 187, fill: "#FF7CA3" },
    { visitors: 0, fill: "#FF7CA3" },

  ]
  
  const chartConfig = {
    chrome: {
      label: "Chrome",
      color: "#65B0F6",
    },
    safari: {
      label: "Safari",
      color: "#FFB572",
    },
    firefox: {
      label: "Firefox",
      color: "#FF7CA3",
    },
    blank: {
      color: "#FF7CA3",
    },
  } satisfies ChartConfig  

  console.log(combinedMockData);

  return (
    <div className='flex flex-col gap-4 bg-BaseBg'>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {combinedMockData.map((card, index) => (
          <Card 
            key={index}
            className='border-none bg-DarkBg'
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm text-white font-medium">
                {card.card_title}
              </CardTitle>
              {card.card_icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-white font-bold">+{numberWithCommas(card.overall_value)}</div>
              {card.card_title === 'Today Orders' ? 
                (
                  <p className="text-xs text-Light">
                    +{card.past_difference}% from yesterday
                  </p>
                ) : 
                (
                  <p className="text-xs text-Light">
                    +{card.past_difference}% from last month
                  </p>
                )
              }
            </CardContent>
          </Card>
        ))}
      </section>
      <div className='flex flex-row h-auto min-h-[1000px] gap-2 bg-BaseBg'>
        <section className='flex flex-col w-full bg-DarkBg'>
            This is dashboard page 1 
        </section>
        <section className='flex flex-col w-[500px] h-auto bg-BaseBg'> 
            <div className='flex flex-col w-full h-[350px] bg-DarkBg p-4 gap-4 rounded-lg '>
              <div className='flex flex-row justify-between'>
                <p className='text-white text-lg'>Most Ordered</p>
                <Select>
                  <SelectTrigger className="w-[95px] text-white bg-transparent border border-opacity-50 border-Light">
                    <SelectValue placeholder="Today" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Today">Today</SelectItem>
                    <SelectItem value="Weekly">Weekly</SelectItem>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              < Separator />
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
                style={{ width: '100%', height: '100%', minHeight: '200px' }} // Ensure proper height
              >
                <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel nameKey="browser" />}
                  />
                  <RadialBar 
                    background={{ 
                      fill: "#252836",
                      opacity: 0.2
                    }}
                    dataKey="visitors"
                    cornerRadius={10}
                     
                    />
                </RadialBarChart>
              </ChartContainer>
            </div>            
        </section>
      </div>
    </div>
  )
}

const Analytics = () => {
  return (
    <>
      This is Analytics
    </>
  )
}


