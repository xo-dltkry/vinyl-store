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
}

export default class VinylStore {
    private _genres: IGenre[] = []
    private _artists: IArtist[] = []
    private _vinyls: IVinyl[] = []

    private _selectedGenre: IGenre | null = null
    private _selectedArtist: IGenre | null = null

    private _page: number = 1
    private _totalCount: number = 0
    private _limit: number = 3

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
}