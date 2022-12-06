const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://localhost:7181/api/"
  : "https://localhost:7181/api/";
//https://localhost:7257/api/
