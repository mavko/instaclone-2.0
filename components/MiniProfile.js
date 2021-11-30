import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
	const { data: session } = useSession()
	return (
		<div className='flex items-center mt-14 ml-10 justify-between'>
			<img
				className='w-16 h-16 rounded-full border-2 p-[1.5px]'
				src={session?.user?.image}
			/>
			<div className='flex-1 mx-4'>
				<h2 className='text-white font-bold'>{session?.use?.username}</h2>
				<h3 className='text-gray-100 font-sm'>Welcome to Instagram</h3>
			</div>
			<button onClick={signOut} className='text-blue-400'>
				Sign out
			</button>
		</div>
	)
}

export default MiniProfile
