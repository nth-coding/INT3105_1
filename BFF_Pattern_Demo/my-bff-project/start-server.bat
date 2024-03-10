cd server\bff
start cmd /k "node bff-server.js"

cd ..\api-gateway
start cmd /k "node api-gateway-server.js"

cd ..\graphql
start cmd /k "node graphql-server.js"

cd ..\product-service
start cmd /k "node product-service.js"

cd ..\user-service
start cmd /k "node user-service.js"