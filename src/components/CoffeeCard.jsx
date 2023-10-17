import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/coffee/${_id}`);

        const resDelete = await axios.delete(
          `http://localhost:5000/coffee/${_id}`
        );
        console.log(resDelete.data);
        if (resDelete.data.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your Coffee has been deleted.', 'success');
          const remaining = coffees.filter(
            (theCoffee) => theCoffee._id !== _id
          );
          setCoffees(remaining);
        }
      }
    });
    console.log(_id);
  };

  return (
    <div className="card card-side shadow-xl bg-gray-200">
      <figure className="h-[239px] w-[193px]">
        <img src={photo} alt="Coffee" />
      </figure>
      <div className="flex items-center justify-evenly w-full">
        <div>
          <h2 className="card-title ">{name} </h2>
          <p> {quantity} </p>
          <p> {supplier} </p>
          <p> {taste} </p>
        </div>
        <div className="card-actions">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn bg-green-400  hover:outline">View</button>
            <Link to={`update-coffee/${_id}`}>
              <button className="btn bg-green-400  hover:outline">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 text-white hover:outline hover:text-black"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
