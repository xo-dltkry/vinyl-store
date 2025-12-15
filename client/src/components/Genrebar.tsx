import { observer } from "mobx-react-lite"
import { useStore } from "../context/StoreContext"

function GenreBar() {
  const {vinyl} = useStore()
  return(
    <div>
      <ul className="list-group">
        {vinyl.genres.map(genre => 
          <li 
            className={`list-group-item ${vinyl.selectedGenre?.id === genre.id ? "active" : ""}`}
            key={genre.id}
            onClick={() => vinyl.setSelectedGenre(genre)}
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