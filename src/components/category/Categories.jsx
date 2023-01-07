import { useContext } from "react"
import { store } from "../../context/store"
import "./styles.sass"

const categoryList = [
  {
    name: "All Products",
    query: "",
    img: "all"
  },
  {
    name: "Electronics",
    query: "category/electronics",
    img: "electronics"
  },
  {
    name: "Jewelry",
    query: "category/jewelery",
    img: "jewelry"
  },
  {
    name: "For men",
    query: "category/men's clothing",
    img: "men"
  },
  {
    name: "For women",
    query: "category/women's clothing",
    img: "women"
  },
]

export const Categories = () => {
  const { effects: { fetchProducts } } = useContext(store)

  const onSelectCategory = (category) => async () => await fetchProducts(category)

  return (
    <section>
      <h2>Categories</h2>
      <div className="categories-wrapper">
        {categoryList.map(({ name, query, img }) => (
          <article className="category-item" key={name} onClick={onSelectCategory(query)}>
            <img
              className="category-item__img"
              src={`https://raw.githubusercontent.com/Derwin1310/test-assets/main/${img}.webp`}
              alt={name}
            />
            <h3 className="category-item__name">{name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
