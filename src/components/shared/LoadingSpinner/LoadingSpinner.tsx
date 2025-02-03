import { SpinnerContainer, StyledSpinner } from "./LoadingSpinner.styles";

const LoadingSpinner = () => (
  <SpinnerContainer>
    <StyledSpinner size={60} thickness={4} />
  </SpinnerContainer>
);

export default LoadingSpinner;
