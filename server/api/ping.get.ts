export default defineEventHandler((event) => {
    return send(event, 'pong')
})
