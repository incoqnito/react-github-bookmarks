import React from 'react';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Adder.css'

export default class Adder extends React.Component {

  render() {
    return (
      <div className="AdderRoot">
        <Downshift onChange={(item) => this.handleSelect(item)}>
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
                      itemProps: getItemProps({ item: suggestion.full_name }),
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
      </div>
    );
  }

  handleSelect(item){
    this.props.addRepo(item);
    //clearSelection();
  }

  renderInput(inputProps){
    const { InputProps, ref, ...other } = inputProps;
    return (
      <TextField
        InputProps={{
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
    if (inputValue !== '') {
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
          item: suggestion.url,
          style: {
            backgroundColor: highlightedIndex === index
              ? 'lightgray'
              : 'white',
          },
        })}
      >
        <div className="suggestionMain">
          <div className="suggestionHeader">
            {suggestion.full_name}
          </div>
          <div className="suggestionDescription">
            {suggestion.description ? suggestion.description : null}
          </div>
          <div className="suggestionFooter">
            {suggestion.license
              ? this.renderLicense(suggestion.license)
              : null}
            {suggestion.updated_at
              ? this.renderUpdatedAt(suggestion.updated_at)
              : null}
            {suggestion.open_issues_count
              ? this.renderOpenIssuesCount(suggestion.open_issues_count)
              : null}
            {suggestion.stargazers_count
              ? this.renderStargazersCount(suggestion.stargazers_count)
              : null}
          </div>
        </div>
        {this.renderSuggestionIcon(suggestion)}
      </div>
    );
  }

  renderLicense(license){
    return <span>{license.name}</span>
  }

  renderUpdatedAt(updated_at){
    return <span>{'Updated ' + updated_at}</span>
  }

  renderOpenIssuesCount(open_issues_count){
    return <span>{open_issues_count + 'issues need help'}</span>
  }

  renderStargazersCount(stargazers_count){
    return <span>{'s. ' + stargazers_count}</span>
  }

  renderSuggestionIcon(suggestion){
    return null;
  }

}
