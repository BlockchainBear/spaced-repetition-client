import TokenService from './token-service';
import config from '../config';

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getHead() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default LanguageApiService;
