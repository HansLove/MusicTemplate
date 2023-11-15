import React, { useEffect, useState } from 'react'
// import UserId from "./userId";
import Link from "next/link";
import { actulizarCuenta
  // , userBalance 
} from '../blockchain/Blockchain';



export default function UserMenu({profileShow,setProfileShow}) {

    const [address, setaddress] = useState('')
    const [balance, setBalance] = useState('')

    useEffect(() => {
      UserAddress()
    }, [])
    
    const UserAddress=async()=>{
        let _acc=await actulizarCuenta()
        // let _bal=await userBalance(_acc)
        
        // setBalance(_bal)
        setaddress(_acc)
    }

  return (
    <div
    className={
      profileShow
        ? "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100"
        : "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0"
    }
    onMouseEnter={() => setProfileShow(true)}
    onMouseLeave={() => setProfileShow(false)}
  >
    {/* <UserId
      classes="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white"
      userId={address}
      shortId={true}
    /> */}

    <div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
      <span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">
        Balance
      </span>
      <div className="flex items-center">
        <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
          <use xlinkHref="/icons.svg#icon-ETH"></use>
        </svg>
        <span className="text-green text-lg font-bold">{balance} ETH</span>
      </div>
    </div>
    <Link href="/user/avatar_6">
      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
        </svg>
        <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
          My Profile
        </span>
      </a>
    </Link>
    <Link href="/profile/user_avatar">
      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
        <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
          Edit Profile
        </span>
      </a>
    </Link>
    <Link href="/login">
      <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"></path>
        </svg>
        <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
          Sign out
        </span>
      </a>
    </Link>
  </div>
  )
}
