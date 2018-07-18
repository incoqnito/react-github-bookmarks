import React from 'react'
import styled from 'styled-components'

export default class BlAdder extends React.Component {
  render(){
    return(
      <BLAdder onSubmit={(e) => this.handleSubmit(e)} >
        <BlAdderInput placeholder={'Enter Name'} />
        <BlAdderButton type="submit">
          <Icon dangerouslySetInnerHTML={{ __html: require('../../../assets/plus.svg') }} />
        </BlAdderButton>
      </BLAdder>
    );
  }

  handleSubmit(e) {
    let name = e.target[0].value;
    e.target[0].value = '';
    this.props.addBookmarkList(name);
  }

}

const BLAdder = styled.form`
  border: 2px dashed #999;
  border-radius: 5px;
  height: 68px;
  line-height: 68px;
  width: 266px;
  position: relative;
  margin-right: 24px;
  float: left;
`

const BlAdderInput = styled.input`
  font-size: 1.1em;
  margin-top: 20px;
  margin-left: 10px;
  border: 1px;
  background-color: rgba(245, 247, 250, 0.5);
  outline:none;
`

const BlAdderButton = styled.button`
  position: absolute;
  top: 22px;
  right: 15px;
  width: 20px;
  height: 20px;
  padding: 0px;
  background-color: Transparent;
  border: none;
  outline:none;
`
const Icon = styled.div`
  svg {
    path {
      fill: #999;
    }
  }
`
