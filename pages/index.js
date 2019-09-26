import React from 'react'

import { motion } from 'framer-motion'

const Code = (props) => (
	<code
		className='font-mono text-sm text-gray-100 rounded-sm p-1'
		style={{ background: 'rgba(255, 255, 255, 0.2)' }}
		{...props}
	/>
)

const Home = () => (
	<div>
		<motion.div
			className='flex flex-col items-center justify-between h-screen w-screen pt-64 px-64 pb-2'
			initial={{ backgroundImage: 'linear-gradient(140deg, #667eea 0%, #764ba2 100%)' }}
			animate={{ backgroundImage: 'linear-gradient(220deg, #667eea 0%, #764ba2 100%)' }}
			transition={{
				yoyo     : Infinity,
				duration : 60
			}}
		>
			<div>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='text-6xl text-white font-light tracking-wider'
				>
					Hello World! 👋
				</motion.h1>
				<h5 className='text-gray-300 text-lg'>
					This is <Code>NextJS</Code> with <Code>TailwindCSS</Code> and <Code>Framer Motion</Code>.
				</h5>
			</div>

			<span className='text-gray-400'>
				Boilerplate by{' '}
				<a href='https://github.com/loicnestler' target='_blank' className='underline'>
					Loïc Nestler
				</a>
			</span>
		</motion.div>
	</div>
)

export default Home
