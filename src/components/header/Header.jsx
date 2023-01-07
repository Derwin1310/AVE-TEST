import { Icon } from "@iconify/react"
import { debounce } from "lodash"
import { useContext, useMemo } from "react"
import { store } from "../../context/store"
import "./styles.sass"

export const Header = () => {
  const { effects: { setInput } } = useContext(store)

  const eventHandler = (e) => setInput(e?.target?.value)
  const useCallBackDebounced = useMemo(() => debounce(eventHandler, 300), []);

  return (
    <header className="header">
      <div className="header__title">
        <Icon
          icon="noto-v1:shopping-bags"
          className="header__logo"
          width={50}
        />
        <h1 className="title">ONLINE SHOP</h1>
      </div>
      <div className="searcher">
        <Icon
          icon="ic:round-search"
          className="searcher__icon"
          width={24}
        />
        <input
          className="searcher__input"
          type="search"
          placeholder="Search..."
          onChange={useCallBackDebounced}
        />
      </div>
    </header>
  )
}
