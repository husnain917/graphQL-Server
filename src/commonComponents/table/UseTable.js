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
        (data?.name || data?.courseName || data?.studentName || data?.Title || data?.city || data?.eventName).toLowerCase().includes(
          searchQuery.toLowerCase(),
        )

      );
    };
  };

  return [{ searchShow, setSearchShow, searchQuery, onTextChangeHandler, cancelSearch, searchingFor }]

}