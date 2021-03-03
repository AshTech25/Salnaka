import axios from 'axios';

export const SetToken = token => {
  if (token) {
    axios.defaults.headers.common['authorization'] =`Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }


}

export default SetToken;