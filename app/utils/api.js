import axios from 'axios';
import { key } from '../config/secret.json';

const ROOT_URL = 'https://newsapi.org/v2';


export function getSources() {
  return axios.get(`${ROOT_URL}/sources?apiKey=${key}`);
}

export function getLatestNews(source) {
  return axios.get(`${ROOT_URL}/everything?sources=${source}&apiKey=${key}`);
}

export function searchNews(keyword, source) {
  const keywordEncoded = encodeURIComponent(keyword);
  return axios.get(`${ROOT_URL}/everything?sources=${source}&q=${keywordEncoded}&apiKey=${key}`);
}