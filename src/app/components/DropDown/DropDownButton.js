import React from 'react'
import styled from 'styled-components'

// Visualisation of dropdown add button
const DropDownButton = ({ className, added, onClick }) => (
  <button className={className} onClick={onClick}>
    {
      (added)
        ? <svg className='checked' fill='' viewBox='-3 -3 33 33'><path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z' /></svg>
        : <svg className='add' viewBox='0 0 35 35' version='1.1' fill=''><g id='' fill=''><path d='M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 15 L 10 15 L 10 17 L 15 17 L 15 22 L 17 22 L 17 17 L 22 17 L 22 15 L 17 15 L 17 10 Z ' fill='' /></g></svg>
    }
  </button>
)

export default styled(DropDownButton)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 6%;

  svg {
    width: 35px;
    height: 35px;
    padding: 0;
  }

  .checked {
    fill: #31cc73;
  }

  .add {
    fill: #999999;
  }
`
