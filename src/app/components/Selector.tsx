import { FunctionComponent, useState } from "react";
import {
  soups,
  gyros,
  salads,
  pizzas,
  pastas,
  grill,
  desserts,
  drinks,
} from "../utils/menuData/data";
import Randomizer from "../utils/randomizer/Randomizer";

const availableOptions = [
  {
    name: "Gyros",
    fieldName: "gyros",
  },
  {
    name: "Saláta",
    fieldName: "salads",
  },
  {
    name: "Pizza",
    fieldName: "pizzas",
  },
  {
    name: "Tészta",
    fieldName: "pastas",
  },
  {
    name: "Grill",
    fieldName: "grill",
  },
];

const Selector: FunctionComponent = () => {
  const [gyrosSelected, setGyrosSelected] = useState(true);
  const [saladSelected, setsaladSelected] = useState(true);
  const [pizzaSelected, setPizzaSelected] = useState(true);
  const [pastaSelected, setPastaSelected] = useState(true);
  const [grillSelected, setGrillSelected] = useState(true);
  const [generatedDish, setGeneratedDish] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <h3>Milyen ételeket vállalnál be?</h3>
      <div className="options-checkbox flex flex-col md:flex-row gap-4">
        <div>
          <label>
            <input
              type="checkbox"
              checked={gyrosSelected}
              onChange={() => setGyrosSelected(!gyrosSelected)}
            />
            Gyros
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={saladSelected}
              onChange={() => setsaladSelected(!saladSelected)}
            />
            Saláta
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={pizzaSelected}
              onChange={() => setPizzaSelected(!pizzaSelected)}
            />
            Pizza
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={pastaSelected}
              onChange={() => setPastaSelected(!pastaSelected)}
            />
            Tészta
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={grillSelected}
              onChange={() => setGrillSelected(!grillSelected)}
            />
            Grill
          </label>
        </div>
      </div>
      <div className="p-4">
        <Randomizer
          gyrosEnabled={gyrosSelected}
          saladsEnabled={saladSelected}
          pizzasEnabled={pizzaSelected}
          pastasEnabled={pastaSelected}
          grillEnabled={grillSelected}
          setGenerated={setGeneratedDish}
          setPopup={setShowPopup}
        ></Randomizer>
      </div>
      {showPopup && generatedDish && (
        <div className="absolute w-10/12 lg:w-1/3 h-1/2 bg-gray-800 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1>Mai Menü</h1>
            <div onClick={() => setShowPopup(false)}>
              {generatedDish["name"]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
