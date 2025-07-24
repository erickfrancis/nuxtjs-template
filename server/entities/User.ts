import { EntitySchema } from "typeorm"
import type { User } from "./type"

export const UserEntity = new EntitySchema<User>({
    name: "user",
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        name: {
            type: String,
        },
    },
})