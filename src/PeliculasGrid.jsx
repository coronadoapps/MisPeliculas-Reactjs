import peliculas from './peliculas.json';
import { PeliculaCard } from './PeliculaCard';
import styles from './PeliculasGrid.module.css'

export function PeliculasGrid() {
    return(<ul className={styles.peliculasGrid}>
                {peliculas.map((pelicula) => 
                    (<PeliculaCard key={pelicula.id} pelicula={pelicula}/>))}
            </ul>)
}