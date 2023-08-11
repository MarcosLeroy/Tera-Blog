/* eslint jsx-a11y/anchor-is-valid:0 */

import React, { useEffect, useState } from "react";
import AppLoading from "../organisms/AppLoading";

import user1 from "../../images/placeholders/user-1.jpg";
import user2 from "../../images/placeholders/user-2.jpg";
import user3 from "../../images/placeholders/user-3.jpg";
import Default from "../templates/Default";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>

        <div className="users__list">
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={user1} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">John Walter</div>
          </a>
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={user2} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Chris Hudson</div>
          </a>
          <a href="#" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={user3} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Bryan Cornell</div>
          </a>
        </div>
      </div>
    </Default>
  );
}
