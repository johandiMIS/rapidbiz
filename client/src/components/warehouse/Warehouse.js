import React, { useState } from "react";
import MenuNavbar from "../layout/MenuNavbar";
import WarehouseList from "./WarehouseList";
import DrawerLeft from "../layout/DrawerLeft";
import { Avatar, Button, Modal, Box } from "@mui/material";
import add_ring from "../images/add_ring_fill.png";
import { Field, Formik, Form } from "formik";
const Warehouse = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="warehouse padding-2">
      <MenuNavbar />
      <div
        className="flex-container flex-row flex-align"
        style={{
          justifyContent: "space-between",
          paddingBottom: "1rem",
          paddingTop: "1rem",
        }}
      >
        <div className="flex-container flex-row gap-2">
          <DrawerLeft />
          <Button
            sx={{ textDecoration: "none" }}
            className="menu-btn"
            variant="text"
            onClick={handleOpen}
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ height: "1.5rem", width: "1.5rem" }}
              src={add_ring}
            />
            <p className=" text-secondary" style={{ paddingRight: "1rem" }}>
              Add Item
            </p>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="border-round outline-none shadow" sx={{ ...style }}>
              <h2 id="parent-modal-title" className="text-primary">
                Add Item{" "}
              </h2>
              {/* need to check SKU, if exists, copy template and input new incoming qty */}
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                  barcode: "",
                  location: "",
                  category: "",
                  tags: "",
                  inDate: "",
                  expDate: "",
                  qty: "",
                  buy: "",
                  sell: "",
                }}
                onSubmit={() => {
                  console.log("on submit here")
                  handleClose()
                }}
              >
                <Form className="flex-container" style={{ paddingTop: "1rem" }}>
                  <div>
                    <p className="text-secondary caps-word ">Name</p>
                    <Field
                      className="add-text-field secondary"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">description</p>
                    <Field
                      className="add-text-field secondary"
                      name="description"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">barcode</p>
                    <Field
                      className="add-text-field secondary"
                      name="barcode"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">location</p>
                    <Field
                      className="add-text-field secondary"
                      name="location"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">category</p>
                    <Field
                      className="add-text-field secondary"
                      name="category"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">tags</p>
                    <Field
                      className="add-text-field secondary"
                      name="tags"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">in Date</p>
                    <Field
                      className="add-text-field secondary"
                      name="inDate"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">expired Date</p>
                    <Field
                      className="add-text-field secondary"
                      name="expDate"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">qty</p>
                    <Field
                      className="add-text-field secondary"
                      name="qty"
                      type="text"
                    />
                  </div>
                  <div>
                    <p className="text-secondary caps-word">Buy</p>
                    <Field
                      className="add-text-field secondary"
                      name="buy"
                      type="text"
                    />
                  </div>
                  <div className="flex-container flex-row" style={{justifyContent:"space-between"}}>
                    <button
                      className="login-btn primary"
                      style={{ marginTop: "1rem" }}
                      type="submit"
                    >
                      Add Item
                    </button>
                    <button
                      className="login-btn secondary text-secondary"
                      style={{ marginTop: "1rem" }}
                    >
                      Cancel
                    </button>
                  </div>
                  
                </Form>
              </Formik>
            </Box>
          </Modal>
        </div>
      </div>
      <WarehouseList />
    </div>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default Warehouse;
