import { User } from "../models/User.js";

const updateScore = async (req, res) => {
  const { userId } = req.body;

  let points = 1;
  let prizeWon = false;

  const random = Math.random();
  if (random < 0.5) {
    points = 10;
    prizeWon = true; // Ensure prizeWon is true when points = 10
  }

  try {
    // Find the user and update their score and prizes, or create a new user if not found
    const user = await User.findOneAndUpdate(
      { userId },
      {
        $inc: { score: points, prizes: prizeWon ? 1 : 0 },
      },
      { new: true, upsert: true } // Returns updated document and creates if not found
    );

    res.json({ newScore: user.score, prizeWon });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default updateScore;
