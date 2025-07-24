import type { Repository } from "typeorm"
import type Services from "."
import { type User, UserEntity } from "~~/server/entities"

export default class Service {
  #repository?: Repository<User>
  #services: Services

  constructor(services: Services) {
    this.#services = services
  }

  async #getRepository() {
    this.#repository ??= await this.#services.database.getRepository(UserEntity)

    return this.#repository
  }

  async findAll(): Promise<User[]> {
    return (await this.#getRepository())?.find()
  }

  async create(params: { name: string }): Promise<User | undefined> {
    return (await this.#getRepository())?.save({
      name: params.name,
    })
  }

  async deleteAll(): Promise<void> {
    const dataSource = await this.#services.database.dataSource()

    await dataSource.query('DELETE FROM user')
  }
}