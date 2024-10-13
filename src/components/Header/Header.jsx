import s from './Header.module.css'
import { Container } from '../Container/Container'

export const Header = () => {
    return(
        <Container>
            <h1 className={s.title}>Статьи</h1>
        </Container>
    )
}

export default Header