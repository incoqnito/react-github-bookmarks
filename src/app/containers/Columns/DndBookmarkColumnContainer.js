import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// Cover all drag-and-drop elements by html5 backend
@DragDropContext(HTML5Backend)
export default class DndBookmarkColumnContainer extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
