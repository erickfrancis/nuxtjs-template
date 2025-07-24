import { useServices } from "~~/server/utils/services"

export default defineEventHandler(async (_event) => {
  const services = useServices()
  const dataSource = await services.database.dataSource()

  await dataSource.query('DELETE FROM user')

  return {
    success: true,
  }
}) 