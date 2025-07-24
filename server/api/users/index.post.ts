import { useServices } from "~~/server/utils/services"

export default defineEventHandler(async (_event) => {
  const services = useServices()

  return services.user.create({
    name: 'John Doe',
  })
}) 