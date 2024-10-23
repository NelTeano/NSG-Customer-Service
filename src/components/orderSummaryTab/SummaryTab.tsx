import React, { useCallback, useMemo, useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import ItemCard from '../ItemCard/ItemCard';
import { Separator } from '../ui/separator';

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

const SummaryTab: React.FC<Order> = (props): JSX.Element => {

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
        updatedAt 
    } = props;

    const [moneyReceived, setMoneyReceived] = useState<number>(money_received);
    const [selectedPackageType, setPackageType] = useState(order_method);
    const packageType = ['Dine In', 'Take out', 'Delivery'];  


    const handlePackageType = useCallback((selected: string) => {
        setPackageType(selected);
    }, []);

    const handleUpdateReceived = useCallback((received: number) => {
        setMoneyReceived(received);
    }, []);

    console.log("received money:", moneyReceived, order_method)

  return (
    <div className='flex flex-col w-[350px] h-full bg-DarkBg p-6 gap-4'>
            <div>
              <p className='text-white text-lg'>
                Customer Order # {order_id}
              </p>
            </div>
            <div className='flex gap-2'>
              {packageType.map((type, index) => (
                <div
                  key={index}
                  className={`text-primaryOrange border rounded-sm border-Light h-10 w-17 text-sm p-2 
                    ${selectedPackageType.toLowerCase() === type.toLowerCase() ? 'bg-primaryOrange text-white' : 'bg-transparent'}`}
                  onClick={() => handlePackageType(type)}
                >
                  {type}
                </div>
              ))}
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between text-white text-sm'>
                <p>Item</p>
                <div className='flex flex-row gap-10'>
                  <p>Qty</p>
                  <p>Price</p>
                </div>
              </div>
              <Separator className="my-4" />
            <div className='flex flex-col gap-6 h-[350px] border-b pb-4 pt-2 border-Light w-full bg-transparent overflow-hidden overflow-y-scroll'>
                {order_list.map((item, index) => (
                  <ItemCard key={index} item_price={item.price} name={item.product_name} price={item.price * item.qty} quantity={item.qty} />
                ))}
                {addons.map((addon, index) => (
                  <ItemCard key={index} item_price={addon.price} name={addon.product_name} price={addon.price * addon.qty} quantity={addon.qty} />
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
                    <Input 
                        className='h-5 w-20 text-DarkBg text-right' 
                        value={moneyReceived} 
                        onChange={(e) => handleUpdateReceived(Number(e.target.value))}
                        placeholder='####' 
                    />
                  </div>
                  <p className='text-right text-sm'>{moneyReceived - total}</p>
                </div>
                <p className='text-right text-lg'>{total}</p>
              </div>
            </div>
            </div>
            <div className='flex flex-row justify-between'>
              <Button
                className='bg-transparent text-white border border-Light border-opacity-35 hover:bg-primaryOrange hover:shadow-md hover:shadow-primaryOrange transition delay-75 ease-in hover:border-2 hover:border-none'
              >
                Update Order
              </Button>
              <Button
                className='bg-primaryOrange text-white border-none hover:bg-primaryOrange hover:shadow-md hover:shadow-primaryOrange transition delay-75 ease-in hover:border-2 hover:border-DarkBg'
              >
                Mark as Done
              </Button>
            </div>
        </div>
  )
}

export default SummaryTab