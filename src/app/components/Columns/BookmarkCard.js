import React from 'react'
import styled from 'styled-components'

// Visualisation of the bookmark card
const BookmarkCard = ({ className,
  onClick,
  imgUrl,
  htmlUrl,
  fullName,
  description,
  updatedAt,
  stars,
  issues }) => (
  <div className={className}>
    <button className='delete-bookmark' onClick={onClick}>
      <svg viewBox='0 0 32 32' version='1.1' fill=''><g id='' fill=''><path d='M 8.71875 7.28125 L 7.28125 8.71875 L 14.5625 16 L 7.28125 23.28125 L 8.71875 24.71875 L 16 17.4375 L 23.28125 24.71875 L 24.71875 23.28125 L 17.4375 16 L 24.71875 8.71875 L 23.28125 7.28125 L 16 14.5625 Z ' fill='' /></g></svg>
    </button>
    <div className='card-image'>
      <img src={imgUrl} alt={fullName} />
    </div>
    <div className='card-info'>
      <p><a href={htmlUrl}>{fullName}</a></p>
      <div className='card-description'>
        <p>{description}</p>
      </div>
      <div className='card-info-string'>
        <div className='star'><svg viewBox='0 0 32 32' version='1.1' fill=''><g id='surface1' fill=''><path className='' d='M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z ' fill='' /></g></svg></div>
        <div>{stars}</div>
        <div>{issues}</div>
        <div>{updatedAt}</div>
      </div>
    </div>
  </div>
)

export default styled(BookmarkCard)`
  display: ${props => props.dragging ? '0.5' : '1'};
  opacity: ${props => props.dragging ? '0' : '1'};
  position: relative;
  width: 255px;
  min-height: 110px;
  background-color: white;
  box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.5);
  -webkit-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.5);
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  margin-bottom: 1px;
  cursor: move;

  .delete-bookmark {
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 4px;
  }

  .delete-bookmark svg {
    width: 15px;
    height: 15px;
    padding: 0;
  }

  .card-image {
    position: relative;
    display: inline-block;
    height: auto;
    width: 20%;
    vertical-align: top;
  }

  .card-image img {
    position: absolute;
    top: 20px;
    left: 5px;
    width: 80%;
    border-radius: 50%;
  }

  .card-info {
    display: inline-block;
    height: auto;
    width: 80%;
    line-height: 10px;
  }
  
  .card-info p {
    margin: 15px 15px 0 0;
  }

  .card-info a {
    color: rgb(43, 123, 232);
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 800;
    white-space: pre-line;
    word-wrap: break-word;
  }
  
  .card-description {
    min-height: 40px;
  }

  .card-description p {
    color: rgb(158, 158, 158);
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    white-space: pre-line;
    word-wrap: break-word;
  }  

  .card-info-string {
    margin: 10px 15px 5px 0;
  }

  .card-info-string::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  .card-info-string div {
    color: rgb(158, 158, 158);
    font-family: 'Open Sans', sans-serif;
    font-size: 7px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 7px;
  }

  .card-info-string .star {
    padding-right: 1px;
    padding-bottom: 3px;
  }

  .card-info-string svg {
    padding-top: 1px;
    width: 10px;
    height: 10px;
    fill: #9e9e9e;
  }
`
