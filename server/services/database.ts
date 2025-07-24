import { DataSource, type Entity, type EntityTarget } from 'typeorm'
import Entities from '../entities'

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

  async getRepository (entity: EntityTarget<typeof Entity>) {
    return this.dataSource().then((dataSource) => dataSource.getRepository(entity))
  }
}
