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
        '/users': {
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
        '/users/{id}/email': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User email',
                operationId: 'getUserEmail',
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
        '/users/{id}/phone': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Phone',
                operationId: 'getUserPhone',
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
        '/users/{id}/age': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Age',
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
        '/users/{id}/status': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Status',
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
        '/users/{id}/gender': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Gender',
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
        '/users/{id}/address': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get User Address',
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
<<<<<<< HEAD
        '/users/{id}/intern': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get Intern Users',
                operationId: 'getInternUsers',
=======

        '/users/{id}/active': {
            get: {
                tags: ['CRUD Operations'],
                description: 'Get Active User Status',
                operationId: 'getActiveUsers',
>>>>>>> 07a284b47ddd05dff65bfd19a2ac70871a8c355b
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
<<<<<<< HEAD
            },
            put: {
                tags: ['CRUD Operations'],
                description: 'Set Intern Users',
                operationId: 'setInternUsers',
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
=======
            }
        },
    
        '/users/{id}/inactive': {
                get: {
                    tags: ['CRUD Operations'],
                    description: 'Get Status of inActive Users',
                    operationId: 'getInActiveUsers',
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
            }    
>>>>>>> 07a284b47ddd05dff65bfd19a2ac70871a8c355b
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
        }
    }
}


module.exports = openApiDocumentation