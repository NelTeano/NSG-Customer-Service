import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Trash
} from "lucide-react"
  

interface MenuDetails {
  name: string,
  quantity: number,
  item_price: number,
  price: number
}

const ItemCard: React.FC<MenuDetails> = (props): JSX.Element => {

    return (
      <div className='flex flex-row justify-between w-full h-[110px] gap-4 bg-DarkBg border-none'>
        <div className='flex flex-col w-full justify-between gap-2'>
          <div className='flex flex-row justify-between text-white text-sm'>
            <div>
              <p>{props.name}</p>
              <p className='text-Light' >₱ {props.item_price}</p>
            </div>
            <Input 
              className='h-12 w-12 bg-BaseBg border border-[#393C49] text-white text-center disabled:opacity-100  disabled:cursor-not-allowed'
              defaultValue={props.quantity}
              disabled
            />
          </div>
          <Input 
              className='h-12 bg-BaseBg border border-[#393C49] text-Lighter placeholder:text-Light text-left' 
              placeholder='Order Note...'
            />
        </div>
        <div className='flex flex-col justify-between text-white'>
          <p className='text-right'>{props.price}</p>
          <Button className='h-12 w-13 text-lg text-primaryOrange border border-primaryOrange bg-transparent'>
              <Trash className='h-13 w-13' />
          </Button>
        </div>
      </div>
    )
}


export default ItemCard