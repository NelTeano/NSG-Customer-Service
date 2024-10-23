'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


// COMPONENTS
import HeaderBanner from '@/components/headerBanner/Header'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button'
import { Skeleton } from "@/components/ui/skeleton"

// import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "sonner"

import SummaryTab from "@/components/orderSummaryTab/SummaryTab"

// LIB
import { OrdersMockData } from '@/lib/mockData'

// ICONS
import {
  CircleCheckBig
} from "lucide-react"

type Status = {
  value: string
  label: string
}
 
interface Order {
  _id: string,
  order_list: Order_List [],
  addons: Order_List[],
  order_method: string,
  status: boolean,
  total: number,
  createdAt: string,
  updatedAt: string,
  order_id: number,
  money_received: number,
  payment_status: string,
}

interface Order_List {
  product_name: string,
  qty: number,
  price: number
}

interface OrderCardProps extends Order {
  onSelect: (orderId: Order) => void; // Define the onSelect function type
}

async function getOrders() {
  // const orders = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API_DOMAIN}/api/orders`);  
  // return orders.data;

  return OrdersMockData
}

export default function Page() {

  
  const { data: orders, error: ordersErr, isLoading: ordersLoading } = useQuery({
    queryKey: ['orders'],  
    queryFn: getOrders, 
  });
  
  const [orderSummaryTab, setOrderSummaryTab] = useState<Order | null>(null);

  useEffect(() => {
    if (!ordersLoading && orders && orders.length > 0) {
      setOrderSummaryTab(orders[0]); // Set the first order when the data is available
    }
  }, [ordersLoading, orders]);
  
  console.log("orders data:", orders);


  return (
    <div className='flex flex-row gap-10 justify-between h-full min-h-[1000px] w-full bg-BaseBg'>
      <section className='flex flex-col gap-5 py-5 ml-5'>
        <HeaderBanner headerTag='Orders'/>
        <div className='flex flex-col h-[550px] overflow-hidden overflow-y-scroll gap-2.5'>
          {ordersLoading ? (
            <>
              <div className='flex flex-col gap-8'>
                {[0,1,2,3,4].map((index) => (
                    <div key={index} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[400px]" />
                      <Skeleton className="h-4 w-[400px]" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {orders?.map((order, index) => (
                  <OrderCard 
                    _id={order._id} 
                    addons={order.addons} 
                    order_id={order.order_id} 
                    order_list={order.order_list}
                    status={order.status}
                    order_method={order.order_method}
                    total={order.total}
                    createdAt={order.createdAt} 
                    updatedAt={order.updatedAt}
                    money_received={order.money_received}
                    payment_status={order.payment_status}
                    onSelect={setOrderSummaryTab}
                    key={index}
                  />
                ))} 
            </>
          )}
          
        </div>
      </section>
      <section className='flex flex-row gap-5'>
        <div>
          {/* <OrdersSummaryTab /> */}
          {orderSummaryTab ? (
              <SummaryTab  
                _id={orderSummaryTab._id} 
                addons={orderSummaryTab.addons} 
                order_id={orderSummaryTab.order_id} 
                order_list={orderSummaryTab.order_list}
                status={orderSummaryTab.status}
                order_method={orderSummaryTab.order_method}
                total={orderSummaryTab.total}
                createdAt={orderSummaryTab.createdAt} 
                updatedAt={orderSummaryTab.updatedAt}
                money_received={orderSummaryTab.money_received}
                payment_status={orderSummaryTab.payment_status}
              />
          ) : (
            <div className="flex flex-col justify-center space-y-3 p-5">
              <Skeleton className="h-4 w-[300px]" />
              <div className="flex flex-row gap-4">
                <Skeleton className="h-10 w-[80px]" />
                <Skeleton className="h-10 w-[80px]" />
                <Skeleton className="h-10 w-[80px]" />
              </div>
              <Skeleton className="h-[400px] w-[300px] rounded-xl" />
              <div className='flex flex-col gap-5'>
                <Skeleton className="h-4 w-[300px]" />
                <Skeleton className="h-4 w-[300px]" />
              </div>
              <div className="flex flex-row justify-between">
                <Skeleton className="h-10 w-[80px]" />
                <Skeleton className="h-10 w-[80px]" />
              </div>
            </div>
          )
          }
        </div>
      </section>
    </div>  

  )
}

const OrderCard: React.FC<OrderCardProps> = (props): JSX.Element => {

  // const { toast } = useToast()
  
  const { 
    _id,
    order_list,
    addons,
    order_method,
    status,
    payment_status,
    money_received,
    total,
    order_id,
    createdAt, 
    updatedAt,
    onSelect 
  } = props;

  const HandleGetPropsValues = () => {
    onSelect(props); // Pass all props to the parent when selected
  };   
  
  const statuses: Status[] = [
    {
      value: "paid",
      label: "Paid"
    },
    {
      value: "unpaid",
      label: "Unpaid"
    }
  ]


  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(() => {
    return payment_status
      ? statuses.find(status => status.value === payment_status) || null
      : null;
  });

  console.log(selectedStatus)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
  };

  return (
    <div 
      className="flex flex-col justify-center px-2 w-[509px] h-[98px] bg-DarkBg gap-4 shrink-0"
      onClick={HandleGetPropsValues}
    >
      <section className='flex flex-row justify-between items-center w-full text-sm text-white'>
        <p>Order # {order_id}</p>
        <p>{formatDate(createdAt)}</p>
      </section>
      <section className='flex flex-row justify-between items-center w-full text-sm'>
        <p className='text-Light'>Number of Items {order_list.length}</p>
        <div className='flex gap-5'>
          <p className='text-Light'>₱ {total}</p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                size="sm"
                className={`${selectedStatus?.value === 'paid' ? 'bg-primaryOrange text-white' : 'bg-BaseBg border border-Light border-opacity-30 text-white'} w-[67px] h-6 justify-center`}
              >
                {selectedStatus ? (
                  <>
                    {selectedStatus.label}
                  </>
                ) : (
                  <>
                    {payment_status}
                  </>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="right" align="start">
            <Command>
                <CommandList>
                  <CommandGroup>
                    {statuses.map((status) => (
                      <CommandItem
                        key={status.value}
                        value={status.value}
                        onSelect={(value) => {
                          setSelectedStatus(
                            statuses.find((priority) => priority.value === value) ||
                              null
                          )
                          toast("The modified order has been updated",{
                            description: `Order # ${order_id} change status as ${value}.`,
                          })
                          setOpen(false)
                        }}
                      >
                        <span>{status.label}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  )
}

// const OrdersSummaryTab: React.FC = (): JSX.Element => {
//   return (
//     <div className="flex flex-col  px-2 w-[309px] h-[744px] bg-DarkBg">
    
//     </div>
//   )
// }



