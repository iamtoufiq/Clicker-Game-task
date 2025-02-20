import { User } from "../models/User.js";

const getUserData = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ userId: id });
  res.json(user || { userId: id, score: 0, prizes: 0 });
};

export default getUserData;
