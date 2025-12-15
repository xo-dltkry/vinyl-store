import { observer } from "mobx-react-lite"
import { useStore } from "../context/StoreContext"

function GenreBar() {
  const {vinyl} = useStore()
  const handleClick = (genre: any) => {
    if (vinyl.selectedGenre?.id === genre.id) {
      vinyl.setSelectedGenre(null);
    } else {
      vinyl.setSelectedGenre(genre);
    }
  };
  return(
    <div>
      <ul className="list-group">
        {vinyl.genres.map(genre => 
          <li 
            className={`list-group-item ${vinyl.selectedGenre?.id === genre.id ? "active" : ""}`}
            key={genre.id}
            onClick={() => handleClick(genre)}
            style={{cursor: "pointer"}}
          >
            {genre.name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default observer(GenreBar)