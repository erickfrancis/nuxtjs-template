import type { AclRoute } from "~~/server/entities"

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event)

  const ignoreRoutes = ['/', '/api/ping', '/api/health/ping']

  if (ignoreRoutes.includes(url.pathname)) {
    return
  }

  const services = useServices()
  const route: AclRoute | null = await services.acl.findByParams(url.pathname, event.method)

  if (route?.authentication_enabled === false) {
    return
  }

  if (/^\/api/.test(url.pathname)) {
    return sendNoContent(event, 403)
  } else {
    return sendRedirect(event, '/')
  }
})
