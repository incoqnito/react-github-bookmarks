import React from 'react'
import styled from 'styled-components'

// Visualisation of add column block
const BookmarkAddColumn = ({ className, value, onChange, onClick, onKeyPress }) => (
  <div className={className}>
    <input name='addColumn'
      type='text'
      placeholder='Enter Name'
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress} />
    <button onClick={onClick}>
      <svg viewBox='0 0 35 35' version='1.1' fill=''><g id='' fill=''><path d='M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 15 L 10 15 L 10 17 L 15 17 L 15 22 L 17 22 L 17 17 L 22 17 L 22 15 L 17 15 L 17 10 Z ' fill='' /></g></svg>
    </button>
  </div>
)

export default styled(BookmarkAddColumn)`
  position: relative;
  display: inline-block;
  width: 196px;
  height: 50px;
  background-color: rgb(245, 247, 250);
  border: 2px dashed rgb(153, 153, 153);
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 17px;
  margin: 7px 15px;

  input[type="text"] {
    color: rgb(73, 73, 73);
    border-radius: 5px;
    border: 1px solid transparent;
    width: 70%;
    height: 27px;
    font-size: 17px;
    background-color: rgb(245, 247, 250);
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin: 12px 0px 12px 15px;
  }

  input[type="text"]::placeholder {
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 6%;
  }
  
  button svg {
    fill: #999999;
    width: 30px;
    height: 30px;
    padding: 0;
  }

`
