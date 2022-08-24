Running with Caddy
    caddy run -config ./Caddyfile

Validate OpenAPI 
    openapi-generator-cli validate -i customer_oas.yaml


Generating code (client)
    https://openapi-generator.tech/docs/generators/

    openapi-generator-cli generate -i customer_oas.yaml -g python -o src
