import React from 'react'
import styled from 'styled-components'
export default class Home extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <Message>
          Happy Coding!
          <Icon dangerouslySetInnerHTML={{ __html: require('../../../../assets/cool.svg') }} />
        </Message>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  font-size: 62px;
`

const Icon = styled.div`

`
