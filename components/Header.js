import React from 'react'
import Image from 'next/image'
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	ChatIcon,
	MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
	const { data: session } = useSession()
	const [open, setOpen] = useRecoilState(modalState)
	const router = useRouter()

	return (
		<div className='shadow-sm bg-black sticky top-0 z-50 sm:px-5'>
			<div className='flex justify-between max-w-5xl mx-5 md:mx-auto xl:mx-auto'>
				{/* logo full */}
				<div
					onClick={() => router.push('/')}
					className='relative hidden lg:inline-grid w-24 cursor-pointer'>
					<Image
						src='/assets/img/instagram_logo.svg'
						layout='fill'
						objectFit='contain'
						className='w-10 h-10'
					/>
				</div>
				{/* logo small */}
				<div
					onClick={() => router.push('/')}
					className='relative w-7 lg:hidden flex-shrink-0 cursor-pointer text-white'>
					<Image
						src='/assets/img/instagram_logo_icon.svg'
						layout='fill'
						objectFit='contain'
					/>
				</div>

				{/* search input */}
				<div className='max-w-xs'>
					<div className='relative mt-1 p-3 rounded-md'>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<SearchIcon className='h-5 w-5 text-gray-500' />
						</div>
						<input
							className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-xl'
							type='text'
							placeholder='Search'
							name=''
							id=''
						/>
					</div>
				</div>

				{/* nav icons */}
				{session ? (
					<>
						<div className='flex items-center justify-end space-x-4'>
							<HomeIcon
								onClick={() => router.push('/')}
								className='navBtn text-white'
							/>
							<MenuIcon className='h-6 text-white md:hidden cursor-pointer' />

							<div className='relative navBtn'>
								<ChatIcon className='navBtn text-white' />
								<div className='absolute -top-2 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center'>
									3
								</div>
							</div>
							<PlusCircleIcon
								onClick={() => setOpen(true)}
								className='navBtn text-white'
							/>
							<UserGroupIcon className='navBtn text-white' />
							<HeartIcon className='navBtn text-white' />

							<img
								onClick={signOut}
								src={session.user.image}
								alt='Profile picture'
								className='h-10 w-10 rounded-full cursor-pointer'
							/>
						</div>
					</>
				) : (
					<button onClick={signIn} className='text-white'>
						Sign in
					</button>
				)}
			</div>
		</div>
	)
}

export default Header
