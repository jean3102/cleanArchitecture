export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
	children: React.ReactNode;
}
