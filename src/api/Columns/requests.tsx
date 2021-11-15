import { api } from '..';
import { COLUMNS_LINK } from '../constants';

export async function getColumns() {
  return await api.get(COLUMNS_LINK).catch((error) => {
    console.log(error);
  });
}

export async function createColumn(title: string) {
  return await api
    .post(COLUMNS_LINK, { title: title, description: '' })
    .catch((error) => {
      return error;
    });
}

export async function updateColumn(id: number, title: string) {
  return await api
    .put(`/columns/${id}`, { title: title, description: '' })
    .catch((error) => {
      console.log(`​/columns/​${title}​`);
      return error;
    });
}

export async function deleteColumn(id: number) {
  return await api.delete(`/columns/${id}`).catch((error) => {
    return error;
  });
}
