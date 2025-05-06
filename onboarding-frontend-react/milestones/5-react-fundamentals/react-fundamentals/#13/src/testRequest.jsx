// src/api/testRequest.js
import axiosInstance from "./axiosInstance";

export const sendTestRequest = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await axiosInstance.post(
      "/test-endpoint",
      { param1: "value1" },
      { signal: controller.signal }
    );
    console.log("Success:", response.data);
    // Redirect or notify user
  } catch (error) {
    if (axios.isCancel(error)) {
      console.warn("Request was cancelled:", error.message);
    } else if (error.code === "ECONNABORTED") {
      console.warn("Request timed out");
    } else {
      console.error("Request error:", error);
    }
  } finally {
    clearTimeout(timeout);
  }
};
