import {IForm} from './FormProps';
import styles from './Form.module.css';

export const Form = ({children}: IForm) => {
	return <form className={styles.form}>{children}</form>;
};
