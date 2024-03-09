import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CreateForm from "./CreateForm";

const CreateModal = ({ getBooks, handleOpen, handleClose, open, data }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        sx={{
          marginLeft: "auto",
          marginRight: "30px",
          "@media (max-width: 600px)": {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        New Book Add
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <CreateForm
            getBooks={getBooks}
            data={data}
            handleClose={handleClose}
          />
        </>
      </Modal>
    </div>
  );
};

export default CreateModal;
