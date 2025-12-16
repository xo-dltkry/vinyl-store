import sequelize from '../db.ts';
import {DataTypes} from 'sequelize'

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Vinyl = sequelize.define('vinyl', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false}
})

const VinylInfo = sequelize.define('vinyl_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, allowNull: false},
  tracklist: {type: DataTypes.STRING, allowNull: false}
})

const Artist = sequelize.define('artist', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

const Genre = sequelize.define('genre', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true}
})

export interface IUser {
  id: number;
  email: string;
  role: string;
  password: string;
}

Artist.hasMany(Vinyl)
Vinyl.belongsTo(Artist)

Genre.hasMany(Vinyl)
Vinyl.belongsTo(Genre)

Vinyl.hasOne(VinylInfo, {as: 'info', foreignKey: 'vinylId'})
VinylInfo.belongsTo(Vinyl, {foreignKey: 'vinylId'})

export {User, Vinyl, VinylInfo, Artist, Genre};