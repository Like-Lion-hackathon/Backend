import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app) {
    app.use(
        '/login','/login2','/PostUrl','/postData',
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,

        })
    )
};