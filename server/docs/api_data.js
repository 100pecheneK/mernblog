define({ "api": [
  {
    "type": "post",
    "url": "/user/auth/login",
    "title": "Authenticate user",
    "version": "1.0.0",
    "name": "Login",
    "group": "Authentication",
    "description": "<p>Authenticate user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of the registered User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZjMzFlNDFiMWZhMDA0Yjk5ZDNjMzYiLCJpYXQiOjE1OTM1ODYxNDh9.z81zNeJXZviRQew-LJi5W-rqCf8XcDHL6eEn37jEqy8\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": [\n    {\n      \"msg\": \"Пожалуйста, укажите верный Email\",\n      \"param\": \"email\",\n      \"location\": \"body\"\n    },\n    {\n      \"msg\": \"Пароль обязателен\",\n      \"param\": \"password\",\n      \"location\": \"body\"\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": [\n    {\n      \"msg\": \"Неверные данные\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/user/auth/logout",
    "title": "Logout user",
    "version": "1.0.0",
    "name": "Logout",
    "group": "Authentication",
    "description": "<p>Logout user from current device</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"msg\": \"Успешный выход\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/user/authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/user/auth/logoutall",
    "title": "Logout user everywhere",
    "version": "1.0.0",
    "name": "Logout_All",
    "group": "Authentication",
    "description": "<p>Logout user from all devices</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"msg\": \"Успешный выход со всех устройств\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ]
      }
    },
    "filename": "routes/api/user/authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/user/auth/register",
    "title": "Register user",
    "version": "1.0.0",
    "name": "Register",
    "group": "Authentication",
    "description": "<p>Register new user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>of the registered User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZjMzFlNDFiMWZhMDA0Yjk5ZDNjMzYiLCJpYXQiOjE1OTM1ODYxNDh9.z81zNeJXZviRQew-LJi5W-rqCf8XcDHL6eEn37jEqy8\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": [\n    {\n      \"msg\": \"Имя обязательно\",\n      \"param\": \"name\",\n      \"location\": \"body\"\n    },\n    {\n      \"msg\": \"Пожалуйста, укажите верный Email\",\n      \"param\": \"email\",\n      \"location\": \"body\"\n    },\n    {\n      \"msg\": \"Пожалуйста, введите пароль с 6 или более символами\",\n      \"param\": \"password\",\n      \"location\": \"body\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/authentication.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/acceptRequest",
    "title": "Accept request",
    "version": "1.0.0",
    "name": "Accept_request",
    "group": "Friend",
    "description": "<p>Accepting request from user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Success\n{\n    \"msg\": \"Друг добавлен\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/addRequest",
    "title": "Add request",
    "version": "1.0.0",
    "name": "Add_request",
    "group": "Friend",
    "description": "<p>Add request to user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"msg\": \"Запрос отправлен\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/blockUser",
    "title": "Block user",
    "version": "1.0.0",
    "name": "Block_user",
    "group": "Friend",
    "description": "<p>Add user to black list</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Success\n{\n    \"msg\": \"Пользователь заблокирован\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/me/blackList",
    "title": "My black list",
    "version": "1.0.0",
    "name": "My_Black_list",
    "group": "Friend",
    "description": "<p>Get black list of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "blackList",
            "description": "<p>Friends in white list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"blackList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/me",
    "title": "My Friend List",
    "version": "1.0.0",
    "name": "My_Friends",
    "group": "Friend",
    "description": "<p>Get all friend list of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "whiteList",
            "description": "<p>Friends in white list.</p>"
          },
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "inComingList",
            "description": "<p>Incoming friend requests.</p>"
          },
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "outComingList",
            "description": "<p>Outcoming friend requests.</p>"
          },
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "blackList",
            "description": "<p>People in black list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"whiteList\": [],\n  \"inComingList\": [],\n  \"outComingList\": [],\n  \"blackList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/me/whitelist",
    "title": "My white list",
    "version": "1.0.0",
    "name": "My_White_list",
    "group": "Friend",
    "description": "<p>Get white list of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "whiteList",
            "description": "<p>Friends in white list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"whiteList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/me/incominglist",
    "title": "My incoming request",
    "version": "1.0.0",
    "name": "My_incoming_requests",
    "group": "Friend",
    "description": "<p>Get incoming request list of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "inComingList",
            "description": "<p>Friends in incoming list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"inComingList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/me/outcominglist",
    "title": "My outcoming request",
    "version": "1.0.0",
    "name": "My_outcoming_requests",
    "group": "Friend",
    "description": "<p>Get incoming request list of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "outComingList",
            "description": "<p>Friends in outcoming list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"outComingList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/rejectRequest",
    "title": "Reject request",
    "version": "1.0.0",
    "name": "Reject_request",
    "group": "Friend",
    "description": "<p>Rejecting request from user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Success\n{\n    \"msg\": \"Запрос отклонён\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/removeFriend",
    "title": "Remove friend",
    "version": "1.0.0",
    "name": "Remove_friend",
    "group": "Friend",
    "description": "<p>Remove friendship</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Success\n{\n    \"msg\": \"Друг удалён\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "put",
    "url": "/user/friend/:id/removeRequest",
    "title": "Remove request",
    "version": "1.0.0",
    "name": "Remove_request",
    "group": "Friend",
    "description": "<p>Remove request from user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>created message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Created-Response:",
          "content": "HTTP/1.1 201 Success\n{\n    \"msg\": \"Запрос отменён\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "get",
    "url": "/user/friend/:id/whitelist",
    "title": "User white list",
    "version": "1.0.0",
    "name": "Selected_user_whitelist",
    "group": "Friend",
    "description": "<p>Get white list of selected user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>User`s id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String[]",
            "optional": false,
            "field": "whiteList",
            "description": "<p>Friends in white list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"whiteList\": [],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/user/friend.js",
    "groupTitle": "Friend"
  },
  {
    "type": "delete",
    "url": "/profile/me",
    "title": "Delete user account",
    "version": "1.0.0",
    "name": "Delete_user_account",
    "group": "Profile",
    "description": "<p>Delete User, User folder and Profile</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\": \"Пользователь удалён\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/profile/me",
    "title": "Update User Profile",
    "version": "1.0.0",
    "name": "Update_User_Profile",
    "group": "Profile",
    "description": "<p>Create or update some fields in user profile</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>User bio info</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Profile owner.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "bit",
            "description": "<p>User bio.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Create-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5efc31e41b1fa004b99d3c37\",\n  \"user\": {\n    \"_id\": \"5efc31e41b1fa004b99d3c36\",\n    \"name\": \"Misha\"\n  },\n  \"createdDate\": \"2020-07-01T06:49:08.649Z\",\n  \"__v\": 0,\n  \"bio\": \"Моё био\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/profile/me/avatar",
    "title": "Change user avatar",
    "version": "1.0.0",
    "name": "User_avatar",
    "group": "Profile",
    "description": "<p>Change avatar of user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Multipart.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"multipart/form-data; boundary=<calculated when request is sent>\",\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "size": "..5MB",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "Relative",
            "description": "<p>avatar url of user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Create-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"avatar\": \"uploads/profiles/5efc31e41b1fa004b99d3c36/2020-07-01T08:54:10.878Z665bd1f3-7aa4-4250-a25f-2fc4a62e6c10.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Array of the errors objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Bad Request-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errors\": [\n    {\n      \"msg\": \"Аватар обязателен\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "get",
    "url": "/profile/me",
    "title": "User info",
    "version": "1.0.0",
    "name": "User_me",
    "group": "Profile",
    "description": "<p>Get info of authenticated user</p>",
    "permission": [
      {
        "name": "user",
        "title": "Authenticated User",
        "description": "<p>User with valid token</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWU4YWI5MWZlMTk5ZjE1YzYyYTQzM2UiLCJpYXQiOjE1OTIzMDc0NDh9.DqgT0RH6g1Mm8fpbXYz6Bf4KGnsUxo-Vk-UNKmvptjk\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of User Profile.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Relative avatar url of user.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object.</p>"
          },
          {
            "group": "200",
            "type": "ObjectId",
            "optional": false,
            "field": "user._id",
            "description": "<p>ID of User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Name of User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Date when profile has been created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"_id\": \"5efc31e41b1fa004b99d3c37\",\n  \"avatar\": \"uploads/default/default.jpg\",\n  \"user\": {\n      \"_id\": \"5efc31e41b1fa004b99d3c36\",\n      \"name\": \"Misha\"\n  },\n  \"createdDate\": \"2020-07-01T06:49:08.649Z\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/api/profile.js",
    "groupTitle": "Profile"
  }
] });
