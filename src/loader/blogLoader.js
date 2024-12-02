import { api } from '../api/Api';

async function categoriLoader() {
  const conn = await api.get('/categories');
  return conn.data;
}
async function allProductsLoader() {
  const conn = await api.get('/products');
  return conn.data;
}
async function allBlogsByCategoryProduct({ params }) {
  console.log(params.categoryName);

  const conn = await api.get('/products');

  const updatedData = await conn.data.filter(item => {
    return item.category === params.categoryName;
  });
  return updatedData;
}
export { categoriLoader, allProductsLoader, allBlogsByCategoryProduct };
