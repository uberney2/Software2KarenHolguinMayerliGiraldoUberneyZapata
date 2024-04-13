const validateProductFields = (req, res, next) => {
    const { name, description, rate, category, url, tags } = req.body;
    
    if (!name || !description || !rate || !category || !url || !tags) {
      return res.status(400).json({ message: "All fields should be mandatory." });
    }
  
    next();
  };
  
  module.exports = validateProductFields;