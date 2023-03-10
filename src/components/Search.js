import React from "react";
import { useState } from "react";
//import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchDogs, searchFetchDogs } from "../redux/actions";
const Search = () => {
  const [search, setSearch] = useState("");
 

  const searchAnimal = (event) => {
      let en = event
    setSearch(en);
console.log('searchAnimal',en)
    let timeoutId;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {

      search.length !== 0
        ? dispatch(searchFetchDogs(search))
        : dispatch(fetchDogs());
    }, 1000)

  }

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="form py-3">
        <div className="form-container w-50 mx-auto">
          <input
            type="search"
            className="form-control mx-auto"
            placeholder="search"
            id="search"
            onChange={(event) => {
              searchAnimal(event.target.value)
            }}
            value={search}
            data-testid="search"
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
