import VinylItem from "./VinylItem";

interface IArtist {
  id: number;
  name: string;
}

interface IVinyl {
  id: number;
  title: string;
  price: number;
  img: string;
  artistId: number;
}

interface Props {
  vinyls: IVinyl[];
  artists: IArtist[];
}

export default function VinylList({ vinyls, artists }: Props) {
  return (
    <div className="row g-3">
      {vinyls.map((v) => {
        const artistName =
          artists.find((a) => a.id === v.artistId)?.name || "Unknown";

        return (
          <VinylItem
            key={v.id}
            vinyl={v}
            artistName={artistName}
          />
        );
      })}
    </div>
  );
}
