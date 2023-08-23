import { Layout, Form } from './components'
import { getInputs } from './lib'

interface SignUpFormType {
	username: string
	password: string
	repeat_password: string
	cuit: BigInteger
}

//interface AnotherFormType {}

const signUpForm = getInputs<SignUpFormType>('register')
//const anotherForm = getInputs<AnotherFormType>('another')

const App = () => {
	const onSubmitSignUp = (data: unknown) => console.log({ singUp: data })

	//const onSubmitAnotherForm = (data: unknown) => console.log({ another: data })

	const initialValuesSignUp: SignUpFormType = {
		...signUpForm.initialValues,
		username: ''
	}

	return (
		<Layout>
			<Form
				{...signUpForm}
				initialValues={initialValuesSignUp}
				titleForm='Dar de Alta Proponente'
				onSubmit={onSubmitSignUp}
				labelButtonSubmit='Crear'
			/>
		</Layout>
	)
}
export default App
