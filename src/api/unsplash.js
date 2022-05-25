import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID NNCD4MPPD7QdGeDjI_PxTHT4TYhWcz6X2KkTOUV2xCs",
  },
})