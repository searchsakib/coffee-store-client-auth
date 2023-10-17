import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = async (id) => {
    //make sure user is confirmed to delete
    const theDel = await axios.delete(`http://localhost:5000/user/${id}`);
    if (theDel.data.deletedCount > 0) {
      console.log('deleted successfully');
      // remove the user from the UI
      const usersLeft = users.filter((user) => user._id !== id);
      setUsers(usersLeft);
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-blue-500 m-5">
        Total Users : {users.length}{' '}
      </h2>
      {
        <div>
          {users.map((user) => (
            <div className="" key={user._id}>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Email</th>
                      <th>User Created</th>
                      <th>Last Logged In</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td> {user.email} </td>
                      <td> {user.createdAt} </td>
                      <td> {user.lastLoggedAt} </td>
                      <td> </td>
                      <td>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn"
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Users;
