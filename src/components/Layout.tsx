export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return (
		<>
			<h1 className='text-left my-10 text-5xl'>
				<span>Crear</span>
				<span className='font-bold bg-clip-text text-transparent  text-[#EC5990]'>
					{' - '}
					Proponente
				</span>
			</h1>

			<main className='grid sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-10 gap-10 place-items-start justify-items-center px-5'>
				{children}
			</main>
		</>
	)
}
