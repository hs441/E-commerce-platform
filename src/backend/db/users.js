import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Harshit",
    lastName: "Sharma",
    email: "harshit@gmail.com",
    password: "harshit123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Harshit Sharma",
        street: "5, Indira Nagar",
        city: "Mumbai",
        state: "Maharashtra",
        zipcode: "480009",
        country: "India",
        mobile: "9898002121",
      },
      {
        _id: uuid(),
        name: "Anonymous Sharma",
        street: "M.G. Road",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "370082",
        country: "India",
        mobile: "9394052424",
      },
    ],
  },
];
