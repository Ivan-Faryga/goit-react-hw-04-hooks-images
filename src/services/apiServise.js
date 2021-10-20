import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = "22450020-f32da86f0216f1b7b94b605ba";

export function fetchPictures(query, page) {
  return axios
    .get(
      `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
    )
    .then((resp) => resp.data.hits);
}
