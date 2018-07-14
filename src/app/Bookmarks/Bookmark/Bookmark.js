import React from 'react';
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
var abbreviate = require('number-abbreviate')
import TimeAgo from 'react-timeago';
import DelButton from '../DelButton'

import'./Bookmark.css';

import flow from 'lodash/flow';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../../ItemTypes'

const bookmarkSource = {
  beginDrag(props) {
    return props.bm;
  },
  endDrag(props, monitor, component){
    if (!monitor.didDrop()) {
      return;
    }
    let DropResult = monitor.getDropResult();
    let dragID = DropResult.dragID;
    let dropIndex = DropResult.dropIndex;
    return props.handleDropBookmark(dragID, dropIndex);
  }
}

const bookmarkTarget = {
  drop(props, monitor, component){
    const dragID = monitor.getItem().id
    const dropIndex = {bl: props.blIndex, bm: props.bmIndex}
    return {
      dragID: dragID,
      dropIndex: dropIndex
    };
  }
}

function sourceCollect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

function targetCollect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
  };
}

const style = {
  position: 'relative',
  width: 264,
  height: 134,
  padding: '4px',
  paddingLeft: '70px',
  paddingRight: '15px',
  boxShadow: '1px 1px 3px 1px #dadbde',
  margin: '1px',
  borderTop: '1px solid #e5e5e5',
  cursor: 'move'
}

class Bookmark extends React.Component {
  render() {
    const { isDragging, connectDragSource, connectDropTarget, bm, hovered } = this.props;
    const opacity = isDragging ? 0 : 1;
    const backgroundColor = hovered ? '#f8f8f8' : '#fff';

    // return (
    //   <BookmarkWrapper
    //     style={{ opacity, backgroundColor }}
    //     innerRef={instance => connectDragSource(instance)}
    //   >
    //     <BookmarkLogo><Avatar src={this.props.bm.owner.avatar_url}/></BookmarkLogo>
    //     <DelButton deleteItem={ (id) => this.props.handleDeleteBookmark(id)} id={this.props.bm.id} />
    //     <BMHeader href={this.props.bm.html_url} target="_blank">
    //       {this.props.bm.full_name}
    //     </BMHeader>
    //     <BMDescription>{this.props.bm.description}</BMDescription>
    //     <BMFooter>
    //       <span>
    //         <Icon dangerouslySetInnerHTML={{ __html: require('../../../assets/star.svg') }} />
    //         {abbreviate(this.props.bm.stargazers_count, 2) + ' '}
    //       </span>
    //       <span>{this.props.bm.open_issues_count + ' issues needs help '}</span>
    //       <span>{'updated '}<TimeAgo date={this.props.bm.updated_at} /></span>
    //     </BMFooter>
    //   </BookmarkWrapper>
    // );

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className="Bookmark" style={{ ...style, opacity, backgroundColor }}>
            <BookmarkLogo><Avatar src={this.props.bm.owner.avatar_url}/></BookmarkLogo>
            <DelButton deleteItem={ (id) => this.props.handleDeleteBookmark(id)} id={this.props.bm.id} />
            <BMHeader href={this.props.bm.html_url} target="_blank">
              {this.props.bm.full_name}
            </BMHeader>
            <BMDescription>{this.props.bm.description}</BMDescription>
            <BMFooter>
              <span>
                <Icon dangerouslySetInnerHTML={{ __html: require('../../../assets/star.svg') }} />
                {abbreviate(this.props.bm.stargazers_count, 2) + ' '}
              </span>
              <span>{this.props.bm.open_issues_count + ' issues needs help '}</span>
              <span>{'updated '}<TimeAgo date={this.props.bm.updated_at} /></span>
            </BMFooter>
          </div>
        ),
      )
    );
  }
}

export default flow(
  DragSource(ItemTypes.BOOKMARK, bookmarkSource, sourceCollect),
  DropTarget(ItemTypes.BOOKMARK, bookmarkTarget, targetCollect)
)(Bookmark);

const BookmarkWrapper = styled.div`
  position: relative;
  width: 264;
  height: 134;

  padding: 4px;
  padding-left: 70px;
  padding-right: 15px;

  box-shadow: 1px 1px 3px 1px #dadbde;

  margin: 1px;
  border-top: 1px solid #e5e5e5;
  :last-of-type  {
    border-radius: 0 0 10px 10px;
  }
`

const BookmarkLogo = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
`

const BMHeader = styled.a`
  display: block;
  color: #2b7be8;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.7em;
  padding-top: 16px;
`

const BMDescription = styled.div`
  display: block;
  font-size: 0.5em;
  letter-spacing: -0.1px;
  word-spacing: -0.1px;
  padding-top: 5px;
`

const BMFooter = styled.div`
  position: absolute;
  font-size: 0.5em;
  letter-spacing: -0.5px;
  word-spacing: -0.1px;
  bottom: 10px;
  * {margin-right: 3px;}
`

const Icon = styled.span`
  margin-right: 10.75px;
  svg {
    height: 10.75px;
    position: absolute;
    bottom: 0px;
    path {
      fill: #999;
    }​
  }
`
