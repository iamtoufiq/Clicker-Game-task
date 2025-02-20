import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { getUserData } from "./service/api";
import { getUserId } from "./utils/getUserId";
import { primaryColor } from "./utils/constant";
import ClickerButton from "./components/ClickerButton";

const App = () => {
  const [userId, setUserId] = useState("");
  const [loading , setLoading]=useState(false)
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);

  useEffect(() => {
    setUserId(getUserId());
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const user = await getUserData(userId);
      setScore(user.score);
      setPrizes(user.prizes);
      setLoading(false)
    };
    userId && fetchUser();
  }, [userId]);

  if(loading) {
    return <p>Loading...</p>
  }
  // Jl3oGYYh73NSNmQ5
  // imtoufiq2

  return  (
    <div className="text-white bg-gray-900 min-h-screen flex justify-center items-center bg-white-100">
      <div
        id="inner-div"
        style={{ borderColor: primaryColor }}
        className="rounded-md md:rounded-lg
 py-5 md:py-7 border-1 flex flex-col gap-4 md:gap-7 w-full mx-5 md:max-w-3xl items-center"
      >
        <h1
          className="text-lg md:text-xl font-bold"
          style={{ color: primaryColor }}
        >
          Clicker Game
        </h1>
        <p>Score: {score}</p>
        <p>Prizes: {prizes}</p>
        <ClickerButton
          userId={userId}
          setScore={setScore}
          setPrizes={setPrizes}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
