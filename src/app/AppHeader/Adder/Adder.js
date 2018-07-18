import React from 'react';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Adder.css'
import styled from 'styled-components'
import TimeAgo from 'react-timeago';
var abbreviate = require('number-abbreviate');

export default class Adder extends React.Component {
  render() {
    return (
      <AdderRoot>
        <SearchIcon dangerouslySetInnerHTML={{ __html: require('../../../assets/search.svg') }} />
        <Downshift onChange={(item) => this.handleSelect(item)} itemToString={() => {return '';}}>
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
            clearSelection
          }) => (
            <div className="AdderSubContainer">
              {this.renderInput({
                fullWidth: true,
                InputProps: getInputProps({
                  placeholder: 'Search...',
                  id: 'AdderInput',
                }),
              })}
              {isOpen ? (
                <Paper className="SuggestionSelector" square>
                  {this.getSuggestions(inputValue).map((suggestion, index) =>
                    this.renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion }),
                      getItemProps,
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>
      </AdderRoot>
    );
  }

  handleSelect(Bookmark){
    if (Bookmark.saved) {
      this.props.showMessage('This Repo is already bookmarked.');
    } else {
      this.props.addRepo(Bookmark.url);
    }
  }

  renderInput(inputProps){
    const { InputProps, ref, ...other } = inputProps;
    return (
      <TextField
        InputProps={{
          disableUnderline: true,
          inputRef: ref,
          classes: {
            root: "AdderInputRoot",
          },
          ...InputProps,
        }}
        {...other}
      />
    );
  }

  getSuggestions(inputValue) {
    if (inputValue !== '' && inputValue !== this.props.lastQuery) {
      this.props.searchRepos(inputValue);
    }
    return this.props.suggestions;
  }

  renderSuggestion({ suggestion, index, itemProps, getItemProps, highlightedIndex, selectedItem }) {
    return (
      <div
        {...getItemProps({
          key: suggestion.full_name,
          index,
          item: suggestion,
          style: {
            backgroundColor: highlightedIndex === index
              ? 'lightgray'
              : 'white',
          },
        })}
      >
        <Suggestion>
          <Header>
            {suggestion.full_name}
          </Header>
          <Description>
            {suggestion.description ? suggestion.description : null}
          </Description>
          <Footer>
            {suggestion.license
              ? <span>{suggestion.license.name}</span>
              : null}
            <span>{'Updated '}<TimeAgo date={suggestion.updated_at} /></span>
            <span>{suggestion.open_issues_count + ' issues need help '}</span>
            <span>
              <StarIcon dangerouslySetInnerHTML={{ __html: require('../../../assets/star.svg') }} />
              {abbreviate(suggestion.stargazers_count, 2) + ' '}
            </span>
          </Footer>
          {suggestion.saved
            ? <SavedIcon dangerouslySetInnerHTML={{ __html: require('../../../assets/check.svg') }} />
            : <AddIcon dangerouslySetInnerHTML={{ __html: require('../../../assets/plus.svg') }} />}
        </Suggestion>
      </div>
    );
  }
}

const AdderRoot = styled.div`
  margin-left: 56px;
  flex: 3 0 auto;
  max-width: 800px;
`

const SearchIcon = styled.span`
  svg {
    position: absolute;
    margin-right: 200px;
    height: 32px;
    path {
      fill: #999;
    }
  }
`

const Suggestion = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 16px;
  padding-left: 60px;
  height: 130px;
  border-bottom: 1px solid #ccc;
  overflow-x: hidden;
`

const Header = styled.div`
  font-size: 0.9em;
  letter-spacing: 0.5px;
  color: #2b7be8;
  font-weight: bold;
`

const Description = styled.div`
  padding-top 5px;
  font-size: 0.8em;
`

const Footer = styled.div`
  font-size: 0.65em;
  position: absolute;
  bottom: 10px;
  span {
    margin-right: 16px;
  }
`

const StarIcon = styled.span`
  margin-right: 0px !important;
  svg {
    height: 9px;
    path {
      fill: #999;
    }​
  }
`

const SavedIcon = styled.span`
  position absolute;
  top: 55px;
  right: 38px;
  svg {
    height: 20px;
    width: 20px;
  }
`

const AddIcon = styled.span`
  position absolute;
  top: 55px;
  right: 38px;
  svg {
    height: 20px;
    width: 20px;
    path {
      fill: #999;
    }​
  }
`
