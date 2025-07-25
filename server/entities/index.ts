import { UserEntity } from "./User"
import { AclRouteEntity } from "./AclRoute"

// Export das entidades
export { UserEntity, AclRouteEntity }
export default [UserEntity, AclRouteEntity]

// Export dos tipos
export type * from "./type"