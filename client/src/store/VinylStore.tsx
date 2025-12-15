import {makeAutoObservable} from "mobx";

interface IGenre {
    id: number;
    name: string;
}

interface IArtist {
    id: number;
    name: string;
}

interface IVinyl {
    id: number;
    title: string;
    price: number;
    img: string;
    genreId: number;
    artistId: number;
}

export default class VinylStore {
    private _genres: IGenre[] = []
    private _artists: IArtist[] = []
    private _vinyls: IVinyl[] = []

    private _selectedGenre: IGenre | null = null
    private _selectedArtist: IArtist | null = null

    private _page: number = 1
    private _totalCount: number = 0
    private _limit: number = 3
    private _searchQuery: string = ""

    constructor() {
        makeAutoObservable(this)
        this.seed()
    }

    private seed() {
    const genres: IGenre[] = [
      { id: 1, name: "Rock" },
      { id: 2, name: "Jazz" },
      { id: 3, name: "Hip-Hop" },
      { id: 4, name: "Electronic" },
    ];

    const artists: IArtist[] = [
      { id: 1, name: "Pink Floyd" },
      { id: 2, name: "Miles Davis" },
      { id: 3, name: "Kendrick Lamar" },
      { id: 4, name: "Daft Punk" },
    ];

    const vinyls: IVinyl[] = [
      {
        id: 1,
        title: "The Dark Side of the Moon",
        price: 12990,
        img: "https://picsum.photos/600/400?vinyl=1",
        genreId: 1,
        artistId: 1,
      },
      {
        id: 2,
        title: "Kind of Blue",
        price: 10500,
        img: "https://picsum.photos/600/400?vinyl=2",
        genreId: 2,
        artistId: 2,
      },
      {
        id: 3,
        title: "Random Access Memories",
        price: 15000,
        img: "https://picsum.photos/600/400?vinyl=3",
        genreId: 4,
        artistId: 4,
      },
      {
        id: 4,
        title: "DAMN.",
        price: 11900,
        img: "https://picsum.photos/600/400?vinyl=4",
        genreId: 3,
        artistId: 3,
      },
    ];

    this._genres = genres;
    this._artists = artists;
    this._vinyls = vinyls;
    this._totalCount = vinyls.length;
    }

    setGenres(genres: IGenre[]) {
        this._genres = genres
    }
    setArtists(artists: IArtist[]) {
        this._artists = artists
    }
    setVinyls(vinyls: IVinyl[]) {
        this._vinyls = vinyls
    }

    setSelectedGenre(genre: IGenre | null) {
        this.setPage(1)
        this._selectedGenre = genre
    }
    setSelectedArtist(artist: IArtist | null) {
        this.setPage(1)
        this._selectedArtist = artist
    }
    setPage(page: number) {
        this._page = page
    }
    setTotalCount(count: number) {
        this._totalCount = count
    }
    setSearchQuery(query: string) {
        this._searchQuery = query
    }

    get genres() {
        return this._genres
    }
    get artists() {
        return this._artists
    }
    get vinyls() {
        return this._vinyls
    }
    get selectedGenre() {
        return this._selectedGenre
    }
    get selectedArtist() {
        return this._selectedArtist
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get searchQuery() {
        return this._searchQuery
    }
    get filteredVinyls() {
        const q = this._searchQuery.trim().toLowerCase();
        if (!q) return this._vinyls;
        return this._vinyls.filter((v) => {
            const artistName =
            this._artists.find((a) => a.id === v.artistId)?.name.toLowerCase() || "";

            const matchTitle = v.title.toLowerCase().includes(q);
            const matchArtist = artistName.includes(q);

            return matchTitle || matchArtist;
        });
    }
}