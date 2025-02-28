import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setPage } from "./store";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  return (
    <div>
      <h2>Users-List(Page-{page})</h2>
      <ul>
        {data.map((user) => (
          <li>
            <img src={user.avatar} alt={user.first_name} />
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
        Previous
      </button>{" "}
      <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
    </div>
  );
};

export default UserList;
