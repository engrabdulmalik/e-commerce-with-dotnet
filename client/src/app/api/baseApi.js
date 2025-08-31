import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { startLoading, stopLoading } from "../layout/uiSlice";
const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api",
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  api.dispatch(startLoading());
  await sleep();
  const result = await customBaseQuery(args, api, extraOptions);
  api.dispatch(stopLoading());
  if (result.error) {
    if (result.error.status === 401) {
      // handle unauthorized errors
      console.log("Unauthorized, logging out...");
    }
    if (result.error.status === 403) {
      // handle forbidden errors
      console.log("Forbidden");
    }
    if (result.error.status === 500) {
      // handle server errors
      console.log("Server error");
    }
  }

  return result;
};
