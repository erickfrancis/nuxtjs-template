import { EntitySchema } from "typeorm"
import type { AclRoute } from "./type"

export const AclRouteEntity = new EntitySchema<AclRoute>({
    name: "acl_route",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        route: {
            type: "varchar"
        },
        authentication_enabled: {
            type: "boolean"
        },
        authentication_required: {
            type: "boolean"
        },
        methods: {
            type: "simple-array"
        }
    }
})
