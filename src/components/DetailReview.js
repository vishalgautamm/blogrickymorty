import React from 'react'
import Button from '../components/Button'
import StyledLink from '../components/StyledLink'
import styled from 'styled-components'
import getPronoun from '../utils/getPronoun'
import PropTypes from 'prop-types'

const DetailViewContainer = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 667px) {
    flex-direction: column;
    padding: 0px;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  & > p {
    margin-left: 10px;

    @media (max-width: 667px) {
      margin-top: 20px;
      margin-left: 0px;
      padding: 10px;
    }
  }

  & > img {
    @media (max-width: 667px) {
      width: 100%;
    }
  }
`

const DetailReview = ({ data }) => {
  let { image, name, status, species, type, gender, origin, location } = data
  let pronoun = getPronoun(gender)

  let summary = `This is ${name} a ${gender} ${species} 
                ${pronoun} was born at ${origin} planet his type is ${type}.
                ${pronoun} is ${status} at the moment and is located at ${location}`

  return (
    <div>
      <Button secondary>
        <StyledLink to='/characters'> Back </StyledLink>
      </Button>
      <DetailViewContainer>
        <img src={image} alt={name} />
        <p>{summary}</p>
      </DetailViewContainer>
    </div>
  )
}

// declaring propTypes - do the same for all the other components that are receiving props
DetailReview.propTypes = {
  data: PropTypes.object.isRequired
}

export default DetailReview
