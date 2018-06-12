import React from 'react'
import styled from 'styled-components'

import SearchItemsList from '../../components/Search/SearchItemsList'

// Visualisation of dropdown block
const DropDown = (props) => (
  <div className={props.className} ref={props.ddBox}>
    <SearchItemsList items={props.items} />
  </div>
)

export default styled(DropDown)`
  display: block;
  position: relative;
  left: 10%;
  top: 40px;
  background-color: #f9f9f9;
  width: 40%;
  min-width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2;
`
