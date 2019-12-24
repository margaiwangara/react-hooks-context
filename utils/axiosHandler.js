import axios from "axios";

export default async function axiosHandler(method, url, data) {
  try {
    const response = await axios({ method, url, data });
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
  }
}
