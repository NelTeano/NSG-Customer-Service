'use client'
import { NextPage } from 'next'

import { useAuth } from '@clerk/nextjs'

import {
    HomeIcon,
    Grid2X2,
    SquareMenu,
    LayoutDashboard,
    CalendarCheck,
    LogOutIcon
} from "lucide-react"
import  Link  from 'next/link'


// IMAGES
import BusinessLogo from '../../../public/assets/RETS Logo.png'
import Image from 'next/image'
import { SignOutButton } from '@clerk/nextjs'

interface Props {}

const SideBar: NextPage<Props> = ({}) => {

    const { isSignedIn } = useAuth();

    const navOptions = [
        {
            icon: <HomeIcon color='#EA7C69'/>,
            name: "Home",
            link: '/Home',
        },
        {
            icon: <LayoutDashboard color='#EA7C69' />,
            name: "Dashboard",
            link: '/dashboard',
        },
        {
            icon: <Grid2X2  color='#EA7C69'/>,
            name: "Create",
            link: '/create-order',
        },
        {
            icon: <SquareMenu color='#EA7C69' />,
            name: "List",
            link: '/orders',
        },
        {
            icon: <CalendarCheck color='#EA7C69' />,
            name: "History",
            link: '/orders-history',
        },
    ]
    

    return (
        <div className='flex flex-col justify-between items-center  z-0 fixed left-0 h-full w-[100px] bg-DarkBg drop-shadow-md'>
            <div>
                <Image 
                    src={BusinessLogo}
                    priority={true}
                    width="0"
                    height="0"
                    className='lg:h-30 lg:w-20 relative sm:h-[120px] sm:w-[170px]'
                    alt='product image'
                />
            </div>
            <div className='flex flex-col gap-8'>
                {navOptions.map((icons, index) => (
                        <Link
                            className='flex flex-col justify-center items-center'
                            key={index}
                            href={icons.link}
                        >
                            {icons.icon}
                            <p className='text-sm text-white'>{icons.name}</p>
                        </Link>
                ))}
            </div>
                <div className='mb-10'>
            { isSignedIn && 
                    <SignOutButton>
                        <LogOutIcon color='#EA7C69'/>
                    </SignOutButton>
            }
                </div>
        </div>
    )
}

export default SideBar