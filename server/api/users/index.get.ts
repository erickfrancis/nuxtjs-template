import { useServices } from "~~/server/utils/services"
import { UserEntity } from "~~/server/entities/User"

export default defineEventHandler(async (_event) => {
  const services = useServices()
  const repository = await services.database.getRepository(UserEntity)

  return repository.find()
}) 