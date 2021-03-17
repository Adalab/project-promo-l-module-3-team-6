const isDevEnviroment = process.env.NODE_ENV === 'development';
const apiUrl = isDevEnviroment
  ? 'http://localhost:3000'
  : 'https://react-huggers-cards.herokuapp.com/';

const postDataToApi = (dataFromComponent) => {
  const urlServer = `${apiUrl}/card`;

  return fetch(urlServer, {
    method: 'POST',
    body: JSON.stringify(dataFromComponent),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export default postDataToApi;
