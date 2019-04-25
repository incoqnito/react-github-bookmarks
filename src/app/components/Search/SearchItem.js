import React from 'react'
import styled from 'styled-components'

import DropDownInfoString from '../../containers/DropDown/DropDownInfoString'
import ShowDropDownButton from '../../containers/DropDown/ShowDropDownButton'

// Visualisation of the search item block
const SearchItem = ({ id,
  full_name,
  html_url,
  description,
  updated_at,
  stargazers_count,
  open_issues,
  license,
  className }) => (
  <li className={className}>
    <div className='item-box'>
      <a href={html_url}>{full_name}</a>

      <p className='description'>{description}</p>
      <DropDownInfoString updatedAt={updated_at}
        stars={stargazers_count}
        issues={open_issues}
        license={license} />
      <ShowDropDownButton itemId={id} />
    </div>
  </li>
)

export default styled(SearchItem)`
  list-style-type: none;
  
  .item-box {
    position: relative;
    padding: 15px 0px 5px 35px;
    border-bottom: 3px solid rgb(230, 230, 230);
  }

  .description {
    width: 80%;
    padding: 0 0 15px 0;
    font-size: 12px;
  }

  a {
    color: rgb(43, 123, 232);
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }

  p, .description {
    color: rgb(158, 158, 158);
    font-family: 'Open Sans', sans-serif;
  }
`
