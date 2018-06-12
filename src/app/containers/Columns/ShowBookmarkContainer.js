import React from 'react'
import { connect } from 'react-redux'

import BookmarkContainer from '../../components/Columns/BookmarkContainer'

const ShowBookmarkContainer = ({ columns }) => (
  <BookmarkContainer columns={columns} />
)

const mapStateToProps = state => {
  return { columns: state.bookmarks.columns }
}

export default connect(mapStateToProps)(ShowBookmarkContainer)
