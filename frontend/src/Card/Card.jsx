import * as React from "react";
import CardItem from "./CardItem";
import { Stack } from "@mui/material";

export default function MediaCard({ books, handleOpen, setdata, setBooks }) {
  return (
    <Stack>
      <CardItem
        books={books}
        setBooks={setBooks}
        setdata={setdata}
        handleOpen={handleOpen}
      />
    </Stack>
  );
}
