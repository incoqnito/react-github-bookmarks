import ActionTypes from '../ActionTypes'

const InitialState = [
  {
    listName: "Collection",
    bookmarks: []
  }
];

const BookmarkReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKMARK:
      let newBookmark = {
        id: action.payload.id,
        owner: {
          avatar_url: action.payload.owner.avatar_url
        },
        url: action.payload.url,
        html_url: action.payload.html_url,
        full_name: action.payload.full_name,
        description: action.payload.description,
        stargazers_count: action.payload.stargazers_count,
        open_issues_count: action.payload.open_issues_count,
        updated_at: action.payload.updated_at
      };
      let expandedBookmarkList = {
        listName: state[0].listName,
        bookmarks: [...state[0].bookmarks, newBookmark]
      };
      return [
        expandedBookmarkList,
        ...state.slice(1)
      ];
      break;
    case ActionTypes.MOVE_BOOKMARK:
      let changedMetaList = [...state];
      let dragID = action.payload.dragID;
      let dropIndex = action.payload.dropIndex;

      //remove Bookmark from old position
      let bm2move = {};
      let bookmarkList = {};
      for (let bli = 0; bli < changedMetaList.length; bli++) {
        bookmarkList = changedMetaList[bli];
        for(let bmi = 0; bmi < bookmarkList.bookmarks.length; bmi++){
          if (bookmarkList.bookmarks[bmi].id === dragID) {
            bm2move = bookmarkList.bookmarks[bmi];
            bookmarkList.bookmarks.splice(bmi, 1)
          }
        }
      }

      //move bookmark to new position
      let dropList = {};
      let dropListBookMarks = [];
      if(dropIndex.bm === "BLHeader"){
        dropListBookMarks = [...changedMetaList[dropIndex.bl].bookmarks, bm2move]
      } else {
        dropListBookMarks = [
          ...changedMetaList[dropIndex.bl].bookmarks.slice(0, dropIndex.bm),
          bm2move,
          ...changedMetaList[dropIndex.bl].bookmarks.slice(dropIndex.bm)
        ]
      }
      dropList = {
        listName: changedMetaList[dropIndex.bl].listName,
        bookmarks: dropListBookMarks
      }
      //update state with updated bookmark-list
      return [
        ...changedMetaList.slice(0, dropIndex.bl),
        dropList,
        ...changedMetaList.slice(dropIndex.bl + 1)
      ];
      break;
    case ActionTypes.DELETE_BOOKMARK:
      // TODO: add warnigs
      let bmId = action.payload.id;
      // get bookmark position
      let bmPosition = {bli: 0, bmi: 0}
      for (let bli = 0; bli < state.length; bli++) {
        let bookmarkList = state[bli];
        for(let bmi = 0; bmi < bookmarkList.bookmarks.length; bmi++){
          if (bookmarkList.bookmarks[bmi].id === bmId) {
            bmPosition = {bli: bli, bmi: bmi};
          }
        }
      }
      // "splice" bookmark
      let splicedBookmarkList ={
        listName: state[bmPosition.bli].listName,
        bookmarks: [
          ...state[bmPosition.bli].bookmarks.slice(0, bmPosition.bmi),
          ...state[bmPosition.bli].bookmarks.slice(bmPosition.bmi +1)
        ]
      };
      return [
        ...state.slice(0, bmPosition.bli),
        splicedBookmarkList,
        ...state.slice(bmPosition.bli +1),
      ];
      break;
    case ActionTypes.ADD_BOOKMARK_LIST:
      let newBookmarkList ={
        listName: action.payload.name,
        bookmarks: []
        };
        return [...state, newBookmarkList];
      break;
    case ActionTypes.DELETE_BOOKMARK_LIST:
      // TODO: add warnigs
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1)
      ];
      break;
    default:
      return state;
  }
}

export default BookmarkReducer;
