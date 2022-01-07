import { Pagination } from "@material-ui/lab";
import React, { useState, useEffect } from "react";

const PaginationPokedex = (props) => {
  const [page, setPage] = React.useState(1);

  const changePage = (event, value) => {
    setPage(value);
    console.log(value)
  };

  useEffect(() => {
  }, [page]);

  return (
    <Pagination count={Math.round(props.count / 20)}
     defaultPage={1} page={page} onChange={changePage} 
     onClick={props.changePage(page)}
     size="large" />
  );
};

export default PaginationPokedex;
