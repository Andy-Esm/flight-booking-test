import {IInputProps} from './CustomInputProps';
import styles from './CustomInput.module.css';
import classNames from 'classnames';
import {forwardRef} from 'react';

export const CustomInput = forwardRef<HTMLInputElement, IInputProps>(
	function CustomInput(
		{
			type,
			name,
			children,
			id,
			labelPosition,
			className,
			value,
			onChange,
			checked,
			...restProps
		},
		ref
	) {
		const labelStyles = classNames(styles.label, {
			[styles.leftSide]: labelPosition === 'left',
			[styles.rightSide]: labelPosition === 'right',
		});

		const inputStyles = classNames(
			styles.input,
			{
				[styles.small]: type === 'radio' || type === 'checkbox',
				[styles.default]: type === 'text',
			},
			className
		);

		return (
			<div className={styles.inputWrapper}>
				<label htmlFor={name} className={labelStyles}>
					{children}
				</label>
				<input
					ref={ref}
					id={id}
					type={type}
					name={name}
					className={inputStyles}
					value={value}
					onChange={onChange}
					checked={checked}
					{...restProps}
				/>
			</div>
		);
	}
);
