import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
}

const StyledTypography = styled.span`
  color: red;
`;

const Typography: React.FC<Props> = ({ children, className, styles }) => {
  return (
    <StyledTypography className={className} style={styles}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
