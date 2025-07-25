// Types para as entidades do sistema
export interface User {
    id: string
    name: string
}

export interface AclRoute {
    id: number
    route: string
    authentication_enabled: boolean
    authentication_required: boolean
    methods: string[]
}

// Você pode adicionar mais tipos aqui conforme necessário
// Exemplo:
// export interface Post {
//     id: string
//     title: string
//     content: string
//     authorId: string
//     createdAt: Date
//     updatedAt: Date
// }
