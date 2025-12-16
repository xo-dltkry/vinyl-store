import styles from './VinylItem.module.css'
import {useNavigate} from 'react-router-dom'

interface IVinyl {
  id: number;
  title: string;
  price: number;
  img: string;
  artistId: number;
}

interface Props {
  vinyl: IVinyl;
  artistName: string;
}

export default function VinylItem({ vinyl, artistName }: Props) {
  const navigate = useNavigate()
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div 
          className="card h-100" 
          onClick={() => navigate(`/vinyl/${vinyl.id}`)}
          style={{cursor: "pointer"}}
      >
        <img
          src={import.meta.env.VITE_API_URL + '/' + vinyl.img}
          className={`card-img-top ${styles.image}`}
          alt={vinyl.title}
        />
        <div className={`card-body d-flex flex-column ${styles.lowertext}`}>
          <h5 className="card-title">{vinyl.title}</h5>
          <p className="card-text text-muted mb-2">
            {artistName}
          </p>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold">{vinyl.price} ₸</span>
            <button className="btn btn-dark btn-sm">
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
