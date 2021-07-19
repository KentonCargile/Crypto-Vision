import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getVideos() {
    return service
      .get("/api/video")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getVideo(id) {
    return service
      .get("/api/video/" + id)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addVideo(data) {
    return service
      .post("api/video", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateVideo(videoId, data) {
    return service
      .patch(`api/video/${videoId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  removeVideo(videoId) {
    return service
      .delete(`api/video/${videoId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addFavoriteVideo(id) {
    return service
      .patch(`/api/users/me/videos`, id)
      .then((res) => res.data)
      .catch(errorHandler);
  }, 
};

export default apiHandler;
