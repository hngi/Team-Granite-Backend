const openApiDocumentation = {
    swagger: '3.0',
    openapi: '3.0.1',
    info: {
        title: "Team Granite's Dockerized User Management Micro-Service",
        description: "A Dockerized Microservice for User Management",
        contact: {
            name: 'Team Granite'
        },

    },
    server: [
        {
            url: "http:localhost:5000",
            description: 'Local Server'
        }
    ],
    tags: [
        {
            name: 'API Auth'
        },
        {
            name: 'User CRUD Operations'
        },
        {
            name: 'Company CRUD Operations'
        }

    ],
    security:{
        'bearerAuth': {}
    },
    paths: {
        '/v1/token': {
            get:{
                tags: ['API Auth'],
                description: 'Generate Token',
                operationId: 'generateToken',
                security: [],
                parameters: [
                    {
                        name: 'email',
                        in: 'query',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/addServiceUser': {
            post:{
                tags: ['API Auth'],
                description: 'Add Service User',
                operationId: 'addServiceUser',
                security: [],
                parameters: [
                    {
                        name: 'email',
                        in: 'query',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/users': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get All Users',
                operationId: 'getUsers',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            }
        },
        '/v1/user': {
            post:{
                tags: ['CRUD Operations'],
                description: 'Add new User',
                operationId: 'addUser',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/User'
                            }
                        }
                    },
                    required: true
                },
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            }
        },
        '/v1/user/{id}': {
            delete: {
                tags: ['CRUD Operations'],
                description: 'Delete User',
                operationId: 'deleteUser',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            get: {
                tags: ['CRUD Operations'],
                description: 'Get a User',
                operationId: 'getUser',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            }
        },
        '/v1/users/{id}/firstName': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User First Name',
                operationId: 'getUserFirstName',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User First Name',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserFirstName',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/users/{id}/lastName': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Last Name',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getUserLastName',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Last Name',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserLastName',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },

        },
        '/v1/users/{id}/email': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User email',
                operationId: 'getUserEmail',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Email',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserEmail',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },

        },
        '/v1/users/{id}/phone': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Phone',
                operationId: 'getUserPhone',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Phone',
                operationId: 'setUserPhone',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/users/{id}/age': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Age',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getUserAge',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Age',
                operationId: 'setUserAge',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/users/{id}/status': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Status',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getUserStatus',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Status',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserStatus',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },

        },
        '/v1/users/{id}/gender': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Gender',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getUserGender',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Gender',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserGender',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        },
        '/v1/users/{id}/address': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Address',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getUserAddress',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User Address',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'setUserAddress',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            }
        },
        '/v1/users/status/active': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get Active User Status',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                operationId: 'getActiveUsers',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            }
        },
        '/v1/users/status/inactive': {
                get: {
                    tags: ['CRUD Operations'],
                    description: 'Get Status of inActive Users',
                    operationId: 'getInActiveUsers',
                    security: [
                        {
                            'bearerAuth': {}
                        }
                    ],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            schema: {
                                type: 'string',
                            },
                            required: true,
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Success',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Response'
                                    },
                                },
                            },
                        },
                        '400': {
                            description: 'Bad Request',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Response'
                                    },
                                },
                            },
                        }
                    }
                }
            },
        '/v1/companies/teams/{teamId}/users/{userId}':{
            get:{
                tags: ['Company CRUD Operations'],
                description: 'Add User to A Team',
                operationId: 'addUserToTeam',
                security: [
                    {
                        'bearerAuth': {}
                    }
                ],
                parameters: [
                    {
                        name: 'teamId',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    },
                    {
                        name: 'userId',
                        in: 'path',
                        schema: {
                            type: 'string',
                        },
                        required: true,
                    }
                ],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Response'
                                },
                            },
                        },
                    }
                }
            },
        }
    },
            
        
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    firstName: {
                        type: 'string',
                        description: 'User First Name'
                    },
                    lastName:{
                        type: 'string',
                        description: 'User Last Name'
                    },
                    email: {
                        type: 'string',
                        description: 'User Email Address'
                    },
                    phone: {
                        type: 'string',
                        description: 'User Phone Number'
                    },
                    age: {
                        type: 'integer',
                        description: 'User Age'
                    },
                    gender: {
                        type: 'string',
                        enum: ['MALE','FEMALE']
                    },
                    address: {
                        type: 'string',
                    }
                }
            },
            Users: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/User'
                }
            },
            Response: {
                type: 'object',
                properties: {
                    status: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    },
                    data: {
                        type: 'object'
                    }
                }
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'Authorization',
                in: 'header'
            }
        }
    }
}


module.exports = openApiDocumentation