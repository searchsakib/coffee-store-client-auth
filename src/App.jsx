import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const myCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(myCoffee);
  // console.log(myCoffe);

  return (
    <div>
      <h1 className="text-4xl text-purple-600 m-10 text-center">
        Hot & Cold Coffee: {coffees.length}
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
