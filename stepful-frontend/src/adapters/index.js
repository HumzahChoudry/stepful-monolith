const rootUrl = "http://localhost:3001";
const baseUrl = `${rootUrl}`;
function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export default class RestfulAdapter {
  static indexFetch(route) {
    return fetch(`${baseUrl}/${route}`, getRequest()).then(responseHandler);
  }
  static showFetch(route, id) {
    return fetch(`${baseUrl}/${route}/${id}`, getRequest()).then(res =>
      res.json()
    );
  }
  static createFetch(route, body) {
    return fetch(`${baseUrl}/${route}`, postRequest(body)).then(res =>
      res.json()
    );
  }
  static editFetch(route, id, body) {
    return fetch(`${baseUrl}/${route}/${id}`, patchRequest(body)).then(res =>
      res.json()
    );
  }
  static deleteFetch(route, id) {
    return fetch(`${baseUrl}/${route}/${id}`, {
      method: "DELETE",
      headers: headers()
    }).then(responseHandler);
  }

  //USER FETCHES
  static login(route, body) {
    return fetch(`${rootUrl}/${route}`, postRequest(body)).then(res =>
      res.json()
    );
  }

  static getLoggedInUser = route => {
    return fetch(`${rootUrl}/${route}`, {
      headers: headers()
    }).then(res => res.json());
  };
}

//HELPER FUNCTIONS
function getRequest() {
  return {
    headers: headers()
  };
}

function patchRequest(body) {
  return {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

function postRequest(body) {
  return {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

function responseHandler(response) {
  return response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("ERROR", response.json());
    }
  };
}