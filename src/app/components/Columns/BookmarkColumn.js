import React from 'react'
import styled from 'styled-components'

import ShowBookmarkColumnHead from '../../containers/Columns/ShowBookmarkColumnHead'
import DndBookmarkColumnCover from '../../containers/Columns/DndBookmarkColumnCover'

// Visualisation of the column for bookmark cards
const BookmarkColumn = ({ className, id, name, cards }) => (
  <div className={className}>
    <ShowBookmarkColumnHead name={name} />
    <DndBookmarkColumnCover columnName={name}
      cards={cards} />
  </div>
)

export default styled(BookmarkColumn)`
  display: inline-block;
  width: 250px;
  height: auto;
  margin: 5px 15px;
  vertical-align: top;
`
