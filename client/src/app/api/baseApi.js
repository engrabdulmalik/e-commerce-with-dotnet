import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
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
    const originalStatus =
      result.error.status === "PARSING_ERROR" && result.error.originalStatus
        ? result.error.originalStatus
        : result.error.status;
        const responseData = result.error.data;
    switch (originalStatus) {
      case 400:
        toast.error(responseData);
        break;
      case 401:
        toast.error(responseData.title);
        break;
      case 404:
        toast.error(responseData.title);
        break;
      case 500:
        toast.error(responseData.title);
        break;
      default:
        break;
    }
  }

  return result;
};
