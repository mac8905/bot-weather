import { Button, TextField } from "@mui/material";
import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter Location"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Get Weather</Button>
    </form>
  );
};

export default LocationSearch;
