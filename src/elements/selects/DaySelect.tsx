import React from 'react';
import {CustomSelect, SelectPropsType} from "./CustomSelect";
import {selectRange} from "../../utils";

export const DaySelect = (props: SelectPropsType) => {
  return (
    <CustomSelect {...props} required>
      <option value="">Day</option>
      {
        selectRange(1, 31)
      }
    </CustomSelect>
  );
};