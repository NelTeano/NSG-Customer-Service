import { NextPage } from 'next'


// IMAGES
import SunlifeLogo from '../../../public/assets/SunLifeLogo.png'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {

    const navOptions = [
        {
            name: 'Report Issue',
            link: '/',
        },
        {
            name: 'Contact Us',
            link: '/',
        },
    ]

    return (
        <div className='flex justify-around items-center fixed w-full h-[70px] bg-white drop-shadow-md'>
            <Image 
                src={SunlifeLogo}
                priority={true}
                width="0"
                height="0"
                className='lg:h-[140px] lg:w-[190px] relative sm:h-[120px] sm:w-[170px]'
                alt='product image'
            />
            <div className='flex gap-4'>
                {navOptions.map((options, index) => (
                    <Link
                        key={index}
                        href={options.link}
                    >
                        {options.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar