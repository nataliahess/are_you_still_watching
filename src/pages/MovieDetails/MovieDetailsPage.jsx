import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { formatCurrency } from '../../utils'

import Badge from '../../components/Badge'

import Column from '../../components/layout/Column'
import PageWrapper from '../../components/layout/PageWrapper'
import Row from '../../components/layout/Row'

import Subheading from '../../components/typography/Subheading'
import Text from '../../components/typography/Text'

import Hero from './components/Hero'

function MovieDetailsPage(props) {
  const {
    backdropUrl,
    title,
    releaseDate,
    voteAverage,
    overview,
    genres,
    language,
    budget,
    runtime,
    productionCompanies,
  } = props

  const mapGenres = (genres) =>
    genres.map((genre) => <Badge key={genre.id} genre={genre.name} />)

  const mapProductionCompanies = (companies) => {
    return companies.map((company, i) => {
      const addComma =
        companies.length > 1 && companies.length - 1 !== i ? ', ' : ''
      return (
        <span key={i}>
          {company.name}
          {addComma}
        </span>
      )
    })
  }

  return (
    <DetailsPageWrapper>
      <BackButtonWrapper>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </Link>
      </BackButtonWrapper>
      <Hero
        backdropUrl={backdropUrl}
        title={title}
        releaseDate={releaseDate}
        voteAverage={voteAverage}
      />
      <PageWrapper>
        <Row>
          <Column size={8}>
            <Box mb={4} mr={[2, 4, 6]}>
              <Box mb={3}>
                <Subheading>Overview</Subheading>
              </Box>
              <Text>{overview}</Text>
              <Box mt={3}>{mapGenres(genres)}</Box>
            </Box>
          </Column>
          <Column size={4}>
            <Box>
              <DetailsBox>
                <Box mb={3}>
                  <Subheading>Details</Subheading>
                </Box>
                <Text as="li">Language: {language.toUpperCase()}</Text>
                <Text as="li">Budget: {formatCurrency(budget)}</Text>
                <Text as="li">Runtime: {runtime} min</Text>
                <Text as="li">
                  Production Companies:{' '}
                  {mapProductionCompanies(productionCompanies)}
                </Text>
              </DetailsBox>
            </Box>
          </Column>
        </Row>
      </PageWrapper>
    </DetailsPageWrapper>
  )
}

const DetailsPageWrapper = styled.div`
  position: relative;
`

const BackButtonWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 1em;
  left: 1em;

  a {
    color: #1e1e1e;
    opacity: 0.5;
    transition: color opacity 0.5s;
    -webkit-transition: color opacity 0.5s;

    &:hover,
    &:focus {
      opacity: 1;
      color: #ccc;
    }
  }
`

const DetailsBox = styled.ul`
  border: 1px solid #ccc;
  padding: 2em;
  list-style: none;
`

MovieDetailsPage.propTypes = {
  backdropUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  language: PropTypes.string,
  budget: PropTypes.number,
  runtime: PropTypes.number,
  productionCompanies: PropTypes.array,
}

export default MovieDetailsPage
