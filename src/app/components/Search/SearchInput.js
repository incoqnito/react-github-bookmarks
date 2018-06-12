import React from 'react'
import styled from 'styled-components'

// Visualisation of search input
const SearchInput = ({ value, onChange, className }) => (
  <div className={className}>
    <div>
      <svg viewBox='0 0 32 32' version='1.1' fill=''><g id='surface1' fill=''><path d='M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z ' fill='' /></g></svg>
      <input name='searchInput'
        type='text'
        placeholder='Search...'
        value={value}
        onChange={onChange} />
      <p className='logo'>Github Bookmarks</p>
    </div>
  </div>
)

export default styled(SearchInput)`
  .dropdown {
    display: block;
  }

  .logo {
    color: rgb(55, 55, 55);
    float: right;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin: 20px 5% 0 0;
  }

  div {
    position: absolute;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
    -webkit-box-shadow: 0px 8px 10px -7px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 8px 10px -7px rgba(0,0,0,0.5);
    box-shadow: 0px 8px 10px -7px rgba(0,0,0,0.5);
  }

  svg {
    fill: #9e9e9e;
    float: left;
    width: 30px;
    height: 30px;
    margin: 14px 0 0 10%;
    text-align: center;
  }

  input[type="text"] {
    color: rgb(73, 73, 73);
    border-radius: 5px;
    border: 3px solid transparent;
    width: 25%;
    height: 28px;
    margin: 15px 0 0 10px;
    font-size: 17px;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  input[type="text"]::placeholder {
    font-style: italic;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
`
