import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from '@firebase/firestore'
import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Moment from 'react-moment'

function post({ id, username, userImg, img, caption }) {
	const { data: session } = useSession()
	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([])
	const [likes, setLikes] = useState([])
	const [hasLiked, setHasLiked] = useState([false])

	// comments
	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, 'posts', id, 'comments'),
					orderBy('timestamp', 'desc')
				),
				(snapshot) => setComments(snapshot.docs)
			),
		[db]
	)
	// likes
	useEffect(
		() =>
			onSnapshot(query(collection(db, 'posts', id, 'likes')), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[db, id]
	)

	const likePost = async () => {
		if (hasLiked) {
			await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
		} else {
			await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
				username: session.user.username,
			})
		}
	}

	useEffect(
		() =>
			setHasLiked(
				likes.findIndex((like) => like.id === session?.user?.uid) !== -1
			),
		[likes]
	)

	// send comment
	const sendComment = async (e) => {
		e.preventDefault()

		const commentToSend = comment
		setComment('')

		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username: session.user.username,
			userImage: session.user.image,
			timestamp: serverTimestamp(),
		})
	}

	return (
		<div className=' my-7 rounded-lg bg-gray-900'>
			{/* header */}
			<div className='flex items-center space-between py-4 pl-3 pr-5'>
				<img
					src={userImg}
					className='rounded-full h-10 w-10 object-contain border border-red-500 p-1 mr-3'
				/>
				<p className='flex-1 font-bold text-white'>{username}</p>
				<DotsHorizontalIcon className='h-5 text-white' />
			</div>
			{/* img */}
			<img src={img} className='object-cover w-full' />
			{/* btns */}
			{session && (
				<div className='flex justify-between p-4'>
					<div className='flex items-center justify-start space-x-5'>
						{hasLiked ? (
							<HeartIconFilled
								onClick={likePost}
								className='text-red-500 btn'
							/>
						) : (
							<HeartIcon onClick={likePost} className='text-white btn' />
						)}
						<ChatIcon className='text-white btn' />
						<PaperAirplaneIcon className='text-white btn rotate-45' />
					</div>
					<BookmarkIcon className='text-white btn' />
				</div>
			)}

			{/* caption */}
			<p className='px-5 truncate text-white'>
				{likes.length > 0 && (
					<p className='font-bold mb-1'>{likes.length} likes</p>
				)}
				<span className='font-bold mr-2'>{username}</span>
				<br />
				{caption}
			</p>
			{/* comments */}
			{comments.length > 0 && (
				<div className='ml-5 mt-3 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
					{comments.map((comment) => (
						<div key={comment.id} className='flex items-center space-x-2 mb-3'>
							<img
								src={comment.data().userImage}
								alt=''
								className='h-7 rounded-full'
							/>
							<p className='text-sm flex-1'>
								<span className='font-weight-bold text-gray-300 mr-3'>
									{comment.data().username}
								</span>
								{''}
								<span className='text-gray-400'>{comment.data().comment}</span>
							</p>
							<Moment fromNow className='pr-5 text-xs'>
								{comment.data().timestamp?.toDate()}
							</Moment>
						</div>
					))}
				</div>
			)}
			{/* inputs */}
			{session && (
				<form className='flex items-center p-4'>
					<EmojiHappyIcon className='text-white h-7' />
					<input
						type='text'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder='Add a comment..'
						className='border-none flex-1 focus:ring-0 outline-none bg-gray-700 mx-2 rounded-xl'
					/>
					<button
						type='submit'
						disabled={!comment.trim()}
						onClick={sendComment}
						className='text-blue-400 font-semibold'>
						Post
					</button>
				</form>
			)}
		</div>
	)
}

export default post
