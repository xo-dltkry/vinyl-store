import {makeAutoObservable} from "mobx";

export interface IGenre {
    id: number;
    name: string;
}

export interface IArtist {
    id: number;
    name: string;
}

export interface IVinyl {
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