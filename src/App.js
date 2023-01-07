import { Header, Categories, Products } from "./components"
import { ContextProvider } from "./context/store"
import "./normalize.css"

export const App = () => {
  return (
    <ContextProvider>
      <Header />
      <main className="main">
        <Categories />
        <Products />
      </main>
    </ContextProvider>
  )
}