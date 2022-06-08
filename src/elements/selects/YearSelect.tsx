import React from 'react';
import {CustomSelect, SelectPropsType} from "./CustomSelect";
import {selectRange} from "../../utils";

export const YearSelect = (props: SelectPropsType) => {
  return (
    <CustomSelect {...props} required>
      <option value="">Year</option>
      {
        selectRange(1900, new Date().getFullYear(), true)
      }
    </CustomSelect>
  );
};
