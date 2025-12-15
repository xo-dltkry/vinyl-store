import { useState } from 'react'
import { useStore } from '../context/StoreContext'

type CreateVinylProps = {
  open: boolean
  onClose: () => void
}

function CreateVinyl({ open, onClose }: CreateVinylProps) {
  const [title, setTitle] = useState('')
  const [artistId, setArtistId] = useState<number | ''>('')
  const [genreId, setGenreId] = useState<number | ''>('')
  const [price, setPrice] = useState('')

  const { vinyl } = useStore()

  if (!open) {
    return null
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!artistId || !genreId) {
      return
    }

    setTitle('')
    setArtistId('')
    setGenreId('')
    setPrice('')
    onClose()
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '4px',
          minWidth: '300px',
        }}
      >
        <h2>Create new vinyl</h2>
        <form onSubmit={handleSubmit} className='modal-vinyl'>
          <div className='modal-container'>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className='modal-input'
              />
            </label>
          </div>
          <div className='modal-artist'>
            <label>
              Artist:
              <select
                value={artistId}
                onChange={(e) =>
                  setArtistId(e.target.value ? Number(e.target.value) : '')
                }
                required
                className='modal-artist'
              >
                <option value="">Select artist</option>
                {vinyl.artists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='genre-container'>
            <label>
              Genre:
              <select
                value={genreId}
                onChange={(e) =>
                  setGenreId(e.target.value ? Number(e.target.value) : '')
                }
                required
                className='modal-genre'
              >
                <option value="">Select genre</option>
                {vinyl.genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='modal-price'>
            <label>
              Price:
              <input
                type="number"
                min="0"
                step="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className='modal-input'
              />
            </label>
          </div>
          <div className='modal-buttons'>
            <button type="button" className='modal-btn cancel' onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className='modal-btn save'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateVinyl

