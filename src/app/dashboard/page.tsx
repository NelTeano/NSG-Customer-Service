'use client'
import React from 'react'

// COMPONENTS

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog"

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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Separator } from '@/components/ui/separator'
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import HeaderBanner from '@/components/headerBanner/Header'

// ICONS
import {
  PhilippinePeso,
  Users,
  HandPlatter,
  ChartLine,
  Logs
} from "lucide-react"

import { RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// LIB
import { numberWithCommas } from '@/lib/NumberWithCommas'
import { Button } from '@/components/ui/button'



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

  const OrdersMockData = [
    {
      "_id": "66e6441e33ef94e12cd69446",
      "order_list": [
        {
          "product_name": "sisig",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "shawarma",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Dine In",
      "status": false,
      "total": 1000,
      "createdAt": "2024-09-15T10:19:10.172Z",
      "updatedAt": "2024-09-15T10:19:10.172Z",
      "order_id": 1,
      "__v": 0
    },
    {
      "_id": "66e6442e33ef94e12cd69449",
      "order_list": [
        {
          "product_name": "hotdog",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "sisig",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Take Out",
      "status": false,
      "total": 1000,
      "createdAt": "2024-09-15T10:19:26.926Z",
      "updatedAt": "2024-09-15T10:19:26.926Z",
      "order_id": 2,
      "__v": 0
    },
    {
      "_id": "66e6442e33ef94e12cd69449",
      "order_list": [
        {
          "product_name": "hotdog",
          "qty": 1,
          "price": 100
        },
        {
          "product_name": "sisig",
          "qty": 2,
          "price": 50
        }
      ],
      "addons": [
        {
          "product_name": "rice",
          "qty": 2,
          "price": 10
        }
      ],
      "order_method": "Delivery",
      "status": true,
      "total": 1000,
      "createdAt": "2024-09-15T10:19:26.926Z",
      "updatedAt": "2024-09-15T10:19:26.926Z",
      "order_id": 2,
      "__v": 0
    }
  ]

  const combinedMockData = React.useMemo(() => {
    return CardsCategories.map((category, index) => ({
      ...category,
      ...CardsMockData[index],
    }));
  }, [CardsCategories, CardsMockData]);

  const chartData = [
    { order_method: "", label: "", count: 0, fill: "" },
    { order_method: "dineIn", label: "Dine In", count: 275, fill: "#65B0F6" },
    { order_method: "takeOut", label: "Take Out", count: 200, fill: "#FFB572" },
    { order_method: "delivery", label: "Delivery", count: 187, fill: "#FF7CA3" },
  ]
  
  const chartConfig = {
    dineIn: {
      label: "Dine In",
      color: "#65B0F6",
    },
    takeOut: {
      label: "Take Out",
      color: "#FFB572",
    },
    delivery: {
      label: "Delivery",
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
      <div className='flex flex-row h-auto min-h-[1400px] gap-2 bg-BaseBg'>
        <section className='flex flex-col w-full h-auto max-h-[350px] bg-transparent p-4 gap-2'>
          <p className='text-white text-lg'>Recent Orders</p>
          <Table>
            <TableHeader>
              <TableRow className='border-b border-Light'>
                <TableHead className="text-left text-white text-sm">Order #</TableHead>
                <TableHead className="text-left text-white text-sm">Status</TableHead>
                <TableHead className="text-left text-white text-sm">Method</TableHead>
                <TableHead className="text-left text-white text-sm">Total Payment</TableHead>
                <TableHead className="text-left text-white text-sm w-[100px]">Summary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-Light'>
              {OrdersMockData.map((recent_order, index) => (
                <TableRow 
                  key={index} 
                  className='border-0'
                >
                  <TableCell className="font-medium">{recent_order.order_id}</TableCell>
                  {recent_order.status == false ? (<TableCell className="font-medium">Pending</TableCell>) : ((<TableCell className="font-medium">Completed</TableCell>))}
                  <TableCell>{recent_order.order_method}</TableCell>
                  <TableCell>₱{recent_order.total}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger>
                        <VisuallyHidden>
                            <DialogTitle>Recent Order {recent_order._id}</DialogTitle>
                            <DialogDescription>This is {recent_order._id} Recent Orders Card</DialogDescription>
                        </VisuallyHidden>
                        <div className='flex items-center justify-center w-[70px] h-[30px] bg-BaseBg rounded'>
                          <Logs className='h-4 w-4 text-white' />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        {recent_order.order_list.map((orders, index) => (
                          <div key={index}>
                            <p>Product Name:  {orders.product_name}</p>
                            <p>Quantity: {orders.qty}</p>
                            <p>Price : {orders.price}</p>
                          </div>
                        ))}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <section className='flex flex-col w-[550px] h-auto bg-BaseBg'> 
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
              <div className='flex flex-row gap-4'>
                 <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                  style={{ width: '100%', height: '100%', minHeight: '200px' }} // Ensure proper height
                >
                  <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel nameKey="order_method" />}
                    />
                    <RadialBar 
                      background={{ 
                        fill: "#252836",
                        opacity: 0.2
                      }}
                      maxBarSize={12}
                      dataKey="count"
                      cornerRadius={10}
                      
                    />
                  </RadialBarChart>
                </ChartContainer> 
                  <section className='flex flex-col w-full justify-center gap-2'>
                    {chartData.map((data, index) => (
                      index === 0 ? null : (
                        <div 
                          key={index} 
                          className='flex flex-row gap-2'
                        >
                          <div 
                            className="flex w-4 h-3 rounded-full" 
                            style={{ backgroundColor: data.fill}}
                          >
                          </div>
                          <div>
                            <p className='text-white text-sm'>{data.label}</p>
                            <p className='text-Light text-sm'>{data.count} Customers</p>
                          </div>
                        </div>
                      )
                    ))}
                  </section>
              </div>
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


