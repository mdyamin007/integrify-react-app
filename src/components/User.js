import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/User.css"

const User = () => {
  const { id } = useParams();
  const baseUrl = "https://jsonplaceholder.typicode.com/users/";

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    async function getUserData() {
      await fetch(baseUrl + id)
        .then((data) => data.json())
        .then((res) => {
          setUserInfo(res);
        })
        .catch((e) => {
          alert(e);
        });
    }
    getUserData();
  }, [id]);
  return (
    <>
      {userInfo &&
          <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="card card-userInfo p-4">
              <p className="fw-bold">-name: {userInfo.name}</p>
              <p className="fw-bold">-username: {userInfo.username}</p>
              <p className="fw-bold">-email: {userInfo.email}</p>
              <p className="fw-bold">-phone: {userInfo.phone}</p>
              <p className="fw-bold">-company: {userInfo.company.name}</p>
              <p className="fw-bold">-website: {userInfo.website}</p>
              <p className="fw-bold">-address: </p>
              <ul>
                <li className="fw-bold">street: {userInfo.address.street}</li>
                <li className="fw-bold">suite: {userInfo.address.suite}</li>
                <li className="fw-bold">city: {userInfo.address.city}</li>
                <li className="fw-bold">zipcode: {userInfo.address.zipcode}</li>
              </ul>
            </div>
          </div>
        }
    </>
  );
};

export default User;
