import { useServices } from "~~/server/utils/services"

export default defineEventHandler(async (_event) => {
  const services = useServices()

  await services.user.deleteAll()

  return {
    success: true,
  }
}) 