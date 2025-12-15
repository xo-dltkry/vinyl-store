import { observer } from "mobx-react-lite";
import { useStore } from "../../context/StoreContext";
import Genrebar from "../../components/Genrebar";
import SearchBar from "../../components/SearchBar";
import VinylList from "../../components/VinylList";

function Shop() {
  const { vinyl } = useStore();

  return (
    <div className="container py-4">
      <div className="row g-4">
        <aside className="col-12 col-md-3 col-lg-2">
          <Genrebar />
        </aside>
        <main className="col-12 col-md-9 col-lg-10">
          <SearchBar />
          <VinylList
            vinyls={vinyl.filteredVinyls}
            artists={vinyl.artists}
          />
        </main>
      </div>
    </div>
  );
}

export default observer(Shop);
