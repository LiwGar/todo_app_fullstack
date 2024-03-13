const findCategories = (req, res) => {
  res.send('all Categories');
};

const findOneCategory = (req, res) => {
  res.send('one Category');
};

const createCategory = (req, res) => {
  res.send('Category created');
};

const updateCategory = (req, res) => {
  res.send('Category updated');
};

const deleteCategory = (req, res) => {
  res.send('Category deleted');
};

export { findCategories, findOneCategory, createCategory, updateCategory, deleteCategory };