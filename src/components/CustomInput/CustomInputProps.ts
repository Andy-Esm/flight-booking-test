import {ReactNode, InputHTMLAttributes} from 'react';

type InputType = 'text' | 'radio' | 'checkbox';

type LabelPosition = 'left' | 'right';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	className?: string;
	type: InputType;
	name: string;
	placeholder?: string;
	id: string;
	labelPosition: LabelPosition;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
}
