exports.register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(201).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};
