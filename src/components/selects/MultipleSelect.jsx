import React from "react";
import Select from "react-select";
import { customStyles } from "./styles";
export const MultipleSelect = ({
  className,
  switchToggle,
  exclusionItems,
  onChange,
  industries
}) => {
  return (
    <div className={className}>
      <div className="text-small text-muted margin-small-bottom">
        Add exclusions if any
      </div>
      {
        <Select
          isClearable={false}
          isDisabled={switchToggle}
          placeholder="Search industry"
          isMulti
          value={exclusionItems}
          onChange={(value, action) => onChange(value, action)}
          styles={customStyles}
          name="colors"
          options={industries}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      }
    </div>
  );
};
