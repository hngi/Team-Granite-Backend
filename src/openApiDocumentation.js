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
            name: 'CRUD Operations'
        }
    ],
    paths: {
        '/getAllUsers': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get All Users',
                operationId: 'getUsers',
                parameters: [],
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Users',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                    }
                }
            }
        },
        '/addUser': {
            post:{
                tags: ['CRUD Operations'],
                description: 'Add new User',
                operationId: 'addUser',
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
                                    $ref: '#/components/schemas/User',
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request',
                    }
                }
            }
        },
        '/deleteUser/{id}': {
            delete: {
                tags: ['CRUD Operations'],
                description: 'Delete User',
                operationId: 'deleteUser',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/updateUser/{id}': {
            put: {
                tags: ['CRUD Operations'],
                description: 'Update User',
                operationId: 'updateUser',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/getUser/{id}': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User',
                operationId: 'getUser',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/getUserFirstName/{id}/firstName': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User First Name',
                operationId: 'getUserFirstName',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/setUserFirstName/{id}/firstName': {
            put: {
                tags: ['CRUD Operations'],
                description: 'Set User First Name',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/getUserLastName/{id}/lastName': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Last Name',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
        },
        '/setUserLastName/{id}/lastName': {
            put: {
                tags: ['CRUD Operations'],
                description: 'Get User Last Name',
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
            },
            responses: {
                '200': {
                    description: 'Success',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'string'
                            },
                        },
                    },
                },
                '400': {
                    description: 'Bad Request',
                }
            }
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
                    }
                }
            },
            Users: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/User'
                }
            }
        }
    }
}

module.exports = openApiDocumentation