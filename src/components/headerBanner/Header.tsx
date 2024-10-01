import React from 'react'


const getFormattedDate = (): string => {
    const date = new Date();
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
  
    return date.toLocaleDateString('en-PH', options); // 'en-PH' for Philippines locale
  };

  interface Header {  
    headerTag: string
  }

const Header: React.FC<Header> = (props): JSX.Element => {

    const DateToday = getFormattedDate();

    return (
        <div className='flex flex-col w-full'>
            <p className='text-white text-lg'>{props.headerTag}</p>
            <p className='text-Light text-sm'>{DateToday}</p>
        </div>
    )
}

export default Header;

