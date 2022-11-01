import React from "react";

import { ButtonContainer } from "./styles";

const Button = ({ title, variant = "primary", onclick }) => {
  return (
  <ButtonContainer variant={variant} onclick={onclick}>
      {title}
  </ButtonContainer>
  )
}

export {Button};
