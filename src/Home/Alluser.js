import React from "react";
import HomeDetails from "./HomeDetails";
import { useQuery } from "@tanstack/react-query";

const Alluser = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch("https://mobilicis-job-server.vercel.app/user").then((res) =>
        res.json()
      ),
  });
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
    </div>
  );
};

export default Alluser;
