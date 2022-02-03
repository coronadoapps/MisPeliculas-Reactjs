import styles from './PeliculaCard.module.css'

export function PeliculaCard({pelicula}){
    const apiImageAddress = "http://image.tmdb.org/t/p/";
    const imageUrl = pelicula.poster_path ? `${apiImageAddress}w300${pelicula.poster_path}` : '';
    return <li className={styles.peliculaCard}>
                <img width={230} height={345} src={imageUrl} alt={pelicula.title} className={styles.peliculaImage}/>
                <div>{pelicula.title}</div>
            </li>;
}