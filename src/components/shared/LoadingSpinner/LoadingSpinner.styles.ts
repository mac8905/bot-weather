import { keyframes } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  animation: "fadeIn 0.3s ease-in",
  minWidth: "300px",
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(-10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
}));

export const StyledSpinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  animation: `${spin} 1.2s linear infinite`,
  "& circle": {
    strokeLinecap: "round",
  },
}));
