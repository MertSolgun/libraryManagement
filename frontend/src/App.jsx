import "./App.css";
import { Typography } from "@mui/material";
import Card from "./Card/Card";
import CreateModal from "./CreateModal/CreateModal";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero1 from "../public/hero-shape-1.svg";
import Hero2 from "../public/hero-shape-2.svg";
import { ToastContainer } from "react-toastify";

function App() {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [data, setdata] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setdata(null);
  };

  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8002/books");
      const { rows } = response?.data.result;
      setBooks(rows);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, [data]);

  return (
    <>
      <div className="mainHeader">
        <div className="header">
          <img src={Hero1} alt="hero1" className="hero1" />
          <img src={Hero2} alt="hero2" className="hero2" />
        </div>

        <Typography
          variant="h2"
          component="h2"
          sx={{ textAlign: "center", color: "white", fontFamily: "Ojuju" }}
        >
          Book Store
        </Typography>
        <ToastContainer />

        <CreateModal
          data={data}
          open={open}
          handleOpen={handleOpen}
          getBooks={getBooks}
          handleClose={handleClose}
        />
        <Card
          setdata={setdata}
          books={books}
          setBooks={setBooks}
          handleOpen={handleOpen}
        />
      </div>
    </>
  );
}

export default App;
