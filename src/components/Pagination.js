import { Pagination } from "@material-ui/lab";
import React, { useContext, useRef } from "react";
import { AppContext } from "../provider";

const PaginationPokedex = (props) => {
  const [state,setState] = useContext(AppContext);

  const changePage = (event, value) => {
    setState({ ...state, page: value})
  };

  return (
    <Pagination count={Math.round(props.count / 20-1)}
     defaultPage={1} page={state.page ? state.page : 1} onChange={changePage}
     size="large" />
  );
};

export default PaginationPokedex;
