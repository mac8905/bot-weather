import { ReportProblemRounded } from "@mui/icons-material";
import { Typography, Stack } from "@mui/material";
import { ErrorCard } from "./ErrorDisplay.styles";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <ErrorCard>
      <Stack spacing={2} alignItems="center">
        <ReportProblemRounded color="error" sx={{ fontSize: 48 }} />
        <Typography variant="body1" color="error" textAlign="center">
          {message}
        </Typography>
      </Stack>
    </ErrorCard>
  );
};

export default ErrorDisplay;
