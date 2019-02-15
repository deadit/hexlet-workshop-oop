import axios from 'axios';

export default httpClient => (link) => {
  const clients = {
    axios: axios.get(link),
  };

  if (!clients[httpClient]) {
    return 'Bad http client';
  }

  return clients[httpClient];
};
