export interface PackageType {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  storage: string;
  users: number;
  sendData: string;
}

const packages = [
  {
    name: "Basic",
    price: {
      monthly: 19.99,
      annually: 199.99,
    },
    storage: "500 GB",
    users: 2,
    sendData: "3 GB",
  },
  {
    name: "Professional",
    price: {
      monthly: 24.99,
      annually: 249.99,
    },
    storage: "1 TB",
    users: 5,
    sendData: "10 GB",
  },
  {
    name: "Master",
    price: {
      monthly: 39.99,
      annually: 399.99,
    },
    storage: "2 TB",
    users: 10,
    sendData: "20 GB",
  },
];

export default packages;
