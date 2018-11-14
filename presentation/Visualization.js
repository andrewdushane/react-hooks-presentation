import React from "react";
import styled from "react-emotion";

import visualization from "../assets/hooks-visualization.gif";

const Image = props => <img {...props} />;

const Img = styled(Image)`
  max-height: 600px;
`;

const Visualization = () => (
  <Img src={visualization} alt="Visualization of Hooks refactor" />
);

export default Visualization;
