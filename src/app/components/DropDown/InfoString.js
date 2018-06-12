import React from 'react'
import styled from 'styled-components'

// Visualisation of info string for dropdown search blocks
const InfoString = ({ updatedAt, stars, issues, license, className }) => (
  <div className={className}>
    <div>{license}</div>
    <div>{updatedAt}</div>
    <div>{issues}</div>
    <div className='star'><svg viewBox='0 0 32 32' version='1.1' fill=''><g id='surface1' fill=''><path className='' d='M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z ' fill='' /></g></svg></div>
    <div>{stars}</div>
  </div>
)

export default styled(InfoString)`
  :before {
    content: "";
    display: inline-block;
    vertical-align: middle;
  }

  div {
    color: rgb(158, 158, 158);
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px 0 0;
  }

  .star {
    padding-right: 3px;
  }

  svg {
    width: 10px;
    height: 10px;
    fill: #9e9e9e;
  }
`
