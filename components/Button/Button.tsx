import { MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #7cafff;
  border: none;
  border-radius: 5px;
  color: #fff;
  min-width: 50px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #c67bff;
  }
`;

interface Props {
  dataValue?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ dataValue, onClick, children }) => {
  return (
    <StyledButton onClick={onClick} data-value={dataValue}>
      {children}
    </StyledButton>
  );
};

export default Button;
