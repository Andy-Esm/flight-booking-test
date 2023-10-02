import styles from './Button.module.css';
import classNames from 'classnames';
import {IButtonProps} from './ButtonProps';

export const Button = ({
	children,
	className,
	type,
	size,
	style,
	onClick,
}: IButtonProps) => {
	const buttonStyles = classNames(
		styles.button,
		{
			[styles.small]: size === 'small',
			[styles.full]: size === 'full',
			[styles.primary]: style === 'primary',
			[styles.secondary]: style === 'secondary',
		},
		className
	);

	return (
		<button type={type} className={buttonStyles} onClick={onClick}>
			{children}
		</button>
	);
};
