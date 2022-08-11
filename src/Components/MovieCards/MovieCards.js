import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import './movie.css';
const MovieCards = ({movie}) => {
  return (
    <div>
        <Card style={{  width: '18rem',height:"800px"}}>
         <Link to='/des'>< Card.Img  variant="top" src={movie.posterUrl} /></Link>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <StarRatingComponent
      name={`str${movie.id}`} /* name of the radio input, it is required */
      value={movie.rate}
      editing={false}
    /> <br />
    <Button href={movie.trailer} target={"blanck"}>Trailer</Button>
  </Card.Body>
</Card>





    </div>
  )
}

export default MovieCards