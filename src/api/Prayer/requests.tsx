import { api } from '..';
import { COLUMNS_LINK, PRAYERS_LINK } from '../constants';

export async function getPrayer() {
  return await api.get(PRAYERS_LINK).catch((error) => {
    return error;
  });
}
export async function createPrayer(columnId: number, title: string) {
  return await api
    .post(`${COLUMNS_LINK}/${columnId}${PRAYERS_LINK}`, {
      title: title,
      description: '',
      checked: false,
    })
    .catch((error) => {
      return error;
    });
}
export async function deletePrayer(id: number) {
  return await api.delete(`${PRAYERS_LINK}/${id}`).catch((error) => {
    return error;
  });
}
export async function updatePrayer(
  id: number,
  title: string,
  checked: boolean,
) {
  return await api
    .put(`${PRAYERS_LINK}/${id}`, {
      title: title,
      description: '',
      checked: checked,
    })
    .catch((error) => {
      return error;
    });
}
