import React from 'react'
import styled from 'styled-components'

function SearchBar(props) {
  return (
    <SearchBarWrapper role="search">
      <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
      </StyledIcon>
      <StyledInput
        aria-label="Search"
        type="search"
        placeholder="Search movies..."
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onSubmit}
      />
    </SearchBarWrapper>
  )
}

const StyledInput = styled.input`
  border: none;
  background: transparent;
  flex: 1;
  outline: none;
  font-size: 1rem;
  color: inherit;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`

const StyledIcon = styled.svg`
  padding: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #ccc;
`

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #ccc;
  padding: 0 0.25rem;
  border-radius: 2rem;
  background-color: #1e1e1e;
  width: 30%;

  &:focus-within {
    box-shadow: 0 0 11px #ccc;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

export default SearchBar
