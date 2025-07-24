import Database from './database'
import User from './user'

export default class Services {
  #database?: Database
  #user?: User

  get database () {
    this.#database ??= new Database()

    return this.#database
  }

  get user () {
    this.#user ??= new User(this)

    return this.#user
  }
}
