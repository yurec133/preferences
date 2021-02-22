import React from "react";
import Select from "react-select";
import { List } from "../list";
import { customStyles } from "./styles";
export const SingleSelect = ({
  className,
  switchToggle,
  favoriteItems,
  setValueFavorite,
  industries
}) => {
  return (
    <div className={className}>
      <div className="text-small text-muted margin-small-bottom">
        Add industries
      </div>
      <Select
        value
        isSearchable={true}
        isDisabled={switchToggle}
        placeholder="Search industry"
        styles={customStyles}
        options={industries}
        onChange={setValueFavorite}
      />
      {!!favoriteItems.length && (
        <List switchToggle={switchToggle} items={favoriteItems}></List>
      )}
    </div>
  );
};
