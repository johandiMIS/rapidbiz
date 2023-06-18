import React, { Fragment} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button} from "@mui/material";
import {Link} from 'react-router-dom'

const WarehouseList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 5 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "barcode", headerName: "Barcode", width: 90 },
    {
      field: "location",
      headerName: "Location",
      width: 130,
      description: "This column has a value getter and is not sortable.",
    },
    { field: "category", headerName: "Category", width: 90 },
    { field: "tags", headerName: "Tags", width: 90 },
    { field: "inDate", headerName: "In Date", minWidth: 160 },
    {
      field: "expDate",
      headerName: "Exp Date",
      minWidth: 160,
    },
    { field: "qty", headerName: "Qty", width: 60 },
    { field: "buyPrice", headerName: "Buy ($)", width: 65 },
    { field: "sellPrice", headerName: "Sell ($)", width: 65 },
    {
      field: "detail",
      headerName: "Details",
      renderCell: (params) => {
        const onClick = () => {
          console.log(params);
        };
        return <Button onClick={onClick}><Link to={`/warehouse/${params.id}`}>Details</Link></Button>;
      },
    },
  ];

  const rows = [
    {
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
    },
    {
      id: 2,
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
    },
  ];

  return (
    <Fragment>
      <DataGrid
        rows={rows}
        columns={columns}
        className="table"
        sx={{ fontSize: "1rem" }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Fragment>
  );
};

export default WarehouseList;
