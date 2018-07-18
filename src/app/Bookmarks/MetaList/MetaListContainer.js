import { connect } from 'react-redux'
import {
  moveBookmark,
  deleteBookmark,
  addBookmarkList,
  deleteBookmarkList
} from '../BookmarkActions'
import MetaList from './MetaList'

const mapStateToProps = state => ({
  bookmarkLists: state.BookmarkReducer
})

const mapDispatchToProps = dispatch => {
  return{
    moveBookmark: (dragID, dropIndex) => {dispatch(moveBookmark(dragID, dropIndex));},
    deleteBookmark: (id) => {dispatch(deleteBookmark(id));},
    addBookmarkList: (name) => {dispatch(addBookmarkList(name));},
    deleteBookmarkList: (index) => {dispatch(deleteBookmarkList(index));}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MetaList)
