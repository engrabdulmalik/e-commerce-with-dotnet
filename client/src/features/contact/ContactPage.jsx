import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./counterReducer";
import { Button } from "@mui/material"; // Update the path to your actual slice file

function ContactPage() {
  const data = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Contact Page</h1>
      <p>Counter Value: {data}</p>
      <Button onClick={() => dispatch(increment(1))}>Increment </Button>
      <Button onClick={() => dispatch(decrement(1))}>decrement </Button>
      <Button onClick={() => dispatch(increment(5))}>Increment by 5 </Button>
    </>
  );
}

export default ContactPage;
