import Logo from '../Logo/Logo'

function Navbar() {
	return (
		<div className='absolute z-999 top-0 left-0 right-0 h-16 border-b border-solid border-gray-200 px-4 py-2 flex justify-between items-center'>
			<div className='flex justify-start items-center gap-3'>
				<Logo size={50} />
				<p className='font-bold text-3xl text-cyan-950'>Navilo</p>
			</div>
		</div>
	)
}

export default Navbar
