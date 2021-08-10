import axios from 'axios';
import {useCallback} from 'react';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

export function usePokemonApi() {
  async function getPokemonsList() {
    const response = await httpClient.get('list');

    return response.data;
  }

  async function getPokemonDetails(id) {
    const response = await httpClient.get(`details/${id}`);

    return response.data;
  }

  async function getMovesList() {
    const response = await httpClient.get('moves');

    return response.data;
  }

  async function getMoveDetails(id) {
    const response = await httpClient.get(`movesDetails/${id}`);

    return response.data;
  }

  async function getItemsList() {
    const response = await httpClient.get('items');

    return response.data;
  }

  async function getItemDetails(id) {
    const response = await httpClient.get(`itemsDetails/${id}`);

    return response.data;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    {
      getPokemonsList,
      getPokemonDetails,
      getMovesList,
      getMoveDetails,
      getItemsList,
      getItemDetails,
    },
    [],
  );
}
