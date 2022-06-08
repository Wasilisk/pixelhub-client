import React, {ReactNode} from "react";

export const selectRange = (start: number, end: number, reverse: boolean = false): ReactNode => {
  const length = end - start + 1;
  const selectRangeValues = Array.from({length}, (_, i) => {
    return (
      <option key={i} value={start + i}>{start + i}</option>
    )
  });

  return  reverse ? selectRangeValues.reverse() : selectRangeValues;
}