import { Container } from '../Container/Container'
import { Card } from '../Card/Card'
import image1 from '../../assets/image/image1.jpg'
import image2 from '../../assets/image/image2.jpg'
import image3 from '../../assets/image/image3.jpg'
import s from './Main.module.css'


export const Main = () => {
    return (
        <Container>
            <main className = {s.Main}>
                <Card 
                    img = { image1 }
                    date = {'05.03.2021'}
                    title = {'Режим использования масок и перчаток на территории магазинов'}
                    articel = {'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'}
                    button = {'hallo'}
                />
                <Card 
                    img = { image2 }
                    date = {'05.03.2021'}
                    title = {'Весеннее настроение для каждой'}
                    articel = {'8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.'}
                />
                <Card 
                    img = { image3 }
                    date = {'22.02.2020'}
                    title = {'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!'}
                    articel = {'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!'}
                />
            </main>
        </Container>
    )
}


export default Main

