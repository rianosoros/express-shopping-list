const express = require('express');
const router = express.Router();
const items = require('../fakeDb');

router.get('/', (req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json({ added: newItem });
});

router.get('/:name', (req, res) => {
  const itemName = req.params.name;
  const foundItem = items.find(item => item.name === itemName);

  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.patch('/:name', (req, res) => {
  const itemName = req.params.name;
  const updatedItem = req.body;

  for (let i = 0; i < items.length; i++) {
    if (items[i].name === itemName) {
      items[i] = updatedItem;
      return res.json({ updated: updatedItem });
    }
  }

  res.status(404).json({ message: 'Item not found' });
});

router.delete('/:name', (req, res) => {
  const itemName = req.params.name;
  const index = items.findIndex(item => item.name === itemName);

  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: 'Deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;
