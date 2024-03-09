import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import { style, toastSuccessNotify } from "../service/globalStyles";
import { Form, Formik } from "formik";
import { object, string, number } from "yup";

const publicationYear = [];
const currentYear = new Date().getFullYear();
for (let year = 1950; year <= currentYear; year++) {
  publicationYear.push(year);
}

const CreateForm = ({ getBooks, data, handleClose }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let url = "http://localhost:8002/addbook";
      if (values.id) {
        url = `http://localhost:8002/${values.id}`;
      }
      const response = await fetch(url, {
        method: values.id ? "PUT" : "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toastSuccessNotify(
        `${values.id ? "Book edit successfully!" : "Book create successfully!"}`
      );
      handleClose();
      getBooks();
    } catch (error) {
      toastErrorNotify("An error occurred while creating the book");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const postSchema = object({
    title: string().required("Book name is required"),
    author: string().required("Author name is required"),
    ISBN: string().required("ISBN is required"),
    publicationYear: number().required("Publication year is required"),
    genre: string().required("Genre is required"),
    image: string().required("Image is required"),
  });

  return (
    <div>
      <Box sx={style}>
        <Formik
          initialValues={{
            ...data,
          }}
          validationSchema={postSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            handleSubmit(values, { setSubmitting });
            setSubmitting(false);
          }}
        >
          {({ handleChange, values, errors, touched, handleBlur }) => (
            <Form>
              <FormControl sx={{ width: "100%", gap: "10px" }}>
                <TextField
                  name="title"
                  label={"Book Name"}
                  id="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  error={touched.title && Boolean(errors.title)}
                  helperText={errors.title}
                />
                <TextField
                  name="author"
                  label={"Author Name"}
                  id="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                  error={touched.author && Boolean(errors.author)}
                  helperText={errors.author}
                />
                <TextField
                  name="ISBN"
                  label={"ISBN"}
                  onChange={handleChange}
                  error={touched.ISBN && Boolean(errors.ISBN)}
                  onBlur={handleBlur}
                  id="ISBN"
                  value={values.ISBN}
                  helperText={errors.ISBN}
                />
                <TextField
                  name="genre"
                  label={"Genre"}
                  id="genre"
                  onChange={handleChange}
                  value={values.genre}
                  onBlur={handleBlur}
                  error={touched.genre && Boolean(errors.genre)}
                  helperText={errors.genre}
                />
                <TextField
                  name="publicationYear"
                  id="filled-select-currency"
                  onChange={handleChange}
                  select
                  label="Select"
                  helperText={errors.publicationYear}
                  onBlur={handleBlur}
                  value={values.publicationYear}
                  error={
                    touched.publicationYear && Boolean(errors.publicationYear)
                  }
                >
                  {publicationYear.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  name="image"
                  label={"Image"}
                  id="image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.image && Boolean(errors.image)}
                  value={values.image}
                  helperText={errors.image}
                />
                <Button type="submit" variant="contained">
                  Save book
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default CreateForm;
