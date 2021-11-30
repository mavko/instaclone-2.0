import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

// client browser
function signIn({ providers }) {
	return (
		<>
			<Header />

			<div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
				<img
					src='/assets/img/instagram_logo.svg'
					alt=''
					className='w-80 my-10'
				/>

				<div className='mb-10'>
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								onClick={() =>
									signIntoProvider(provider.id, { callbackUrl: '/' })
								}
								className='p-2 pl-5 pr-5 bg-transparent border-2 border-white text-white text-lg rounded-full transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-white'>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
				<p>Not a real app. It's built for educational purposes only.</p>
			</div>
		</>
	)
}

// server side render
export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers,
		},
	}
}

export default signIn
