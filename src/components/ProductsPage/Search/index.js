import React, { useRef, useState, useEffect } from "react";
import styles from "./index.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { SEARCH_FILTER } from "../../../store/actions";
import { FilterSearch } from "../../Buttons";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);

  const searchFilters = useSelector((store) => store.filters.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchFilters.length) setSearchText(searchFilters.join(" "));
  }, []);

  const handleSearchInput = (e) => {
    e.preventDefault();
    if (!searchText && !searchFilters.length)
      return searchInputRef.current.focus();
    dispatch(SEARCH_FILTER(searchText || null));
  };

  return (
    <form className={styles["search__wrapper"]} onSubmit={handleSearchInput}>
      <div className={styles["search__input-wrapper"]}>
        <input
          type="text"
          ref={searchInputRef}
          name="search"
          id={styles["search-input"]}
          placeholder="Search for products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <FilterSearch />
    </form>
  );
};

export default Search;
