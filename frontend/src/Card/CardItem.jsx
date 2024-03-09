import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toastErrorNotify } from "../service/globalStyles";

const CardItem = ({ books, setBooks, handleOpen, setdata }) => {
  const handleClick = (item) => {
    handleOpen();
    setdata(item);
  };

  const handleDelete = async (id, item) => {
    try {
      await fetch(`http://localhost:8002/${id}`, {
        method: "DELETE",
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      toastErrorNotify(`${item.title} Book Deleted`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="30px"
      margin="30px auto"
    >
      {books.map((item) => (
        <Card sx={{ width: 300 }} key={item.id}>
          <CardMedia
            sx={{ height: 200 }}
            image={item.image}
            title={item.title}
          />
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              Author:{item.author}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              ISBN:{item.ISBN}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              Genre:{item.genre}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              Publication Year:{item.publicationYear}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <CreateIcon
              onClick={() => handleClick(item)}
              sx={{ color: "#ffcc00 " }}
            />
            <DeleteOutlineIcon
              onClick={() => handleDelete(item.id, item)}
              sx={{ color: "#cc3300" }}
            />
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default CardItem;
