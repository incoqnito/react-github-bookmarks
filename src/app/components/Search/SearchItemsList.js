import React from 'react'

import styled from 'styled-components'
import SearchItem from './SearchItem'

// Visualisation of the search items list
const SearchItemsList = ({ items, className }) => (
  <div className={className}>
    <ul>
      {items.map(item =>
        <SearchItem key={item.id}
          {...item}
        />
      )}
    </ul>
  </div>
)

export default styled(SearchItemsList)`
  ul {
    padding-left: 0;
  }
`
