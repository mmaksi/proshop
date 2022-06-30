const axios = require("axios");

export const getData = async (DATA_URL) => {
  try {
    const {data} = await axios.get(DATA_URL);
    return data
  } catch (error) {
    throw new Error ("Cannot fetch data from the API")
  }
};
