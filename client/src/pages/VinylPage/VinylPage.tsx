import { useEffect, useState, useMemo } from "react";
import styles from "./VinylPage.module.css"
import { useParams } from "react-router-dom";
import { fetchOneVinyl } from "../../http/vinylAPI";
import type { IVinyl, IArtist } from "../../store/VinylStore";
import { fetchArtists } from "../../http/vinylAPI";

function VinylPage() {
  const [vinyl, setVinyl] = useState<IVinyl | null>(null)
  const [artists, setArtists] = useState<IArtist[]>([]);
  const {id} = useParams<{ id: string }>()
  useEffect(() => {
    if (!id) return;

    Promise.all([fetchOneVinyl(Number(id)), fetchArtists()])
      .then(([v, a]) => {
        setVinyl(v);
        setArtists(a);
      })
      .catch(console.error);
  }, [id]);

  const artistName = useMemo(() => {
    if (!vinyl) return "";
    return artists.find((a) => a.id === vinyl.artistId)?.name ?? "Unknown artist";
  }, [vinyl, artists]);

  if (!vinyl) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.imgcontainer}>
          <img src={import.meta.env.VITE_API_URL + '/' + vinyl.img} className={styles.vinylimg} />
        </div>
        <div className={styles.description}>
          <h1 className={styles.vinyltitle}>{vinyl.title}</h1>
          <h2 className={styles.vinylbandname}>{artistName}</h2>
          <p className={styles.vinylprice}>Price: {vinyl.price}</p>
        </div>
      </div>
    </>
  )
}

export default VinylPage;