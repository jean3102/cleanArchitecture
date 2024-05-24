export interface InputProps {
	type: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	name?: string;
	className?: string;
	disabled?: boolean;
}
