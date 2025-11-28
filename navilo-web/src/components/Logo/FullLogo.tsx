import type LogoProps from './logoProps'

function FullLogo({ width, height, size }: LogoProps) {
	const logoWidth = size || width || 512
	const logoHeight = size || height || 512

	return (
		<svg
			width={logoWidth}
			height={logoHeight}
			viewBox='0 0 512 512'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<defs>
				<linearGradient id='grad1' x1='0%' y1='0%' x2='0%' y2='100%'>
					<stop offset='0%' stopColor='#00cba9' />
					<stop offset='100%' stopColor='#0056b3' />
				</linearGradient>
			</defs>
			<rect width='512' height='512' rx='100' fill='#f8f9fb' />

			<g transform='translate(256, 256) scale(1.12) translate(-256, -256)'>
				<g transform='translate(100, 40)'>
					<path
						d='M156 24L30 96V240L156 312L282 240V96L156 24Z'
						stroke='url(#grad1)'
						strokeWidth='12'
						fill='none'
						strokeLinejoin='round'
					/>
					<path
						d='M156 168V24 M156 168V312 M156 168L30 96 M156 168L282 96'
						stroke='url(#grad1)'
						strokeWidth='12'
						fill='none'
						strokeLinecap='round'
					/>

					<path
						d='M96 264V120L216 264V84'
						stroke='url(#grad1)'
						strokeWidth='24'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path
						d='M186 114L216 84L246 114'
						stroke='url(#grad1)'
						strokeWidth='24'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
				<text
					x='256'
					y='450'
					fontFamily='Calibri, sans-serif'
					fontWeight='bold'
					fontSize='100'
					fill='#001f3f'
					textAnchor='middle'
				>
					Navilo
				</text>
			</g>
		</svg>
	)
}

export default FullLogo
