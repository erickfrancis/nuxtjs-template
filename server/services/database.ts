import { DataSource, type ObjectLiteral, type EntityTarget, type Repository } from 'typeorm'
import Entities from '~~/server/entities'

export default class Service {
  #data_source: DataSource

  constructor () {
    this.#data_source = new DataSource({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: Entities,
      synchronize: true,
    })
  }

  async dataSource () {
    if (!this.#data_source.isInitialized) {
      await this.#data_source.initialize()
    }

    return this.#data_source
  }

  async disconnect () {
    await this.#data_source.destroy()
  }

  async getRepository<T extends ObjectLiteral> (entity: EntityTarget<T>): Promise<Repository<T>> {
    return (await this.dataSource()).getRepository<T>(entity)
  }
}
