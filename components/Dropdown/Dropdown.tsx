import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
}

const StyledDropdown = styled.select`
  appearance: none;
  background: #fff;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  padding: 5px 10px;
`;

const Dropdown: React.FC<Props> = ({ onChange, options }) => {
  return (
    <StyledDropdown onChange={onChange}>
      {options?.map((option) => (
        <option key={option} value={option}>
          #{option}
        </option>
      ))}
      {/* <option value="progress1">#progress1</option>
      <option value="progress2">#progress2</option>
      <option value="progress3">#progress3</option> */}
    </StyledDropdown>
  );
};

export default Dropdown;
