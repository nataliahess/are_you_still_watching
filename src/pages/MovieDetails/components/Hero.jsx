import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'rebass'

import { formatReleaseDate } from '../../../utils.js'

import Rating from '../../../components/Rating'
import PageWrapper from '../../../components/layout/PageWrapper'
import Header from '../../../components/typography/Header'
import Text from '../../../components/typography/Text'

function Hero(props) {
  const { title, backdropUrl, releaseDate, voteAverage } = props
  return (
    <ImageWrapper>
      <StyledImg alt={title} src={backdropUrl} />
      <TextWrapper>
        <PageWrapper>
          <Header>{title}</Header>
          <Text>{formatReleaseDate(releaseDate)}</Text>
          <Box display="inline-block" mx={2}>
            <Text>|</Text>
          </Box>
          <Rating voteAverage={voteAverage} />
        </PageWrapper>
      </TextWrapper>
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 300px;
`
const StyledImg = styled.img`
  filter: blur(1px) brightness(0.5);
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  backdropUrl: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAverage: PropTypes.number,
}

export default Hero
