import { Header, SearchForm,SearchFormInput,ButtonSpan, SearchFormButton } from "./Searchbar.styled"
import { FaSearch  } from 'react-icons/fa';
import React, { Component } from "react";
import PropTypes from "prop-types"
 

export default class SearchBar extends Component {
    state = {
      inputValue: '',
    };
  
    handleInputChange = event => {
      this.setState({ 
        inputValue: event.currentTarget.value.toLowerCase() 
      });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      if (this.state.inputValue.trim() === '') {
        alert('Write at least something please')
        return;
      }
      this.props.onSubmit(this.state.inputValue)
      this.setState({ 
        inputValue: '' 
      });
    };
  
    render() {
      return (
        <Header>
       
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormInput
                      type="text"
                      autocomplete="off"
                      autoFocus
                      value={this.state.inputValue}
                      onChange={this.handleInputChange}
                      placeholder="Search images and photos"
                    />
                   
                    <SearchFormButton type="submit">
                    <FaSearch size="20px" />
                        <ButtonSpan></ButtonSpan>
                    </SearchFormButton>
                </SearchForm>
         
        </Header>
      );
    }
  }


  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  