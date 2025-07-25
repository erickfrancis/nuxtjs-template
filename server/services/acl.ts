import type { Repository } from "typeorm"
import type Services from "."
import { type AclRoute, AclRouteEntity } from "~~/server/entities"

export default class Service {
  #repository?: Repository<AclRoute>
  #services: Services

  constructor(services: Services) {
    this.#services = services
  }

  async #getRepository() {
    this.#repository ??= await this.#services.database.getRepository(AclRouteEntity)

    return this.#repository
  }

  async findByParams(route: string, method: string): Promise<AclRoute | null> {
    const repository = await this.#getRepository()
    
    return repository.findOne({
      where: {
        route,
        methods: method
      }
    })
  }
}