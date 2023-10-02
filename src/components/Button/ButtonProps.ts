import {ReactNode} from 'react';

type ButtonSizes = 'full' | 'small';

type ButtonStyles = 'primary' | 'secondary';

export interface IButtonProps {
	children: ReactNode;
	size?: ButtonSizes;
	style?: ButtonStyles;
	type?: 'submit' | 'button';
	onClick?: () => void;
	className?: string;
}
