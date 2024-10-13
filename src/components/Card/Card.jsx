import s from './Card.module.css'


export const Card = ({img, date, title, articel}) => {
    return(
        <article className={s.card}>
            <img className={s.image} src={img} alt="Bild" />
            <div className={s.content}>
                <p className={s.date}>{date}</p>
                <p className={s.title}>{title}</p>
                <p className={s.articel}>{articel}</p>
            </div>
        </article>
    )
}

export default Card