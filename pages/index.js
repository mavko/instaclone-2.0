import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
	return (
		<div className='bg-black h-screen overflow-y-scroll scrollbar-hide'>
			<Head>
				<title>Instagram 2.0 clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Modal />
			{/* Header */}
			<Header />
			{/* Feed */}
			<Feed />
			{/* Modal */}
		</div>
	)
}
