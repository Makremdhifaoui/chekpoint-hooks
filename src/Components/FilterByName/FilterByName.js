import React from 'react'
import { Form } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const FilterByName = ({inputSearch , setInputSearch , handleRating}) => {
  return (
    <div>
         <Form.Control type="text" placeholder="Enter your movie" 
         value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}
         />
         <>
            <StarRatingComponent
              name='movie rating' /* name of the radio input, it is required */
              starCount={5}
              onStarClick={(value)=>handleRating(value)}
            />
         </>
    </div>
  )
}

export default FilterByName