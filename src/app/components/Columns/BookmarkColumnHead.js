import React from 'react'
import styled from 'styled-components'

// Visualisation of columns head block
const BookmarkColumnHead = ({className, name, onClick}) => (
  <div className={className}>
    <button className='delete-column' onClick={onClick}>
      <svg viewBox='0 0 32 32' version='1.1' fill=''><g id='' fill=''><path d='M 8.71875 7.28125 L 7.28125 8.71875 L 14.5625 16 L 7.28125 23.28125 L 8.71875 24.71875 L 16 17.4375 L 23.28125 24.71875 L 24.71875 23.28125 L 17.4375 16 L 24.71875 8.71875 L 23.28125 7.28125 L 16 14.5625 Z ' fill='' /></g></svg>
    </button>
    {name}
  </div>
)

export default styled(BookmarkColumnHead)`
  position: ${props => props.sticky ? 'fixed' : 'relative'};
  top: ${props => props.sticky ? '0' : '0'};
  z-index: 1;
  width: 240px;
  height: 25px;
  background-color: white;
  box-shadow: ${props => props.sticky ? '1px 3px 5px 0px rgba(0, 0, 0, 0.5)' : '1px 1px 5px 0px rgba(0, 0, 0, 0.5)'};
  -moz-box-shadow: ${props => props.sticky ? '1px 3px 5px 0px rgba(0, 0, 0, 0.5)' : '1px 1px 5px 0px rgba(0, 0, 0, 0.5)'};
  -webkit-box-shadow: ${props => props.sticky ? '1px 3px 5px 0px rgba(0, 0, 0, 0.5)' : '1px 1px 5px 0px rgba(0, 0, 0, 0.5)'};
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  padding: 17px 0 14px 15px;
  margin-bottom: 1px;

  .delete-column {
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 4px;
  }

  .delete-column svg {
    width: 20px;
    height: 20px;
    padding: 0;
  }
`
