import request from "../util/request";

export const getProfile = () => {
  return request({ url: "/profile ", method: "get" });
};
