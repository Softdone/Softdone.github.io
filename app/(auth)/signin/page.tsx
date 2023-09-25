export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}


import VideoThumb from '@/public/images/chatbotvideo.png'
import logo from '/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen overflow-hidden text-left text-lg text-grey-01 font-roboto ">
      <div />
      <div className="absolute w-full text-[48px] text-darkslateblue font-barlow flex justify-center mt-20">
        <Image
          className="absolute top-[30.5%] bottom-[9.5%] max-w-full overflow-hidden object-contain h-48 w-96 flex justify-center"
          alt=""
          src={logo}
        />
      </div>

      <div className="absolute  left-[0px]  w-screen h-[610px] flex justify-center">
        <div className="absolute h-[9.18%] w-[82.24%]  right-[9%] bottom-[48.36%] left-[8.76%] rounded-2xl bg-white shadow-[0px_0px_8px_rgba(124,_133,_255,_0.56)_inset] flex flex-row p-2 box-border items-center justify-start gap-[24px]">
          <div className="rounded-lg bg-secondary-01 flex flex-row p-2 items-start justify-start">
            <Image className="relative w-6 h-6" alt="" src={logo} />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative w-0.5 h-6">
              <input></input>
            </div>
            <div className="relative leading-[24px]"></div>
          </div>
        </div>
        <div className="absolute h-[9.18%] w-[82.24%] top-[54.92%] right-[9%] left-[8.76%] rounded-2xl bg-white shadow-[0px_0px_8px_rgba(124,_133,_255,_0.56)_inset] flex flex-row p-2 box-border items-center justify-start gap-[24px]">
          <div className="rounded-lg bg-secondary-01 flex flex-row p-2 items-start justify-start">
            <Image className="relative w-6 h-6" alt="" src={logo} />
          </div>
          <input></input>
        </div>
        <div className="absolute h-[9.18%] w-[26.28%] top-[73.77%] right-[36.98%] bottom-[17.05%] left-[36.74%] rounded-2xl bg-primary-01 shadow-[0px_4px_8px_rgba(0,_14,_204,_0.24)] flex flex-row py-4 px-6 box-border  text-center text-[24px] text-white">
          <div className=" leading-[24px] text-center w-full">Login</div>
        </div>
        <div className="absolute top-[65.57%]  font-medium font-barlow text-paleturquoise ">
          Forgot your password?
        </div>
        <div className="absolute top-[90%]  font-medium font-barlow text-paleturquoise">
          <span>Don´t have an account?</span>
          <span className="text-mistyrose">{ }</span>
          <span className="text-darksalmon">Sign in</span>
        </div>
      </div>
    </div>
  )
}
