import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const ErrorCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `2px solid ${theme.palette.error.main}20`, // 20% opacity
  borderRadius: "16px",
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  transition: "all 0.2s",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: `${theme.palette.error.main}30`,
  },
}));
