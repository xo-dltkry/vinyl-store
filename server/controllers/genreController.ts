import { Genre } from "../models/models.ts"
import { ApiError } from "../error/ApiError.ts"
import type {Request, Response} from "express"

class GenreController {
  async getAll(req: Request, res: Response) {
    const genres = await Genre.findAll()
    return res.json(genres)
  }
  async create(req: Request, res: Response) { //admin
    const {name} = req.body
    const genre = await Genre.create({name})
    return res.json(genre)
  }
  async update(req: Request, res: Response) { //admin
    const {id} = req.params
    const {name} = req.body
    const genre = await Genre.findByPk(id)
    if(!genre) {
      throw ApiError.badRequest('Genre not found')
    }
    genre.set({name})
    await genre.save()
    return res.json(genre)
  }
  async delete(req: Request, res: Response) { //admin
    const {id} = req.params
    const genre = await Genre.findByPk(id as string)
    if(!genre) {
      throw ApiError.badRequest('Genre not found')
    }
    await genre.destroy()
    return res.json({message: 'Genre deleted'})
  }
}

export default new GenreController()