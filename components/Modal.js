import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { CameraIcon, UploadIcon } from '@heroicons/react/outline'
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from '@firebase/firestore'
import { useSession } from 'next-auth/react'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import { db, storage } from '../firebase'

function Modal() {
	const { data: session } = useSession()
	const [open, setOpen] = useRecoilState(modalState)
	const filePickerRef = useRef(null)
	const [selectedFile, setSelectedFile] = useState(null)
	const captionRef = useRef(null)
	const [loading, setLoading] = useState(false)

	const uploadPost = async () => {
		if (loading) return

		setLoading(true)

		// create post and add it to firestore 'posts' collection
		// 2) get the post ID for newly created post √
		// 3) upload image to fb storage with the post ID √
		// 4) get a DL url from fb storage and update post with img

		const docRef = await addDoc(collection(db, 'posts'), {
			username: session.user.username,
			caption: captionRef.current.value,
			profileImg: session.user.image,
			timestamp: serverTimestamp(),
		})

		console.log('New doc added with ID', docRef.id)

		const imageRef = ref(storage, `posts/${docRef.id}/image`)

		await uploadString(imageRef, selectedFile, 'data_url').then(
			async (snapshot) => {
				const downloadURL = await getDownloadURL(imageRef)
				await updateDoc(doc(db, 'posts', docRef.id), {
					image: downloadURL,
				})
			}
		)

		setOpen(false)
		setLoading(false)
		setSelectedFile(null)
	}

	const addImageToPost = (e) => {
		const reader = new FileReader()
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result)
		}
	}

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-auto'
				onClose={setOpen}>
				<div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<Transition.Child
						as={Fragment}
						as='ref'
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>
					{/* trick the browser to center modal contents */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'>
						&#8203
					</span>

					<Transition.Child
						as={Fragment}
						as='ref'
						enter='ease-out duration-300'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100'
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
						<Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
						<div className='inline-block align-middle bg-black rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm-align-middle sm:max-w-sm sm:w-full sm:p-6'>
							<div>
								{selectedFile ? (
									<img
										src={selectedFile}
										onClick={() => setSelectedFile(null)}
										alt=''
										className='object-contain cursor-pointer w-full'
									/>
								) : (
									<div
										onClick={() => filePickerRef.current.click()}
										className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer'>
										<CameraIcon
											className='h-6 w-6 text-red-600'
											aria-hidden='true'
										/>
									</div>
								)}

								<div className='mt-3 text-center sm:mt-5'>
									<Dialog.Title
										as='h3'
										className='text-lg text-white leading-6 font-medium'>
										Upload a photo
									</Dialog.Title>
								</div>

								<div>
									<input
										ref={filePickerRef}
										type='file'
										hidden
										onChange={addImageToPost}
									/>
								</div>

								<div className='mt-5'>
									<input
										type='text'
										className='border-2 rounded-full focus:ring-0 w-full text-center bg-transparent'
										ref={captionRef}
										placeholder='Your post caption..'
									/>
								</div>

								<div className='mt-5 sm:mt-6 text-center'>
									<button
										type='button'
										disabled={!selectedFile}
										onClick={uploadPost}
										className='inline-flex justify-center w-full p-2 pl-5 pr-5 bg-white border-2 border-white text-black rounded-full transition-colors duration-700 transform focus:border-4 focus:border-white disabled:bg-gray-300 disabled:cursor-not-allowed'>
										{loading ? 'Uploading post...' : 'Upload post'}
										<UploadIcon className='h-6 w-5 ml-1' />
									</button>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Modal
