import Header from './Header';
import { ContainerProps } from '../models/container';

const Container = ({ children }: ContainerProps) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Container;
