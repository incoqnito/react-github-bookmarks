import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchOnchange, searchFetchQuery } from '../../actions'
import SearchInput from '../../components/Search/SearchInput'

const mapStateToProps = state => {
  return { searchtext: state.search.searchtext }
}

@connect(mapStateToProps)
export default class ShowSearchInput extends Component {
  constructor (props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  // Handling changing of search input value
  handleOnChange (e) {
    const { dispatch } = this.props
    // if the value has more than 2 symbols
    if (e.target.value.length < 2) {
      dispatch(searchOnchange(e.target.value))
    } else {
      dispatch(searchOnchange(e.target.value))
      dispatch(searchFetchQuery(e.target.value))
    }
  }

  render () {
    return (
      <div>
        <SearchInput
          value={this.props.searchtext}
          onChange={this.handleOnChange} />
      </div>
    )
  }
}
