const validateProductFields = (req, res, next) => {
    const { name, description, rate, category, url, tags } = req.body;
    
    if (!name || !description || !rate || !category || !url || !tags) {
      return res.status(400).json({ message: "Todos los campos del producto son obligatorios." });
    }
  
    next();
  };
  
  module.exports = validateProductFields;