import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const data = new Date();
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        id: crypto.randomUUID(),
        status: 'inactive',
        createdAt: data,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    const newArray = response.data.map(item => {
      return {
        ...item,
        // title: item.title.toUpperCase(),
      };
    });
    response.data = newArray;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
