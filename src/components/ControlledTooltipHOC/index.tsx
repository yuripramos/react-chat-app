import React from "react";
import { bool } from "prop-types";

type Props = {
  visible: boolean;
  renderTooltip: () => void;
};
export const withControlledTooltip = (WrappedComponent: any) => {
  const WithControlledTooltip = ({
    visible,
    renderTooltip,
    ...props
  }: Props) => (
    <div style={{ position: "relative" }}>
      <WrappedComponent {...props} />
      {visible && renderTooltip()}
    </div>
  );

  WithControlledTooltip.propTypes = {
    visible: bool.isRequired
  };

  return WithControlledTooltip;
};
