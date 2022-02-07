import React, { useState } from 'react'

export function UseTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchShow, setSearchShow] = useState(false)
  const onTextChangeHandler = (val) => {
    setSearchQuery(val)
  };
  const cancelSearch = (val) => {
    setSearchQuery('')
  }
  const searchingFor = (searchQuery) => {
    return function (data) {
      return (
        data?.name.toLowerCase().includes(
          searchQuery.toLowerCase(),
        ) ||
        data?.email.toLowerCase().includes(
          searchQuery.toLowerCase(),
        )
        ||
        data?.phone.toLowerCase().includes(
          searchQuery.toLowerCase())
        ||
        !searchQuery
      );
    };
  };

  return [{ searchShow, setSearchShow, searchQuery, onTextChangeHandler, cancelSearch, searchingFor }]

}