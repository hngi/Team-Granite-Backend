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
            name: 'CRUD Operations'
        }

    ],
    security:{
        'bearerAuth': {}
    },
    paths: {
        '/token': {
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
        '/addServiceUser': {
            get:{
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
        '/users': {
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
        '/user': {
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
        '/user/{id}': {
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
            // put: {
            //     tags: ['CRUD Operations'],
            //     description: 'Update User',
            //     operationId: 'updateUser',
            //     parameters: [
            //         {
            //             name: 'id',
            //             in: 'path',
            //             schema: {
            //                 type: 'string',
            //             },
            //             required: true,
            //         }
            //     ],
            //     responses: {
            //         '200': {
            //             description: 'Success',
            //             content: {
            //                 'application/json': {
            //                     schema: {
            //                         type: 'string'
            //                     },
            //                 },
            //             },
            //         },
            //         '400': {
            //             description: 'Bad Request',
            //         }
            //     }
            // },
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
        '/users/{id}/firstName': {
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
        '/users/{id}/lastName': {
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
        '/users/{id}/email': {
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
        '/users/{id}/phone': {
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
        '/users/{id}/age': {
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
        '/users/{id}/status': {
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
        '/users/{id}/gender': {
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
        '/users/{id}/address': {
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
        '/users/{id}/active': {
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
        '/users/{id}/inactive': {
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
        '/users/{id}/intern': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get Intern Users',
                operationId: 'getInternUsers',
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
                description: 'Set Intern Users',
                operationId: 'setInternUsers',
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
        },
        '/users/{id}/mentor': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get Mentor Users',
                operationId: 'getMentorUsers',
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
                description: 'Set Mentor Users',
                operationId: 'setMentorUsers',
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