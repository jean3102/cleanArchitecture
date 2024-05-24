import { InputProps } from '../models/input';
import '../styles/input.css';
const Input = (props: InputProps) => {
	return (
		<input
			{...props}
		/>
	);
};

export default Input;
