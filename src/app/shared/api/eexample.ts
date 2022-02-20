import { environment } from 'src/environments/environment';
export const productController = {
  getProducts: environment.BASE_URL + `/api/getProducts`,
  deleteProduct: (id: number) =>
    environment.BASE_URL + `/api/deleteProducts${id}`,
};
