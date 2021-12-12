import { MovieCard } from './MovieCard'

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContentProps {
  selectedGenre: {
    title: string;
  }
  movies: Array<MovieProps>;
}

export function Content({ selectedGenre, movies}: IContentProps) {
  // Complete aqui
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )
}