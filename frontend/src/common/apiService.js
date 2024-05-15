import { CSRF_TOKEN } from "./csrf_token";

async function getJSON(response) {
  if (response.status === 204) return "";
  if (response.status === 200 || response.status === 201) {
    return await response;
  }
  try {
    const json = await response.json();
    // Check if JSON data contains a 'detail' key, which might contain error details
    if (json.detail) {
      // If 'detail' key exists, return it
      return json.detail;
    } else {
      // If 'detail' key doesn't exist, return the entire JSON data
      return json;
    }
  } catch (error) {
    // If an error occurs while parsing JSON, return an empty string
    return "";
  }
}

function apiService(endpoint, method, data) {
  const config = {
    method: method || "GET",
    headers: {
      "X-CSRFTOKEN": CSRF_TOKEN,
    },
  };

  // Conditionally stringify data if it's not a FormData object
  if (data) {
    if (!(data instanceof FormData)) {
      config.body = data !== undefined ? JSON.stringify(data) : null;
      config.headers["Content-Type"] = "application/json";
    } else {
      config.body = data; // Pass FormData directly as body
    }
  }

  return fetch(endpoint, config)
    .then(getJSON)
    .catch((err) => {
      // Return the error
      return Promise.reject(err);
    });
}

export { apiService };

// async function getJSON(response) {
//   if (response.status === 204) return "";
//   return response;
// }

// function apiService(endpoint, method, data) {
//   const config = {
//     method: method || "GET",
//     body: data !== undefined ? JSON.stringify(data) : null,
//     headers: {
//       "content-type": "application/json",
//       "X-CSRFTOKEN": CSRF_TOKEN,
//     },
//   };
//   return fetch(endpoint, config)
//     .then(getJSON)
//     .catch((err) => console.log(err));
// }

// export { apiService };
