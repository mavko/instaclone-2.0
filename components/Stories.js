import faker from 'faker'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Story from './Story'

function Stories() {
	const [suggestions, setSuggestions] = useState([])
	const { data: session } = useSession()

	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}))
		setSuggestions(suggestions)
	}, [])

	return (
		<div className='flex space-x-2 bg-gray-800 text-white pa-15 px-5 rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-white scroll'>

			{useSession && (
				<Story img={session?.user?.image} username={session?.user?.username} />
			)}
			
			
			{suggestions.map((profile) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	)
}

export default Stories
