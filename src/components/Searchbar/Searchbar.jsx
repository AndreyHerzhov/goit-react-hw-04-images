import { Header, SearchForm,SearchFormInput,ButtonSpan, SearchFormButton } from "./Searchbar.styled"
import { FaSearch  } from 'react-icons/fa';
import React, { useState } from "react";
import PropTypes from "prop-types"

export default function SearchBar({onSubmit}) {
  const [input, setInput] = useState('')

  const handleInputChange = event => {
    setInput(event.currentTarget.value.toLowerCase())
    };

    const handleSubmit = event => {
      event.preventDefault();
      if (input.trim() === '') {
        alert('Write at least something please')
        return;
      }
      onSubmit(input)
      setInput('')
    };
  
  return (
    <Header>
   
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormInput
                  type="text"
                  autocomplete="off"
                  autoFocus
                  value={input}
                  onChange={handleInputChange}
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
 
 


  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  