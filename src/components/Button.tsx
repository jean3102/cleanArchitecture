import { ButtonProps } from '../models/button';
import '../styles/button.css';

const Button = ({ children, ...props }: ButtonProps) => {
	return <button className='button2' {...props}>{children}</button>;
};

export default Button;
