import { useForm, type SubmitHandler } from 'react-hook-form'
import { EMAIL_REGEX } from '../../utils/regex'
import TextInput from '../Inputs/TextInput'
import { FiMail, FiLock } from 'react-icons/fi'

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
				<TextInput
					id='email'
					label='Email'
					type='email'
					placeholder='Enter e-mail address'
					register={register('email', {
						required: 'Email is required',
						pattern: { value: EMAIL_REGEX, message: 'Invalid email address' },
					})}
					error={errors.email?.message}
					icon={<FiMail />}
				/>
				<TextInput
					id='password'
					label='Password'
					type='password'
					placeholder='Enter password'
					register={register('password', { required: 'Password is required' })}
					error={errors.password?.message}
					icon={<FiLock />}
				/>
				<TextInput
					id='password-confirm'
					label='Confirm password'
					type='password'
					placeholder='Confirm password'
					register={register('passwordConfirm', {
						required: 'Password confirmation is required',
						validate: value => (value === password ? true : "Password doesn't match"),
					})}
					error={errors.passwordConfirm?.message}
					icon={<FiLock />}
				/>
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
