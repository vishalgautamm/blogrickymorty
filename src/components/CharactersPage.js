import React from 'react'
import { Link } from 'react-router-dom'

// convert class components to functional components
const CharactersPage = props => {
  const images = props.data

  return images.map((elm, index) => (
    <Link to={`detail/${elm.id}`}>
      <img className='col-md-4 col-sm-6 mt-4' key={index} src={elm.url} />
    </Link>
  ))
}

export default CharactersPage
