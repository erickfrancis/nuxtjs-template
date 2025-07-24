import Database from './database'

export default class Services {
  #database?: Database

  get database () {
    this.#database ??= new Database()

    return this.#database
  }

}
