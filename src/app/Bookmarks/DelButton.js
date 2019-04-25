import React from 'react';
import styled, { css } from 'styled-components'

export default class DelButton extends React.Component {
  render(){
    return(
      <DB onClick={ () => this.props.deleteItem(this.props.id)} list={this.props.list ? 'list' : null}>
        <Icon dangerouslySetInnerHTML={{ __html: require('../../assets/close.svg') }} />
      </DB>
    );
  }
}

const DB = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  padding: 0px;
  background-color: Transparent;
  border: none;
  outline:none;
  ${props => props.list && css`
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  `}
`;

const Icon = styled.div`
  svg {
    path {
      fill: #999;
    }
  }
`
