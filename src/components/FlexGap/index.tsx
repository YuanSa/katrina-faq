import { FC } from "react";

export interface FlexGapProps {
  fraction?: number;
}
export const FlexGap: FC<FlexGapProps> = ({ fraction = 1 }) => (
  <div style={{ flexGrow: fraction, flexShrink: fraction, flexBasis: 0 }} />
);
