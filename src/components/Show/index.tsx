import { FC, ReactNode } from "react";

export interface ShowProps extends React.HTMLAttributes<HTMLDivElement> {
  when?: boolean;
  children?: ReactNode;
}
export const Show: FC<ShowProps> = ({
  when = true,
  style,
  children,
  ...elseProps
}) => (
  <div
    {...elseProps}
    style={{ ...style, display: when ? style?.display : "none" }}
  >
    {children}
  </div>
);
