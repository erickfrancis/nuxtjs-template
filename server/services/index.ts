import Acl from './acl'
import Database from './database'
import User from './user'

export default class Services {
  #acl?: Acl
  #database?: Database
  #user?: User

  get acl () {
    this.#acl ??= new Acl(this)
    
    return this.#acl
  }

  get database () {
    this.#database ??= new Database()

    return this.#database
  }

  get user () {
    this.#user ??= new User(this)

    return this.#user
  }
}
