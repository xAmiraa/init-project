import { environment } from 'src/environments/environment';
export const authController = {
  login: environment.BASE_URL + `/logon`,
  deleteProduct: (id: number) =>
    environment.BASE_URL + `/api/deleteProducts${id}`,
};
