import './index.css'

const MovieList = props => {
  const {movieDetails} = props

  const getDate = date => {
    const dateObj = new Date(date * 1000)
    const month = dateObj.toLocaleString('default', {month: 'short'})
    const day = dateObj.getDate()
    // console.log(day, month)
    return `${day} ${month}`
  }

  return (
    <li className="movie-list-container">
      <div className="all-details-container">
        <div className="votes-container">
          <img alt="up-arrow" src="uparrow.png" className="icon-img" />
          <p className="voting-count">{movieDetails.totalVoted}</p>
          <img alt="down-arrow" src="downarrow.png" className="icon-img" />
          <p className="voting-count">votes</p>
        </div>
        <div className="movie-img-container">
          <img
            alt={movieDetails.title}
            src={movieDetails.poster}
            className="movie-img"
          />
        </div>
        <div className="movie-details-container">
          <h1 className="movie-title">{movieDetails.title}</h1>
          <p className="category-values">
            <span className="category">Genre: </span>
            {movieDetails.genre}
          </p>
          <p className="category-values">
            <span className="category">Director: </span>
            {movieDetails.director[0]}
          </p>
          <p className="category-values">
            <span className="category">Starring: </span>
            {movieDetails.stars}
          </p>
          <div className="short-details">
            <p className="short-items">Mins | </p>
            <p className="short-items">{movieDetails.language} |</p>
            <p className="short-items">{getDate(movieDetails.releasedDate)}</p>
          </div>
          <div className="info-details">
            <p className="info-items">{movieDetails.pageViews} Views | </p>
            <p className="info-items">
              Voted by {movieDetails.totalVoted} people
            </p>
          </div>
        </div>
      </div>
      <button type="button" className="watch-trailer-btn">
        Watch Trailer
      </button>
    </li>
  )
}

export default MovieList
