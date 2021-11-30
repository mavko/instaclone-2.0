import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'

function Feed() {
	const { data: session } = useSession()

	return (
		<main
			className={`grid grid-cols-1 md:grid-cols-1 md:max-w-2xl xl:grid-cols-2 xl:max-w-5xl mx-auto ${
				!session && '!grid-cols-1 !max-w-3xl'
			}`}>
			<section>
				<Stories />
				<Posts />
			</section>
			{session && (
				<section className='hidden xl:inline-grid md:col-span-1'>
					<div className='fixed'>
						<MiniProfile />
						<Suggestions />
					</div>
				</section>
			)}
		</main>
	)
}

export default Feed
