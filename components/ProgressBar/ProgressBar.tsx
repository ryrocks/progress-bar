import styled from "styled-components";

import { Typography } from "../Typography";

interface Props {
  value?: number;
  min?: number;
  max?: number;
  className?: string;
  id?: string;
}

const StyledContainer = styled.div`
  padding: 6px 10px;
  position: relative;
`;

const StyledProgress = styled.progress<{ value: number }>`
  width: 100%;
  height: 30px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 20px;
    height: 100%;
  }

  &::-webkit-progress-value {
    border-radius: 20px;
    background: ${(props) =>
      props?.value <= 100
        ? "linear-gradient(90deg, #7cafff -2.21%, #c67bff 89.35%);"
        : `red;`};

    transition: width 0.5s;
  }
`;

const StyledTypography = styled(Typography)`
  position: absolute;
  display: inline-block;
  color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProgressBar: React.FC<Props> = ({
  value = 50,
  min,
  max = 100,
  className = "",
  id,
}) => {
  return (
    <StyledContainer id={id} className={className}>
      <StyledTypography>{value}%</StyledTypography>
      <StyledProgress max={max} value={value}></StyledProgress>
    </StyledContainer>
  );
};

export default ProgressBar;
