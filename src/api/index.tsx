import axios from "axios";
const url = "http://localhost:3002";

export const fetchHouses = async () => {
  const response = await axios.get('http://localhost:3002/house');
  return response.data;

};

// export const fetchHouses = async () => {
//     await axios.get(`${url}/house`);
//   };

export const addHouse = async (newHouse) => {
  await axios.post(`${url}/house/add`, newHouse);
};


