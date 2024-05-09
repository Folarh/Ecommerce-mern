export const getCurrentUser = async (req, res) => {
  res.status(200).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  res.status(200).json({ users, jobs });
};
export const updateUser = async (req, res) => {
  res.status(200).json({ msg: "update user" });
};
