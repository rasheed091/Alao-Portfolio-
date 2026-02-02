import { Smartphone } from 'lucide-react'
import React from 'react'
import { Link, Links } from 'react-router-dom'



export default function NavBar() {
  return(
    <>
        <div style={{fontFamily:'Bricolage Grotesque Variable'}} className='border bg-black text-white border-none  flex items-center justify-between px-6 shadow-2xl h-[10vh] w-full'>
            <div className='flex gap-7 capitalize'>
                <Link to={'/'}>
                    <p>home</p>
                </Link>
                <Link to={'/about'}>
                    <p>about</p>
                </Link>
                <Link to={'/resume'}>
                    <p>resume</p>
                </Link>
                <Link to={'/portfo'}>
                    <p>portfolio</p>
                </Link>
            </div>
            <div className='flex items-center justify-center gap-7'>
                <Smartphone  />
                <p>09134791903</p>
            </div>

        </div>
    </>
  )
}
