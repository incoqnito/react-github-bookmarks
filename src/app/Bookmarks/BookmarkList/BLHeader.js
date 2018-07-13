import React from 'react';
import styled from 'styled-components'
import DelButton from '../DelButton'

import ItemTypes from '../../ItemTypes'
import { DropTarget } from 'react-dnd';

const spec = {
  drop(props, monitor, component){
    const dragID = monitor.getItem().id
    const dropIndex = {bl: props.index, bm: 'BLHeader'}
    return {
      dragID: dragID,
      dropIndex: dropIndex
    };
  }
}

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
  };
}

const style = {
  height: '68px'
}

class BLHeader extends React.Component {
  render(){
    const { connectDropTarget, hovered, empty } = this.props;
    const backgroundColor = hovered ? '#f8f8f8' : '#fff';
    const borderRadius = empty ? '5px' : '5px 5px 0 0';
    return connectDropTarget(
      <div className="BLHeader" style={{ ...style, background: backgroundColor, borderRadius: borderRadius}}>
        <BLTitle>{this.props.listName}</BLTitle>
        <DelButton deleteItem={ (index) => this.props.deleteBL(index)} id={this.props.index} list />
      </div>
    )
  }
}

export default DropTarget(ItemTypes.BOOKMARK, spec, collect)(BLHeader);

const BLTitle = styled.h3`
  margin: 0px;
  line-height: 68px;
  padding-left: 17px;
`
