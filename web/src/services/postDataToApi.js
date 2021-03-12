const postDataToApi = (dataFromComponent) => {
  const urlServer = "http://localhost:3000/card";
  // eslint-disable-next-line no-undef
  /*  const message = dataFromComponent; */

  return fetch(urlServer, {
    method: "POST",
    body: JSON.stringify(dataFromComponent),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default postDataToApi;
