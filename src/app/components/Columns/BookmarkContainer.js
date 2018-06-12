import React from 'react'
import styled from 'styled-components'

import BookmarkColumn from './BookmarkColumn'
import ShowBookmarkAddColumn from '../../containers/Columns/ShowBookmarkAddColumn'
import DndBookmarkColumnContainer from '../../containers/Columns/DndBookmarkColumnContainer'

// Visualisation of the main container for columns
const BookmarkContainer = ({ className, columns }) => (
  <div className={className}>
    <DndBookmarkColumnContainer>
      {columns.map(column =>
        <BookmarkColumn {...column} />
      )}
      <ShowBookmarkAddColumn />
    </DndBookmarkColumnContainer>
  </div>
)

export default styled(BookmarkContainer)`
  position: absolute;
  left 50px;
  top: 100px;
  overflow-x: auto;
  white-space: nowrap;
`
