import ActionTypes from '../ActionTypes'

export function moveBookmark(dragID, dropIndex){
  return {
    type: ActionTypes.MOVE_BOOKMARK,
    payload: {dragID: dragID, dropIndex: dropIndex}
  };
}

export function deleteBookmark(id){
  return {
    type: ActionTypes.DELETE_BOOKMARK,
    payload: {id: id}
  };
}

export function addBookmarkList(name){
  return {
    type: ActionTypes.ADD_BOOKMARK_LIST,
    payload: {name: name}
  };
}

export function deleteBookmarkList(index){
  return {
    type: ActionTypes.DELETE_BOOKMARK_LIST,
    payload: {index: index}
  };
}
