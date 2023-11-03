import Image from 'next/image';
import React from 'react'


const Avatar = () => {
    const imgSource = false;

  return (
    <div className='min-w-[20px] w-[35px] max-h-[35px] h-[100%] flex justify-around items-center text-center bg-red-400 rounded-full'>
      {imgSource ? <Image></Image> : <p className='h-[100%] text-white font-bold'>D</p>}
    </div>
  )
}

export default Avatar;
