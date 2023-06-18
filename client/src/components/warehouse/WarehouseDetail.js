import { Grid } from "@mui/material";
import React from "react";
import MenuNavbar from "../layout/MenuNavbar";
import product from "../images/product_image/product.jpg";

const WarehouseDetail = () => {
  const item = {
    id: 1,
    name: "snoopy",
    description: "snoopy medium",
    barcode: "snp1234",
    location: "Rack-A52",
    category: "toys",
    tags: ["toys", "kids"],
    inDate: Date("2022-03-23 10:30:15.100"),
    expDate: Date("2022-03-25 10:30:15.100"),
    qty: 10,
    buyPrice: "5", 
    sellPrice: "8",
  };
  return (
    <Grid
      container
      component="main"
      className="padding-2 text-secondary"
      spacing={2}
    >
      <Grid item xs={12}>
        <MenuNavbar />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} className="img-center">
        <img
          className="item"
          alt="logo"
          src={product}
          style={{
            objectFit: "cover",
            overflow: "hidden",
            position: "center center",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4} className="flex-container flex-column">
        <h2>{item.name}</h2>
        <div>
          <p>Description: {item.description}</p>
        </div>
        
        <div>
          <p>Location: {item.location}</p>
        </div>
        <div>  
          <p>Category: {item.category}</p>
        </div>
        <div>
          <p>Tags: {item.tags}</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} lg={4} className="flex-container flex-column">
        <h2>stock</h2>
        <div>
          <p>Barcode: {item.barcode}</p>
        </div>
        <div>
          <p>Incoming Date: {item.inDate}</p>
        </div>
        <div>
          <p>Expire Date: {item.expDate}</p>
        </div>
        <div>
          <p>Qty: {item.qty}</p>
        </div>
        <div>
          <p>Buy Price: {item.buyPrice}</p>
        </div>
        <div>
          <p>Sell Price: {item.sellPrice}</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        More Info
      </Grid>
    </Grid>
  );
};

export default WarehouseDetail;
