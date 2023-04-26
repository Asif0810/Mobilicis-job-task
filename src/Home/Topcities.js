import { useQuery } from "@tanstack/react-query";
import React from "react";
import HomeDetails from "./HomeDetails";

const Topcities = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("http://localhost:5000/user").then((res) => res.json()),
  });

  // cheking
  //   function findOcc(arr, key) {
  //     let arr2 = [];

  //     arr.forEach((x) => {
  //       if (
  //         arr2.some((val) => {
  //           return val[key] == x[key];
  //         })
  //       ) {
  //         arr2.forEach((k) => {
  //           if (k[key] === x[key]) {
  //             k["count"]++;
  //           }
  //         });
  //       } else {
  //         let a = {};
  //         a[key] = x[key];
  //         a["count"] = 1;
  //         arr2.push(a);
  //       }
  //     });

  //     return arr2;
  //   }
  //   let key = "city";
  //   const topCities = findOcc(allusers, key);
  //   console.log(topCities);
  // cheking end
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
            {allusers.map((user) => (
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

export default Topcities;
