import { observer } from "mobx-react-lite";
import { useStore } from "../context/StoreContext";

const SearchBar = observer(() => {
  const { vinyl } = useStore();
  return (
    <input
      className="form-control mb-3"
      placeholder="Search for vinyl or artist..."
      value={vinyl.searchQuery}
      onChange={(e) => vinyl.setSearchQuery(e.target.value)}
    />
  );
});

export default SearchBar;
