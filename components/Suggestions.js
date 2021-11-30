import { useEffect, useState } from 'react'
import faker from 'faker'

function Suggestions() {
	const [Suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: 1,
		}))

		setSuggestions(suggestions)
	}, [])

	return (
		<div className='mt-4 ml-10'>
			<div className='flex justify-between text-sm mb-5'>
				<h3 className='text-sm font-bold text-gray-300'>Suggestions</h3>
				<button className='text-blue-400 font-semibold'>See all</button>
			</div>
			{Suggestions.map((profile) => (
				<div
					key={profile.id}
					className='flex items-center justify-between mt-3'>
					<img
						src={profile.avatar}
						className='w-10 h-10 border p-[2px] rounded-full'
					/>
					<div className='flex-1 flex justify-between  ml-4'>
						<div className='mr-5'>
							<h2 className='font-semibold text-sm text-white'>
								{profile.username}
							</h2>
							<h3 className='text-xs text-gray-100'>
								Works at {profile.company.name}
							</h3>
						</div>
						<button className='text-blue-400'>Follow</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Suggestions
