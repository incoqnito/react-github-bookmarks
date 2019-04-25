import React from 'react'

import ShowSearchInput from '../containers/Search/ShowSearchInput'
import ShowDropDown from '../containers/DropDown/ShowDropDown'
import ShowBookmarkContainer from '../containers/Columns/ShowBookmarkContainer'

const BookmarkApp = () => (
  <div>
    <ShowSearchInput />
    <ShowDropDown />
    <ShowBookmarkContainer />
  </div>
)

export default BookmarkApp
