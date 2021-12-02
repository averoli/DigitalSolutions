import cn from 'classnames';
import s from './style.module.css';

const Button = ({ type, children, onClick }) => {
    return (
        <button type = "button"
                onClick={onClick}
                className={cn(s.btn, {
                    [s.primary]:type === "primary"})}
        >
            <span className={s.wrap}>{children}</span>
        </button>
    );
};

export default Button;