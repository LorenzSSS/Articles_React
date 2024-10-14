import s from './Button.module.css'

export const Button = ({button}) => {
    return (
        <button className = {s.button}>
            {button}
        </button>
    )
}

export default Button