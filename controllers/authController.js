export const register = async (req, res) => {
  res.status(201).json({ msg: "user created" });
};
export const login = async (req, res) => {
  res.status(200).json({ msg: "user logged in" });
};

export const logout = (req, res) => {
  res.status(200).json({ msg: "user logged out!" });
};
