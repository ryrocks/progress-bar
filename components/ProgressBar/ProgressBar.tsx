import { useMemo } from "react";
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
  border: 1px solid red;
  padding: 10px;
`;

const ProgressBar: React.FC<Props> = ({
  value = 50,
  min,
  max,
  className,
  id,
}) => {
  //   return <progress max="100" value={value}></progress>;

  const progressValue = useMemo(() => {
    return value < 0 ? 0 : value > 100 ? 100 : value;
  }, [value]);

  return (
    <StyledContainer id={id}>
      <Typography
        styles={{
          color: "green",
        }}
      >
        {progressValue}
      </Typography>
    </StyledContainer>
  );
};

export default ProgressBar;
