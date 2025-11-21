import { Vinyl, VinylInfo} from "../models/models.ts"
import { ApiError } from "../error/ApiError.ts"
import type { Request, Response, NextFunction } from "express"
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import type { UploadedFile } from "express-fileupload"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class VinylController {
  async getAll(req: Request, res: Response) {
    const {artistId, genreId} = req.query
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 9

    let offset = page * limit - limit
    let vinyls

    if(!artistId && !genreId) {
      vinyls = await Vinyl.findAndCountAll({limit, offset})
    }
    if(artistId && !genreId) {
      vinyls = await Vinyl.findAll({where:{artistId}, limit, offset})
    }
    if(!artistId && genreId) {
      vinyls = await Vinyl.findAll({where: {genreId}, limit, offset})
    }
    if(artistId && genreId) {
      vinyls = await Vinyl.findAll({where: {artistId, genreId}, limit, offset})
    }

    return res.json(vinyls)
  }
  async getOne(req: Request, res: Response) {
    const id = Number(req.params.id)
    const vinyl = await Vinyl.findByPk(id, {
      include: [{ model: VinylInfo, as: 'info' }]
    })
    return res.json(vinyl)
  }
  async create(req: Request, res: Response, next: NextFunction) { //admin
    try {
      let {title, price, artistId, genreId, info} = req.body
      if (!req.files || !req.files.img) {
        return res.status(400).json({ message: 'No image uploaded' });
      }
      const img = req.files.img as UploadedFile
      let fileName = uuidv4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const vinyl = await Vinyl.create({title, price, artistId, genreId, img: fileName})
      if(info) {
        const parsed = JSON.parse(info)
        for(const i of parsed) {
          await VinylInfo.create({
            description: i.description,
            trackList: i.trackList,
            vinylId: (vinyl as any).id
          })
        }
      }
      return res.json(vinyl)
    } catch(e: any){
      next(ApiError.badRequest(e.message))
    } 
  }
  async update(req: Request, res: Response) { //admin
    const {id} = req.params
    const vinyl = await Vinyl.findByPk(id)
    if(!vinyl) {
      throw ApiError.badRequest('Vinyl not found')
    }
    vinyl.set(req.body)
    await vinyl.save()
    return res.json(vinyl)
  }
  async delete(req: Request, res: Response) { //admin
    const {id} = req.params
    const vinyl = await Vinyl.findByPk(id)
    if(!vinyl) {
      throw ApiError.badRequest('Vinyl not found')
    }
    await vinyl.destroy()
    return res.json({message: 'Vinyl deleted'})
  }
}

export default new VinylController()