import { observer } from "mobx-react-lite";
import { useStore } from "../../context/StoreContext";
import Genrebar from "../../components/Genrebar";
import SearchBar from "../../components/SearchBar";
import VinylList from "../../components/VinylList";
import { useEffect } from "react";
import { fetchGenres} from "../../http/vinylAPI";
import { fetchVinyls } from "../../http/vinylAPI";
import { fetchArtists } from "../../http/vinylAPI";

function Shop() {
  const { vinyl } = useStore();

  useEffect(() => {
    fetchGenres()
    .then((data) => vinyl.setGenres(data))
    .catch(console.error);

  fetchArtists()
    .then((data) => vinyl.setArtists(data))
    .catch(console.error);

  fetchVinyls()
    .then((data: any) => {
      const rows = Array.isArray(data) ? data : data?.rows ?? [];
      vinyl.setVinyls(rows);
    })
    .catch(console.error);
  }, [])

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
