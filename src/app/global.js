// @flow
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
  }

  form {
    margin: 0;
  }

  #modal-root {
    position: relative;
    z-index: 999;
  }
`
