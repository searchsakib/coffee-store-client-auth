import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee || {};

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // send data to the server
    // fetch('http://localhost:5000/coffee', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(newCoffee),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    const res = await axios.put(
      `http://localhost:5000/coffee/${_id}`,
      updatedCoffee,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('I am from update page', res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        title: 'Success!',
        text: 'Coffee Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-16">
      <h2 className="text-3xl font-extrabold mb-8 text-[#3B3B3B] text-center">
        Update Coffee : {name}
      </h2>
      <div>
        <div className="mx-auto max-w-xl">
          <form onSubmit={handleUpdateCoffee} className="space-y-5">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Coffee Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="coffee name"
                  name="name"
                  defaultValue={name}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="example8"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Available Quantity
                </label>
                <input
                  type="number"
                  className="bloc p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="you@email.com"
                  name="quantity"
                  defaultValue={quantity}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Supplier Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="Supplier Name"
                  name="supplier"
                  defaultValue={supplier}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Taste
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="Taste"
                  name="taste"
                  defaultValue={taste}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="category"
                  name="category"
                  defaultValue={category}
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Details
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="Details"
                  name="details"
                  defaultValue={details}
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
                  placeholder="Photo URL"
                  name="photo"
                  defaultValue={photo}
                />
              </div>
              <div className="col-span-12">
                <input
                  type="submit"
                  className="btn btn-block hover:bg-white hover:text-black bg-[#3B3B3B] text-white"
                  value="Update Coffee"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
