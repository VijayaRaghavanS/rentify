const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { title, description, bedrooms, bathrooms, location, price, nearby } = req.body;

  try {
    const property = new Property({
      sellerId: req.user.id,
      title,
      description,
      bedrooms,
      bathrooms,
      location,
      price,
      nearby
    });

    await property.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getSellerProperties = async (req, res) => {
  try {
    const properties = await Property.find({ sellerId: req.user.id });
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProperty = async (req, res) => {
  const { title, description, bedrooms, bathrooms, location, price, nearby } = req.body;

  try {
    let property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: 'Property not found' });

    if (property.sellerId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    property = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, bedrooms, bathrooms, location, price, nearby } },
      { new: true }
    );

    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: 'Property not found' });

    if (property.sellerId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Property.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Property removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
