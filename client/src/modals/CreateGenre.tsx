import { useState } from 'react'

type CreateGenreProps = {
  open: boolean
  onClose: () => void
}

function CreateGenre({ open, onClose }: CreateGenreProps) {
  const [name, setName] = useState('')

  if (!open) {
    return null
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setName('')
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
        <h2>Create new genre</h2>
        <form onSubmit={handleSubmit} className='modal-form'>
          <div className='modal-container'>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

export default CreateGenre

