import Child from './Child'
import './test.css'

const Test = (): JSX.Element => {
	return (
		<span className="testText">
			test component
			<Child title="OK" />
		</span>
	)
}

export default Test
