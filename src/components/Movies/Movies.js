import {Component} from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import './index.css'

const details = {
  category: 'movies',
  language: 'kannada',
  genre: 'all',
  sort: 'voting',
}
const url = 'https://hoblist.com/api/movieList'

class Movies extends Component {
  state = {moviesList: []}

  componentDidMount() {
    this.getMoviesData()
  }

  getMoviesData = async () => {
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(details),
    }
    const response = await fetch(url, configurationObject)
    const data = await response.json()
    this.setState({moviesList: data.result})
    // console.log(data.result)
  }

  render() {
    const {moviesList} = this.state
    console.log(moviesList)
    return (
      <div className="movies-main-container">
        <Header />
        <ul className="all-movies-list-container">
          {moviesList.map(eachMovie => (
            <MovieList key={eachMovie.title} movieDetails={eachMovie} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Movies
