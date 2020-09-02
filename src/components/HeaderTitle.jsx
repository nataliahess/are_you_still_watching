import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

function HeaderTitle() {
  return (
    <Flex alignItems="center" flexWrap="nowrap">
      <Box mr={2}>
        <FontAwesomeIcon
          icon={faFilm}
          transform={{ rotate: -45 }}
          size="2x"
          color="#e6020c"
        />
      </Box>
      <Text
        as="h1"
        fontFamily="Oswald"
        fontSize={[5, 5, 6]}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Are you still watching?
      </Text>
    </Flex>
  )
}

export default HeaderTitle
