import { Button, Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  borderRadius: "12px",
  padding: theme.spacing(1.5, 3),
  fontWeight: 600,
  transition: "all 0.2s",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));
