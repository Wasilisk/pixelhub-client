import React, {ReactNode} from 'react';
import {CustomSelect, SelectPropsType} from "./CustomSelect";

const monthsName = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

export const MonthSelect = (props: SelectPropsType) => {
  const selectOptions = monthsName.map((monthName: string, index: number): ReactNode => {
    return <option key={index} value={index}>{monthName}</option>
  })

  return (
    <CustomSelect {...props} required>
      <option value="">Month</option>
      {selectOptions}
    </CustomSelect>
  );
};
