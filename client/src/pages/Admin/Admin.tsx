import { useState } from 'react'
import styles from './Admin.module.css'
import CreateArtist from '../../modals/CreateArtist'
import CreateGenre from '../../modals/CreateGenre'
import CreateVinyl from '../../modals/CreateVinyl'

function Admin() {
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false)
  const [isGenreModalOpen, setIsGenreModalOpen] = useState(false)
  const [isVinylModalOpen, setIsVinylModalOpen] = useState(false)

  return (
    <div className={styles.admincontainer}>
      <button
        className={styles.adminbtn}
        onClick={() => setIsArtistModalOpen(true)}
      >
        Add new artist
      </button>
      <button
        className={styles.adminbtn}
        onClick={() => setIsGenreModalOpen(true)}
      >
        Add new genre
      </button>
      <button
        className={styles.adminbtn}
        onClick={() => setIsVinylModalOpen(true)}
      >
        Add new vinyl
      </button>

      <CreateArtist
        open={isArtistModalOpen}
        onClose={() => setIsArtistModalOpen(false)}
      />
      <CreateGenre
        open={isGenreModalOpen}
        onClose={() => setIsGenreModalOpen(false)}
      />
      <CreateVinyl
        open={isVinylModalOpen}
        onClose={() => setIsVinylModalOpen(false)}
      />
    </div>
  )
}

export default Admin