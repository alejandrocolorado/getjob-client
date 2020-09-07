import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
    });
  }

  signup({
    firstname,
    lastname,
    email,
    password: hashPass,
    city,
    country,
    phone,
    linkedin,
    image,
  }) {
    return this.auth
      .post("/auth/signup", {
        firstname,
        lastname,
        email,
        password: hashPass,
        city,
        country,
        phone,
        linkedin,
        image,
      })
      .then(({ data }) => data);
  }

  login({
    firstname,
    lastname,
    email,
    password: hashPass,
    city,
    country,
    phone,
    linkedin,
    image,
  }) {
    return this.auth
      .post("/auth/login", {
        firstname,
        lastname,
        email,
        password: hashPass,
        city,
        country,
        phone,
        linkedin,
        image,
      })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
