"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const inputStyles = {
  width: 500,
  maxWidth: "100%",
  autoComplete: "off",
  mt: 5,
  mr: "auto",
  ml: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setSearch(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
    setSearch("");
  };

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <Box sx={inputStyles}>
          <TextField
            onChange={handleChange}
            value={search}
            fullWidth
            label="Search by movie title"
          />
          <Button type="submit">Search</Button>
        </Box>
      </form>
    </div>
  );
};

export default SearchBar;
