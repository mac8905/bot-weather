import { useState } from "react";
import { Stack } from "@mui/material";
import { SearchButton, SearchCard, SearchInput } from "./LocationSearch.styles";

interface LocationSearchProps {
  onSearch: (location: string) => void;
}

const LocationSearch = ({ onSearch }: LocationSearchProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <SearchCard>
      <Stack component="form" onSubmit={handleSubmit} spacing={2}>
        <SearchInput
          fullWidth
          label="Enter Location"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputLabelProps={{ style: { fontWeight: 500 } }}
        />
        <SearchButton
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          disabled={!input.trim()}
        >
          Get Weather
        </SearchButton>
      </Stack>
    </SearchCard>
  );
};

export default LocationSearch;
