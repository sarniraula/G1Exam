export default {
    host: process.env.APP_HOST || '127.0.0.1',
    environment: process.env.NODE_ENV || 'development',
    appUrl: process.env.APP_URL || 'http://localhost:8000',
    port: process.env.APP_PORT || 8000,
}           