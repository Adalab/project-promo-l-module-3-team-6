function fetchAPI(dataFromComponent) {
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  // eslint-disable-next-line no-undef
  const message = dataFromComponent;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export default fetchAPI;
