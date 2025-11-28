import { useForm, type SubmitHandler } from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex'

type RegisterRequest = {
	email: string
	password: string
	passwordConfirm: string
}

function RegisterForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterRequest>()
	const onSubmit: SubmitHandler<RegisterRequest> = data => console.log(data)
	const password = watch('password')

	return (
		<div className='flex flex-col gap-2 w-3xl items-center p-4 text-xl'>
			<h1 className='text-4xl mb-8 text-cyan-950'>Sign up</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className='flex flex-col w-120 mb-6'>
					<label htmlFor='email' className='pl-1 mb-1 text-cyan-950'>
						Email
					</label>
					<input
						id='email'
						type='email'
						{...register('email', {
							required: 'Email is required',
							pattern: { value: EMAIL_REGEX, message: 'Invalid email address' },
						})}
						placeholder='Enter e-mail address'
						className='border border-gray-300 py-2 px-4 rounded-md focus:border-cyan-950 outline-0 text-cyan-950'
					></input>
					{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
				</div>
				<div className='flex flex-col w-120 mb-6'>
					<label htmlFor='password' className='pl-1 mb-1 text-cyan-950'>
						Password
					</label>
					<input
						id='password'
						type='password'
						{...register('password', {
							required: 'Password is required',
						})}
						placeholder='Enter password'
						className='border border-gray-300 py-2 px-4 rounded-md focus:border-cyan-950 outline-0 text-cyan-950'
					></input>
					{errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
				</div>
				<div className='flex flex-col w-120 mb-6'>
					<label htmlFor='password-confirm' className='pl-1 mb-1 text-cyan-950'>
						Confirm password
					</label>
					<input
						id='password-confirm'
						type='password'
						{...register('passwordConfirm', {
							required: 'Password confirmation is required',
							validate: value => (value === password ? true : "Password doesn't match"),
						})}
						placeholder='Confirm password'
						className='border border-gray-300 py-2 px-4 rounded-md focus:border-cyan-950 outline-0 text-cyan-950'
					></input>
					{errors.passwordConfirm && (
						<p style={{ color: 'red' }}>{errors.passwordConfirm.message}</p>
					)}
				</div>
				<button
					type='submit'
					className='bg-blue-600 w-full mt-6 px-4 py-2 rounded-md cursor-pointer text-white shadow-xl hover:bg-blue-700 transition duration-150'
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default RegisterForm
