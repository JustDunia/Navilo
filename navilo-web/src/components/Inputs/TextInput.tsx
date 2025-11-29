import React, { useState } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

type Props = {
	id: string
	label: string
	type?: string
	placeholder?: string
	register?: UseFormRegisterReturn
	error?: string | undefined
	icon?: React.ReactNode
}

function TextInput({ id, label, type = 'text', placeholder, register, error, icon }: Props) {
	const [show, setShow] = useState(false)
	const isPassword = type === 'password'
	const inputType = isPassword ? (show ? 'text' : 'password') : type

	return (
		<div className='flex flex-col w-120 mb-6'>
			<label htmlFor={id} className='pl-1 mb-1 text-cyan-950'>
				{label}
			</label>
			<div className='relative'>
				{icon && (
					<div
						className='absolute left-3 top-1/2 -translate-y-1/2 text-cyan-800 w-5 h-5'
						aria-hidden='true'
					>
						{icon}
					</div>
				)}
				<input
					id={id}
					type={inputType}
					{...register}
					placeholder={placeholder}
					className={`border py-2 px-4 rounded-md outline-0 text-cyan-950 w-full 
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${error ? 'focus:border-red-500' : 'focus:border-cyan-950'}
            `}
				/>
				{isPassword && (
					<button
						type='button'
						onClick={() => setShow(show => !show)}
						className='absolute right-3 top-1/2 -translate-y-1/2 text-cyan-800'
						aria-label={show ? 'Hide password' : 'Show password'}
					>
						{show ? <BsEyeSlash /> : <BsEye />}
					</button>
				)}
				{error && <p className='text-red-500 text-sm absolute bottom--2'>{error}</p>}
			</div>
		</div>
	)
}

export default TextInput
