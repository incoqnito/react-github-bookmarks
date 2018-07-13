import React from 'react';
import styled from 'styled-components'
import Bookmark from '../Bookmark/Bookmark'
import BLHeader from './BLHeader'

export default class BookmarkList extends React.Component {
  render() {
    return (
      <BL>
        <BLHeader
          listName={this.props.bl.listName}
          index={this.props.index}
          deleteBL={ (index) => this.props.deleteBookmarkList(index)}
          empty={!this.props.bl.bookmarks.length > 0}
        />
        <BLDropZone>
          {this.props.bl.bookmarks.map((bm, index) => (
            <Bookmark
              key={index}
              bm={bm}
              bmIndex={index}
              blIndex={this.props.index}
              listIndex={this.props.index}
              listName={this.props.bl.listName}
              handleDropBookmark={(dragID, dropIndex) => this.props.moveBookmark(dragID, dropIndex)}
              handleDeleteBookmark={(id) => this.props.deleteBookmark(id)}
            />
          ))}
        </BLDropZone>
      </BL>
    );
  }
}

const BL = styled.div`
  position: relative;
  background-color: #eeeeee;
  width: 266px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px #dadbde;
  margin-right: 24px;
  float: left;

`

const BLDropZone = styled.div`

`
