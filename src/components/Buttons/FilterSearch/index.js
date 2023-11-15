import React from "react";
import { ICON } from "../../../assets";

const FilterSearch = () => {
  return (
    <button className="btn__search" type="submit">
      <img src={ICON.Search} alt="Search" className="search__btn--icon" />
    </button>
  );
};

export default FilterSearch;
