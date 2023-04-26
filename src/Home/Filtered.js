import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import HomeDetails from "./HomeDetails";

const Filterd = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("https://mobilicis-job-server.vercel.app/user").then((res) =>
        res.json()
      ),
  });
  console.log(allusers);
  const filtered = allusers.filter((user) => {
    return (
      user.income < 5 &&
      user.gender === "Male" &&
      user.phone_price > 10000 &&
      user.last_name.startsWith("M") &&
      user.last_name.length > 15 &&
      user.email.includes(user.last_name) &&
      (user.car === "BMW" ||
        user.car === "Mercedes-Benz" ||
        user.car === "Audi") &&
      !/[0-9]/.test.user.email
    );
  });
  console.log(filtered);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>NO</th>
              <th>Fist name</th>
              <th>Income</th>
              <th>phone_price</th>
              <th>car</th>
              <th>LastName(M)</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <HomeDetails key={user._id} user={user}></HomeDetails>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-4xl">
        No user available according to your requirement
      </h2>
    </div>
  );
};

export default Filterd;
