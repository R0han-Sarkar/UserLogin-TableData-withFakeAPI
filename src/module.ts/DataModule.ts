export type dataModule = {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  address?: {
    city?: string;
  };
  phone?: string;
};
