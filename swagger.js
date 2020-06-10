
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Team Granite's Dockerized User Management Micro-Service",
            description: "A Dockerized Microservice for User Management",
            contact: {
                name: 'Team Granite'
            },
            server: ["http:localhost:5000"]
        }
    },
    apis: ['./src/routes/*.js']
}

export default swaggerOptions;

