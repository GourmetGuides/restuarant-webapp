"use client"
import React from "react";
import Login from "../../../components/Login";

const TableID = ({params}) => {
  const tableID = params.tableID;
  return (
    <div>
      <Login tableID={tableID} />
    </div>
  );
};

export default TableID;
