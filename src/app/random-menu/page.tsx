import { NextPage } from "next";
import { useState } from "react";
import QuestionBox from "../components/QuestionBox";

const RandomMenu: NextPage = () => {
  const [showRandomizer, setShowRandomizer] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <div className="text-3xl">
        <h1>Üdvözöl a BonitAPP!</h1>
      </div>
      <div>
        <QuestionBox setter={setShowRandomizer}></QuestionBox>
      </div>
    </div>
  );
};
export default RandomMenu;
