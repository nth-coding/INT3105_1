const axios = require('axios');

class DataService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getData(id) {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data;
  }
}

module.exports = DataService;