import { useServices } from "~~/server/utils/services"
import { UserEntity } from "~~/server/entities"

export default defineEventHandler(async (_event) => {
  const services = useServices()
  
  const repository = await services.database.getRepository(UserEntity)

  return repository.save({
    name: 'John Doe',
  })
}) 