import Image from 'next/image';
import React from 'react'

type Props = {
	userName: string;
	userImage: string
}

const User = ({userName, userImage}: Props) => {
	return (
		<div className='flex items-center gap-2'>
			<Image src={userImage} alt="user profile picture" width={96} height={96} className='rounded-full w-8 h-8' />
			<p className="leading-4 text-green-5 text-[.75rem] antialiased">
      Welcome
      <br />
      {userName}!
    	</p>
		</div>
    
  );
}
export default User