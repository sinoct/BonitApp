import { Dispatch, FunctionComponent, SetStateAction } from "react";

import {
  soups,
  gyros,
  salads,
  pizzas,
  pastas,
  grill,
  desserts,
  drinks,
} from "../menuData/data";

interface RandomizerProps {
  gyrosEnabled: boolean;
  saladsEnabled: boolean;
  pizzasEnabled: boolean;
  pastasEnabled: boolean;
  grillEnabled: boolean;
  setGenerated: Dispatch<SetStateAction<any>>;
  setPopup: Dispatch<SetStateAction<boolean>>;
}

const Randomizer: FunctionComponent<RandomizerProps> = ({
  gyrosEnabled,
  saladsEnabled,
  pizzasEnabled,
  pastasEnabled,
  grillEnabled,
  setGenerated,
  setPopup,
}) => {
  const generateMenu = () => {
    let options = [];
    if (gyrosEnabled) {
      options.push(...gyros.gyros);
    }
    if (saladsEnabled) {
      options.push(...salads.salads.bowls);
    }
    if (pizzasEnabled) {
      options.push(...pizzas.pizzas.electricOven);
      options.push(...pizzas.pizzas.stoneOven);
    }
    if (pastasEnabled) {
      options.push(...pastas.pastas.normal);
      options.push(...pastas.pastas.homeMade);
      options.push(...pastas.pastas.parmesan);
      options.push(...pastas.pastas.puglia);
    }
    if (grillEnabled) {
      options.push(...grill.grill);
    }
    let number = Math.floor(Math.random() * options.length);
    setGenerated(options[number]);
    setPopup(true);
  };
  return (
    <div>
      <button onClick={generateMenu} className="bg-blue-400/40 p-2 rounded">
        Jöhet a menü!
      </button>
    </div>
  );
};

export default Randomizer;
