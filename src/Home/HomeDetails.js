import React from "react";

const HomeDetails = ({ user }) => {
  const { id, income, phone_price, first_name, car, last_name, email } = user;
  return (
    <tr>
      <th>{id}</th>
      <th>{first_name}</th>
      <td>$ {income}</td>
      <td>{phone_price}</td>
      <td>{car}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default HomeDetails;
