import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));
