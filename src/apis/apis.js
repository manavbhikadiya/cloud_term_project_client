import axios from "axios";

const IMAGE_RECOGNITION = process.env.REACT_APP_IMAGE_RECOGNITION_URL;

const headers = {
  Authorization: localStorage.getItem("AccessToken"),
};

export const CreateUser = (data) =>
  axios.post(`${IMAGE_RECOGNITION}/users/create`, data);
export const SendOTP = (data) =>
  axios.post(`${IMAGE_RECOGNITION}/send/sendOTP`, data);
export const VerifyOTP = (data) =>
  axios.post(`${IMAGE_RECOGNITION}/verify/verifyOTP`, data);
export const Login = (data) =>
  axios.post(`${IMAGE_RECOGNITION}/auth/login`, data);
export const RecognizeImage = (data) =>
  axios.post(`${IMAGE_RECOGNITION}/recognize-image`, data, { headers });
