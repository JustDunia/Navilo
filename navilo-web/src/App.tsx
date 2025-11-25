import './App.css'
import { Button, Flex } from 'antd'
import logo from './assets/logo.svg'

function App() {
	return (
		<>
			<Flex align='center' justify='center' vertical>
				<img src={logo} />
				<Button>Hello</Button>
			</Flex>
		</>
	)
}

export default App
