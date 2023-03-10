import React from "react";
import { useState } from "react";
import { useAppDispatch } from '../hooks'
import { fetchDogs, searchFetchDogs } from "../redux/actions";
const Search = () => {
  const [search, setSearch] = useState("");

  const searchAnimal = (event) => {
    setSearch(event);
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
            data-testid="searchAnimal"
          />
          <i className="fas fa-search"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
