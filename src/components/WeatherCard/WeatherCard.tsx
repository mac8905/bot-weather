import { Box, Stack, Typography } from "@mui/material";
import { WeatherData } from "../../services/weather";
import Icon from "../Icon";
import { StyledCard } from "./WeatherCard.styles";

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <StyledCard>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" component="h2">
          {data.location}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Icon code={data.icon} size={80} title={data.description} />
          <Typography variant="h3">{data.temp}°C</Typography>
        </Box>

        <Typography variant="body1">Humidity: {data.humidity}%</Typography>
      </Stack>
    </StyledCard>
  );
};

export default WeatherCard;
