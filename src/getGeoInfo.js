import axios from 'axios';

const success = (result) => {
  console.log(result);
};

export default async (ip) => {
  const { data: { city } } = await axios.get(`http://ip-api.com/json/${ip}`);
  return success(city);
};
