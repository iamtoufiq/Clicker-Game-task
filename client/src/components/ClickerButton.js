import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import { updateScore } from "../service/api";
import { primaryColor } from "../utils/constant";

const ClickerButton = ({ userId, setScore, setPrizes }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (showConfetti) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setShowConfetti(false);
        document.body.style.overflow = "auto";
      }, 3000);
    }
  }, [showConfetti]);

  const handleClick = async () => {
    setIsDisabled(true);
    const { newScore, prizeWon } = await updateScore(userId);
    setScore(newScore);
    if (prizeWon) {
      setPrizes((prev) => prev + 1);
      toast.success("🎉 You won a prize!");
      setShowConfetti(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 3000);
    } else {
      toast("👍 Keep clicking!");
      setTimeout(() => {
        setIsDisabled(false);
      }, 500);
    }
  };

  return (
    <div className="text-center relative overflow-hidden">
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />
        </div>
      )}

      <button
        onClick={handleClick}
        className="font-bold py-2 px-4 rounded text-gray-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: primaryColor }}
        disabled={isDisabled}
      >
        Click Me!
      </button>

      <Toaster />
    </div>
  );
};

export default ClickerButton;
