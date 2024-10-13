import s from './Card.module.css'

export const Card = () => {
    return(
        <Container>
            <article className={s.card}>
                <img className={s.image} src={img} alt="Bild" />
                <div className={s.content}>
                    <p className={s.date}>{date}</p>
                </div>
            </article>
        </Container>
    )
}

export default Card