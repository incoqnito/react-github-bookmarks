import React from 'react'
import styled from 'styled-components'
import BookmarkList from '../BookmarkList/BookmarkList.js'
import BlAdder from './BlAdder'

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class MetaList extends React.Component {
  render(){
    return(
      <Wrapper>
        {this.props.bookmarkLists.map((bl, index) => (
          <BookmarkList
            key={index}
            index={index}
            bl={bl}
            index={index}
            moveBookmark={(dragIndex, hoverIndex) => this.props.moveBookmark(dragIndex, hoverIndex)}
            deleteBookmark={(id) => this.props.deleteBookmark(id)}
            deleteBookmarkList={(id) => this.props.deleteBookmarkList(id)}
          />
        ))}
        <BlAdder addBookmarkList={(name) => this.props.addBookmarkList(name)}/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding-top: 80px;
  padding-left: 80px;
`

export default DragDropContext(HTML5Backend)(MetaList)
