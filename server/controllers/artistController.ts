import { Artist } from "../models/models.ts"
import { ApiError } from "../error/ApiError.ts"
import type { Request, Response } from "express"

class ArtistController {
  async getAll(req: Request, res: Response) {
    const artists = await Artist.findAll()
    return res.json(artists)
  }
  async create(req: Request, res: Response) { //admin
    const {name} = req.body
    const artist = await Artist.create({name})
    return res.json(artist)
  }
  async update(req: Request, res: Response) { //admin
    const {id} = req.params
    const {name} = req.body
    const artist = await Artist.findByPk(id)
    if(!artist) {
      throw ApiError.badRequest('Artist not found')
    }
    artist.set({name})
    await artist.save()
    return res.json(artist)
  }
  async delete(req: Request, res: Response) { //admin
    const {id} = req.params
    const artist = await Artist.findByPk(id as string)
    if(!artist) {
      throw ApiError.badRequest('Artist not found')
    }
    await artist.destroy()
    return res.json({message: 'Artist deleted'})
  }
}

export default new ArtistController()