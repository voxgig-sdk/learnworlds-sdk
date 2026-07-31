"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    main = {
        name: 'ProjectName',
    };
    feature = {
        test: {
            "options": {
                "active": false
            }
        },
    };
    options = {
        base: 'https://stoplight.io/mocks/learnworlds/api:main/2951998',
        headers: {
            "content-type": "application/json"
        },
        entity: {
            active: {},
            affiliate: {},
            assessment: {},
            bundle: {},
            by_product: {},
            by_segment: {},
            calendar: {},
            certificate: {},
            community: {},
            community_post: {},
            community_space: {},
            completed: {},
            coupon: {},
            coupon_usage: {},
            course: {},
            course_analytics: {},
            course_content: {},
            due: {},
            event: {},
            event_log: {},
            form: {},
            installment: {},
            lead: {},
            multiple_seat: {},
            payment: {},
            post: {},
            promotion: {},
            reporting: {},
            score: {},
            seat: {},
            segment: {},
            space: {},
            subscription_plan: {},
            unit: {},
            unit_analytics: {},
            upcoming: {},
            update_user_progress: {},
            user: {},
            user_group: {},
            user_progress: {},
            user_role: {},
            user_subscription: {},
        }
    };
    entity = {
        "active": {
            "fields": [],
            "name": "active",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "affiliate": {
            "fields": [
                {
                    "active": true,
                    "name": "affiliate",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "affiliate_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "billing_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "click",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "code",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "commission",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "commission_percentage",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "completed_by",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "coupon",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "customer",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "date",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "discount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "due",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "eu_customer",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "field",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "gateway",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "instructor",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "instructors_total_percentage",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 21
                },
                {
                    "active": true,
                    "name": "invoice",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 22
                },
                {
                    "active": true,
                    "name": "is_admin",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 23
                },
                {
                    "active": true,
                    "name": "is_affiliate",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 24
                },
                {
                    "active": true,
                    "name": "is_instructor",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 25
                },
                {
                    "active": true,
                    "name": "is_reporter",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 26
                },
                {
                    "active": true,
                    "name": "is_suspended",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 27
                },
                {
                    "active": true,
                    "name": "last_login",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 28
                },
                {
                    "active": true,
                    "name": "lead",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 29
                },
                {
                    "active": true,
                    "name": "nps_comment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 30
                },
                {
                    "active": true,
                    "name": "nps_score",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 31
                },
                {
                    "active": true,
                    "name": "paid_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 32
                },
                {
                    "active": true,
                    "name": "payment",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 33
                },
                {
                    "active": true,
                    "name": "payment_method",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 34
                },
                {
                    "active": true,
                    "name": "payment_note",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 35
                },
                {
                    "active": true,
                    "name": "payment_plan_current_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 36
                },
                {
                    "active": true,
                    "name": "payment_plan_total_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 37
                },
                {
                    "active": true,
                    "name": "payout",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 38
                },
                {
                    "active": true,
                    "name": "pending",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 39
                },
                {
                    "active": true,
                    "name": "period",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 40
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 41
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 42
                },
                {
                    "active": true,
                    "name": "referrer_id",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 43
                },
                {
                    "active": true,
                    "name": "refund_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 44
                },
                {
                    "active": true,
                    "name": "role",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 45
                },
                {
                    "active": true,
                    "name": "sale",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 46
                },
                {
                    "active": true,
                    "name": "signup_approval_status",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 47
                },
                {
                    "active": true,
                    "name": "subscribed_for_marketing_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 48
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 49
                },
                {
                    "active": true,
                    "name": "tax_amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 50
                },
                {
                    "active": true,
                    "name": "tax_percentage",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 51
                },
                {
                    "active": true,
                    "name": "transaction_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 52
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 53
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 54
                },
                {
                    "active": true,
                    "name": "username",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 55
                },
                {
                    "active": true,
                    "name": "utm",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 56
                }
            ],
            "name": "affiliate",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/affiliates/{id}",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/customers",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "customers"
                            ],
                            "select": {
                                "$action": "customer",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/leads",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "leads"
                            ],
                            "select": {
                                "$action": "lead",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/payments",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "payments"
                            ],
                            "select": {
                                "$action": "payment",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/payouts/completed",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "payouts",
                                "completed"
                            ],
                            "select": {
                                "$action": "payout_completed",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 3
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/payouts/due",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "payouts",
                                "due"
                            ],
                            "select": {
                                "$action": "payout_due",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 4
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates/{id}/payouts/upcoming",
                            "parts": [
                                "v2",
                                "affiliates",
                                "{id}",
                                "payouts",
                                "upcoming"
                            ],
                            "select": {
                                "$action": "payout_upcoming",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 5
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/affiliates",
                            "parts": [
                                "v2",
                                "affiliates"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 6
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "assessment": {
            "fields": [
                {
                    "active": true,
                    "name": "answer",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "general_feedback",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "grade",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "passed",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "submitted_timestamp",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 9
                }
            ],
            "name": "assessment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "form_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user",
                                        "orig": "user",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/forms/{id}/responses",
                            "parts": [
                                "v2",
                                "forms",
                                "{form_id}",
                                "responses"
                            ],
                            "rename": {
                                "param": {
                                    "id": "form_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "form_id",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "user"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user",
                                        "orig": "user",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/assessments/{id}/responses",
                            "parts": [
                                "v2",
                                "assessments",
                                "{id}",
                                "responses"
                            ],
                            "select": {
                                "$action": "response",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "user"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "form"
                    ]
                ]
            }
        },
        "bundle": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "after_purchase",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "image",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "payment_plan",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 10
                }
            ],
            "name": "bundle",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/bundles",
                            "parts": [
                                "v2",
                                "bundles"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/bundles/{id}",
                            "parts": [
                                "v2",
                                "bundles",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "by_product": {
            "fields": [],
            "name": "by_product",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "by_segment": {
            "fields": [],
            "name": "by_segment",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "calendar": {
            "fields": [
                {
                    "active": true,
                    "name": "booking_detail",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$OBJECT`"
                        ]
                    ],
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "product_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "start_date",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                }
            ],
            "name": "calendar",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "event_type",
                                        "orig": "event_type",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/school/events",
                            "parts": [
                                "v2",
                                "school",
                                "events"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "event_type",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "certificate": {
            "fields": [
                {
                    "active": true,
                    "name": "attempt",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "course_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "external_url",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "form",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "issued",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$NUMBER`"
                        }
                    },
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "provider",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "score",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "short_url",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "status",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "user",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 12
                }
            ],
            "name": "certificate",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "course_id",
                                        "orig": "course_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/certificates",
                            "parts": [
                                "v2",
                                "certificates"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "lw_client",
                                    "page",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/certificates/{id}",
                            "parts": [
                                "v2",
                                "certificates",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "remove"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/certificates/{id}",
                            "parts": [
                                "v2",
                                "certificates",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "community": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$ANY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "collection_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "data",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "display_order",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "hidden_from_community",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "is_invitation_required",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "is_members_allowed_to_view_member",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "item",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "like",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "mention",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "owner",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "posted_in",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "space_id",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "status",
                    "req": false,
                    "type": "`$ANY`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "text",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "uid",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 21
                },
                {
                    "active": true,
                    "name": "upvote",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 22
                },
                {
                    "active": true,
                    "name": "usage",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 23
                },
                {
                    "active": true,
                    "name": "user",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 24
                },
                {
                    "active": true,
                    "name": "username",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 25
                }
            ],
            "name": "community",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "space_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/community/spaces/{id}/users",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{space_id}",
                                "users"
                            ],
                            "rename": {
                                "param": {
                                    "id": "space_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "space_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "course_id",
                                        "orig": "course_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "mention",
                                        "orig": "mention",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "space_id",
                                        "orig": "space_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/posts",
                            "parts": [
                                "v2",
                                "community",
                                "posts"
                            ],
                            "select": {
                                "$action": "post",
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "items_per_page",
                                    "lw_client",
                                    "mention",
                                    "page",
                                    "space_id",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "access",
                                        "orig": "access",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "collection_id",
                                        "orig": "collection_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "usage",
                                        "orig": "usage",
                                        "reqd": false,
                                        "type": "`$ARRAY`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/spaces",
                            "parts": [
                                "v2",
                                "community",
                                "spaces"
                            ],
                            "select": {
                                "$action": "space",
                                "exist": [
                                    "access",
                                    "authorization",
                                    "collection_id",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "usage"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "space_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/spaces/{id}/users",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{space_id}",
                                "users"
                            ],
                            "rename": {
                                "param": {
                                    "id": "space_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "space_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/collections",
                            "parts": [
                                "v2",
                                "community",
                                "collections"
                            ],
                            "select": {
                                "$action": "collection",
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 3
                        }
                    ],
                    "key$": "list"
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "space_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "uid",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/community/spaces/{id}/users/{uid}",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{space_id}",
                                "users",
                                "{uid}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "space_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "space_id",
                                    "uid"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/community/spaces/{id}",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "remove"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "space"
                    ],
                    [
                        "space",
                        "user"
                    ]
                ]
            }
        },
        "community_post": {
            "fields": [
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "item",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "like",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "mention",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "posted_in",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "text",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "upvote",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "user",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 8
                }
            ],
            "name": "community_post",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/posts/{id}",
                            "parts": [
                                "v2",
                                "community",
                                "posts",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "community_space": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    },
                    "req": false,
                    "type": "`$ANY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "collection_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "hidden_from_community",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "is_invitation_required",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "is_members_allowed_to_view_member",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "owner",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "usage",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 9
                }
            ],
            "name": "community_space",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/community/spaces",
                            "parts": [
                                "v2",
                                "community",
                                "spaces"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/community/spaces/{id}",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/community/spaces/{id}",
                            "parts": [
                                "v2",
                                "community",
                                "spaces",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "completed": {
            "fields": [],
            "name": "completed",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "affiliate"
                    ]
                ]
            }
        },
        "coupon": {
            "fields": [
                {
                    "active": true,
                    "name": "bulk",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "code",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "expire",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "prefix",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "quantity",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$NUMBER`"
                        }
                    },
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "times_used",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 5
                }
            ],
            "name": "coupon",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "application/json",
                                        "kind": "header",
                                        "name": "content_type",
                                        "orig": "content_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "promotion_id",
                                        "orig": "pid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/promotions/{pid}/coupons",
                            "parts": [
                                "v2",
                                "promotions",
                                "{promotion_id}",
                                "coupons"
                            ],
                            "rename": {
                                "param": {
                                    "pid": "promotion_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "content_type",
                                    "lw_client",
                                    "promotion_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "promotion_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/promotions/{id}/coupons-bulk",
                            "parts": [
                                "v2",
                                "promotions",
                                "{promotion_id}",
                                "coupons-bulk"
                            ],
                            "rename": {
                                "param": {
                                    "id": "promotion_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "promotion_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "create"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "promotion"
                    ]
                ]
            }
        },
        "coupon_usage": {
            "fields": [
                {
                    "active": true,
                    "name": "affiliate",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "billing_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$OBJECT`"
                        ]
                    ],
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "coupon",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "discount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "gateway",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "instructor",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "instructors_total_percentage",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "invoice",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "paid_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "payment_plan_current_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "payment_plan_total_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "period",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "refund_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "tax_amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "tax_percentage",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "transaction_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 21
                }
            ],
            "name": "coupon_usage",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "cid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "promotion_id",
                                        "orig": "pid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/promotions/{pid}/coupons/{cid}/usage",
                            "parts": [
                                "v2",
                                "promotions",
                                "{promotion_id}",
                                "coupons",
                                "{id}",
                                "usage"
                            ],
                            "rename": {
                                "param": {
                                    "cid": "id",
                                    "pid": "promotion_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "page",
                                    "promotion_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "promotion"
                    ]
                ]
            }
        },
        "course": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "after_purchase",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "author",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "billing_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "category",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "course_image",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "discount_price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "drip_feed",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "eu_customer",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "expire",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$INTEGER`"
                        ]
                    ],
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "expires_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "field",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "final_price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "grade",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "identifier",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "is_admin",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "is_affiliate",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "is_instructor",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 21
                },
                {
                    "active": true,
                    "name": "is_reporter",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 22
                },
                {
                    "active": true,
                    "name": "is_suspended",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 23
                },
                {
                    "active": true,
                    "name": "label",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 24
                },
                {
                    "active": true,
                    "name": "last_login",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 25
                },
                {
                    "active": true,
                    "name": "learning_unit",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 26
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 27
                },
                {
                    "active": true,
                    "name": "nps_comment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 28
                },
                {
                    "active": true,
                    "name": "nps_score",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 29
                },
                {
                    "active": true,
                    "name": "original_price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 30
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 31
                },
                {
                    "active": true,
                    "name": "referrer_id",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 32
                },
                {
                    "active": true,
                    "name": "role",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 33
                },
                {
                    "active": true,
                    "name": "signup_approval_status",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 34
                },
                {
                    "active": true,
                    "name": "submitted_timestamp",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 35
                },
                {
                    "active": true,
                    "name": "subscribed_for_marketing_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 36
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 37
                },
                {
                    "active": true,
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 38
                },
                {
                    "active": true,
                    "name": "title_id",
                    "req": true,
                    "type": "`$STRING`",
                    "index$": 39
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 40
                },
                {
                    "active": true,
                    "name": "username",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 41
                },
                {
                    "active": true,
                    "name": "utm",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 42
                }
            ],
            "name": "course",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/courses",
                            "parts": [
                                "v2",
                                "courses"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "learning_unit",
                                        "orig": "learning_unit",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "order",
                                        "orig": "order",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user",
                                        "orig": "user",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}/grades",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}",
                                "grades"
                            ],
                            "select": {
                                "$action": "grade",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "items_per_page",
                                    "learning_unit",
                                    "lw_client",
                                    "order",
                                    "page",
                                    "sort",
                                    "user"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": "[\"draft\", \"free\"]",
                                        "kind": "query",
                                        "name": "access",
                                        "orig": "access",
                                        "reqd": false,
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "active": true,
                                        "example": "super-course,newcourse",
                                        "kind": "query",
                                        "name": "category",
                                        "orig": "category",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses",
                            "parts": [
                                "v2",
                                "courses"
                            ],
                            "select": {
                                "exist": [
                                    "access",
                                    "authorization",
                                    "category",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}/users",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}",
                                "users"
                            ],
                            "select": {
                                "$action": "user",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "items_per_page",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`",
                                        "index$": 0
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/courses/{id}",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "user"
                    ]
                ]
            }
        },
        "course_analytics": {
            "fields": [
                {
                    "active": true,
                    "name": "avg_score_rate",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "avg_time_to_finish",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "certificates_issued",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "learning_unit",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "social_interaction",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "student",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "success_rate",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "total_study_time",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "video",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "video_time",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "video_viewing_time",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 10
                }
            ],
            "name": "course_analytics",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}/analytics",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}",
                                "analytics"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "course_content": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "drip",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "learning_unit",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "section",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                }
            ],
            "name": "course_content",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "example": "a-test",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/courses/{id}/sections",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}",
                                "sections"
                            ],
                            "select": {
                                "$action": "sections",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}/contents",
                            "parts": [
                                "v2",
                                "courses",
                                "{id}",
                                "contents"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "due": {
            "fields": [],
            "name": "due",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "affiliate"
                    ]
                ]
            }
        },
        "event": {
            "fields": [],
            "name": "event",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "event_log": {
            "fields": [
                {
                    "active": true,
                    "name": "activity",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "additional_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "user",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 5
                }
            ],
            "name": "event_log",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "activity",
                                        "orig": "activity",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "1626088013",
                                        "kind": "query",
                                        "name": "created_after",
                                        "orig": "created_after",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "1626076929",
                                        "kind": "query",
                                        "name": "created_before",
                                        "orig": "created_before",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "desc",
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/event-logs",
                            "parts": [
                                "v2",
                                "event-logs"
                            ],
                            "select": {
                                "exist": [
                                    "activity",
                                    "authorization",
                                    "created_after",
                                    "created_before",
                                    "lw_client",
                                    "page",
                                    "sort",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "form": {
            "fields": [],
            "name": "form",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "installment": {
            "fields": [
                {
                    "active": true,
                    "name": "amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "current_period_end",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "current_period_start",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "ends_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "first_amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "first_installment_date",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "first_installment_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "first_installmentl_day",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "installment_interval_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "is_cancelable",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "payments_count",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "payments_payed",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "plan_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "product_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "product_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "status",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 20
                }
            ],
            "name": "installment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_type",
                                        "orig": "product_type",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/installments/active",
                            "parts": [
                                "v2",
                                "installments",
                                "active"
                            ],
                            "select": {
                                "$action": "active",
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "product_id",
                                    "product_type",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "lead": {
            "fields": [
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "eu_customer",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "first_name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "last_name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "page_submitted",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "submission",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "subscribed_for_marketing_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "user_registered_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "utm",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 11
                }
            ],
            "name": "lead",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/leads",
                            "parts": [
                                "v2",
                                "leads"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "multiple_seat": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "add_to_active_seat",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "available_seat",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "max_number_of_user",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "number_of_seat",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "seat_manager",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "success",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "total_enrollment",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 14
                }
            ],
            "name": "multiple_seat",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "seat_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "uid",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/seats/{id}/users/{uid}",
                            "parts": [
                                "v2",
                                "seats",
                                "{seat_id}",
                                "users",
                                "{uid}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "seat_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "seat_id",
                                    "uid"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/seats",
                            "parts": [
                                "v2",
                                "seats"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "seat_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "uid",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/seats/{id}/users/{uid}",
                            "parts": [
                                "v2",
                                "seats",
                                "{seat_id}",
                                "users",
                                "{uid}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "seat_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "seat_id",
                                    "uid"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "remove"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "seat",
                        "user"
                    ]
                ]
            }
        },
        "payment": {
            "fields": [
                {
                    "active": true,
                    "name": "affiliate",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "billing_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$OBJECT`"
                        ]
                    ],
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "coupon",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "discount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "expires_at",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "gateway",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "instructor",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "instructors_total_percentage",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "invoice",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "paid_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "payment_plan_current_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "payment_plan_total_payment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "period",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "refund_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "tax_amount",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "tax_percentage",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "transaction_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 21
                },
                {
                    "active": true,
                    "name": "url",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 22
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 23
                }
            ],
            "name": "payment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "affiliate_id",
                                        "orig": "affiliate_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1626854780,
                                        "kind": "query",
                                        "name": "created_after",
                                        "orig": "created_after",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1626852950,
                                        "kind": "query",
                                        "name": "created_before",
                                        "orig": "created_before",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_type",
                                        "orig": "product_type",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/payments",
                            "parts": [
                                "v2",
                                "payments"
                            ],
                            "select": {
                                "exist": [
                                    "affiliate_id",
                                    "authorization",
                                    "created_after",
                                    "created_before",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "product_id",
                                    "product_type",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/payments/{id}",
                            "parts": [
                                "v2",
                                "payments",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/payments/{id}/invoice-link",
                            "parts": [
                                "v2",
                                "payments",
                                "{id}",
                                "invoice-link"
                            ],
                            "select": {
                                "$action": "invoice_link",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "post": {
            "fields": [],
            "name": "post",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "promotion": {
            "fields": [
                {
                    "active": true,
                    "name": "applies_to_all",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "bulk",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "code",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "coupon",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "expire",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$STRING`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "prefix",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "quantity",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "times_used",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "value",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 14
                }
            ],
            "name": "promotion",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/promotions",
                            "parts": [
                                "v2",
                                "promotions"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "pid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/promotions/{pid}/coupons",
                            "parts": [
                                "v2",
                                "promotions",
                                "{id}",
                                "coupons"
                            ],
                            "rename": {
                                "param": {
                                    "pid": "id"
                                }
                            },
                            "select": {
                                "$action": "coupon",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/promotions",
                            "parts": [
                                "v2",
                                "promotions"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/promotions/{id}",
                            "parts": [
                                "v2",
                                "promotions",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "reporting": {
            "fields": [
                {
                    "active": true,
                    "name": "average_score_rate",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "completed_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "completed_unit",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "course_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "progress_per_section_unit",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "progress_rate",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "status",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "time_on_course",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "total_unit",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 8
                }
            ],
            "name": "reporting",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "1",
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/progress",
                            "parts": [
                                "v2",
                                "users",
                                "{user_id}",
                                "progress"
                            ],
                            "rename": {
                                "param": {
                                    "id": "user_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "user"
                    ]
                ]
            }
        },
        "score": {
            "fields": [],
            "name": "score",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "seat": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "available_seat",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "max_number_of_user",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "number_of_seat",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$INTEGER`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$INTEGER`"
                        }
                    },
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "product",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$OBJECT`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "seat_manager",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "total_enrollment",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 12
                }
            ],
            "name": "seat",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/seats",
                            "parts": [
                                "v2",
                                "seats"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/seats/{id}",
                            "parts": [
                                "v2",
                                "seats",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/seats/{id}",
                            "parts": [
                                "v2",
                                "seats",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "segment": {
            "fields": [],
            "name": "segment",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "space": {
            "fields": [],
            "name": "space",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "subscription_plan": {
            "fields": [
                {
                    "active": true,
                    "name": "access",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "after_purchase",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "image",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "interval",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "interval_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "price",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "product",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "stripe_plan_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "trial_period_day",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 13
                }
            ],
            "name": "subscription_plan",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/subscription-plans",
                            "parts": [
                                "v2",
                                "subscription-plans"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/subscription-plans/{id}",
                            "parts": [
                                "v2",
                                "subscription-plans",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "unit": {
            "fields": [],
            "name": "unit",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "course"
                    ]
                ]
            }
        },
        "unit_analytics": {
            "fields": [
                {
                    "active": true,
                    "name": "avg_score_rate",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "avg_study_time",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "total_study_time",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "users_completed",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "viewer",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 6
                }
            ],
            "name": "unit_analytics",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "course_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`",
                                        "index$": 0
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`",
                                        "index$": 1
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/courses/{id}/units/{uid}/analytics",
                            "parts": [
                                "v2",
                                "courses",
                                "{course_id}",
                                "units",
                                "{id}",
                                "analytics"
                            ],
                            "rename": {
                                "param": {
                                    "id": "course_id",
                                    "uid": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "course"
                    ]
                ]
            }
        },
        "upcoming": {
            "fields": [],
            "name": "upcoming",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "affiliate"
                    ]
                ]
            }
        },
        "update_user_progress": {
            "fields": [
                {
                    "active": true,
                    "name": "async",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "job_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "send_course_complete_email",
                    "req": true,
                    "type": "`$BOOLEAN`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "unit",
                    "req": true,
                    "type": "`$ARRAY`",
                    "index$": 3
                }
            ],
            "name": "update_user_progress",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "course_id",
                                        "orig": "cid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/users/{id}/courses/{cid}/complete",
                            "parts": [
                                "v2",
                                "users",
                                "{user_id}",
                                "courses",
                                "{course_id}",
                                "complete"
                            ],
                            "rename": {
                                "param": {
                                    "cid": "course_id",
                                    "id": "user_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "lw_client",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "course_id",
                                        "orig": "cid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/users/{id}/courses/{cid}/reset",
                            "parts": [
                                "v2",
                                "users",
                                "{user_id}",
                                "courses",
                                "{course_id}",
                                "reset"
                            ],
                            "rename": {
                                "param": {
                                    "cid": "course_id",
                                    "id": "user_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "lw_client",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "create"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "user",
                        "course"
                    ]
                ]
            }
        },
        "user": {
            "fields": [
                {
                    "active": true,
                    "name": "action",
                    "req": true,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "active",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "answer",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "billing_info",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "course",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "duration",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "duration_type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "email",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "eu_customer",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "expire",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "field",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "general_feedback",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "got_seat_on",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 14
                },
                {
                    "active": true,
                    "name": "grade",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NUMBER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 15
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 16
                },
                {
                    "active": true,
                    "name": "is_admin",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 17
                },
                {
                    "active": true,
                    "name": "is_affiliate",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 18
                },
                {
                    "active": true,
                    "name": "is_instructor",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 19
                },
                {
                    "active": true,
                    "name": "is_reporter",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 20
                },
                {
                    "active": true,
                    "name": "is_suspended",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 21
                },
                {
                    "active": true,
                    "name": "justification",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 22
                },
                {
                    "active": true,
                    "name": "last_login",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 23
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 24
                },
                {
                    "active": true,
                    "name": "name",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 25
                },
                {
                    "active": true,
                    "name": "nps_comment",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 26
                },
                {
                    "active": true,
                    "name": "nps_score",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 27
                },
                {
                    "active": true,
                    "name": "passed",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 28
                },
                {
                    "active": true,
                    "name": "password",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 29
                },
                {
                    "active": true,
                    "name": "price",
                    "req": true,
                    "type": "`$NUMBER`",
                    "index$": 30
                },
                {
                    "active": true,
                    "name": "product_id",
                    "req": true,
                    "type": "`$STRING`",
                    "index$": 31
                },
                {
                    "active": true,
                    "name": "product_type",
                    "req": true,
                    "type": "`$STRING`",
                    "index$": 32
                },
                {
                    "active": true,
                    "name": "referrer_id",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 33
                },
                {
                    "active": true,
                    "name": "role",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 34
                },
                {
                    "active": true,
                    "name": "send_enrollment_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 35
                },
                {
                    "active": true,
                    "name": "send_registration_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 36
                },
                {
                    "active": true,
                    "name": "signup_approval_status",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 37
                },
                {
                    "active": true,
                    "name": "signup_validation_rule",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 38
                },
                {
                    "active": true,
                    "name": "submitted_timestamp",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 39
                },
                {
                    "active": true,
                    "name": "subscribed_for_marketing_email",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$BOOLEAN`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 40
                },
                {
                    "active": true,
                    "name": "success",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 41
                },
                {
                    "active": true,
                    "name": "tag",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$ARRAY`"
                        }
                    },
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 42
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 43
                },
                {
                    "active": true,
                    "name": "type",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 44
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 45
                },
                {
                    "active": true,
                    "name": "username",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 46
                },
                {
                    "active": true,
                    "name": "utm",
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 47
                }
            ],
            "name": "user",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "score_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "",
                                        "orig": "",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/assessments/scores/{id}/review",
                            "parts": [
                                "v2",
                                "assessments",
                                "scores",
                                "{score_id}",
                                "review"
                            ],
                            "rename": {
                                "param": {
                                    "id": "score_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "",
                                    "authorization",
                                    "lw_client",
                                    "score_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_group_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/user_groups/{id}/users/{uid}",
                            "parts": [
                                "v2",
                                "user_groups",
                                "{user_group_id}",
                                "users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "user_group_id",
                                    "uid": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "user_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/users/{id}/enrollment",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "enrollment"
                            ],
                            "select": {
                                "$action": "enrollment",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/users",
                            "parts": [
                                "v2",
                                "users"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 3
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": "testvalue",
                                        "kind": "query",
                                        "name": "cf_$field_name",
                                        "orig": "cf_$field_name",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "true",
                                        "kind": "query",
                                        "name": "include_suspended",
                                        "orig": "include_suspended",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "items_per_page",
                                        "orig": "items_per_page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "1626088013",
                                        "kind": "query",
                                        "name": "registration_after",
                                        "orig": "registration_after",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "1626076929",
                                        "kind": "query",
                                        "name": "registration_before",
                                        "orig": "registration_before",
                                        "reqd": false,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "active": true,
                                        "example": "user",
                                        "kind": "query",
                                        "name": "role",
                                        "orig": "role",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "paying",
                                        "kind": "query",
                                        "name": "status",
                                        "orig": "status",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "big learner,other learner",
                                        "kind": "query",
                                        "name": "tag",
                                        "orig": "tag",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users",
                            "parts": [
                                "v2",
                                "users"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "cf_$field_name",
                                    "include_suspended",
                                    "items_per_page",
                                    "lw_client",
                                    "page",
                                    "registration_after",
                                    "registration_before",
                                    "role",
                                    "status",
                                    "tag"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "product_type",
                                        "orig": "product_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/by-product",
                            "parts": [
                                "v2",
                                "users",
                                "by-product"
                            ],
                            "select": {
                                "$action": "by_product",
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "product_id",
                                    "product_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "seat_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/seats/{id}/users",
                            "parts": [
                                "v2",
                                "seats",
                                "{seat_id}",
                                "users"
                            ],
                            "rename": {
                                "param": {
                                    "id": "seat_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "seat_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "segment_id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/by-segment",
                            "parts": [
                                "v2",
                                "users",
                                "by-segment"
                            ],
                            "select": {
                                "$action": "by_segment",
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "segment_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 3
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/courses",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "courses"
                            ],
                            "select": {
                                "$action": "course",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 4
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_group_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/user_groups/{id}/users",
                            "parts": [
                                "v2",
                                "user_groups",
                                "{user_group_id}",
                                "users"
                            ],
                            "rename": {
                                "param": {
                                    "id": "user_group_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "user_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 5
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/products",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "products"
                            ],
                            "select": {
                                "$action": "product",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 6
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/segments",
                            "parts": [
                                "v2",
                                "users",
                                "segments"
                            ],
                            "select": {
                                "$action": "segment",
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 7
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": "true",
                                        "kind": "query",
                                        "name": "include_suspended",
                                        "orig": "include_suspended",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}",
                            "parts": [
                                "v2",
                                "users",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "include_suspended",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/seats",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "seats"
                            ],
                            "select": {
                                "$action": "seat",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "load"
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "uid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_group_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/user_groups/{id}/users/{uid}",
                            "parts": [
                                "v2",
                                "user_groups",
                                "{user_group_id}",
                                "users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "user_group_id",
                                    "uid": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client",
                                    "user_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "orig": "/v2/users/{id}/enrollment",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "enrollment"
                            ],
                            "select": {
                                "$action": "enrollment",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "remove"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/users/{id}",
                            "parts": [
                                "v2",
                                "users",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/users/{id}/suspend",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "suspend"
                            ],
                            "select": {
                                "$action": "suspend",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/users/{id}/tags",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "tags"
                            ],
                            "select": {
                                "$action": "tag",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 2
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/users/{id}/unsuspend",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "unsuspend"
                            ],
                            "select": {
                                "$action": "unsuspend",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 3
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "score"
                    ],
                    [
                        "space"
                    ],
                    [
                        "seat"
                    ],
                    [
                        "user_group"
                    ]
                ]
            }
        },
        "user_group": {
            "fields": [
                {
                    "active": true,
                    "name": "assigned_course",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "assigned_seat_offering_id",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "assigned_segment_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "assigned_user_group_id",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "enroll_users_on_course",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "group_manager",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 7
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 8
                },
                {
                    "active": true,
                    "name": "max_number_of_user",
                    "req": false,
                    "type": "`$INTEGER`",
                    "index$": 9
                },
                {
                    "active": true,
                    "name": "modified",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 10
                },
                {
                    "active": true,
                    "name": "product",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$OBJECT`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "req": false,
                    "type": "`$OBJECT`",
                    "index$": 11
                },
                {
                    "active": true,
                    "name": "role_id",
                    "req": true,
                    "type": "`$STRING`",
                    "index$": 12
                },
                {
                    "active": true,
                    "name": "tag",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 13
                },
                {
                    "active": true,
                    "name": "title",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 14
                }
            ],
            "name": "user_group",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "POST",
                            "orig": "/v2/user_groups",
                            "parts": [
                                "v2",
                                "user_groups"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "create"
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/user-groups",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "user-groups"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/user_groups",
                            "parts": [
                                "v2",
                                "user_groups"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "list"
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/user_groups/{id}",
                            "parts": [
                                "v2",
                                "user_groups",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "load"
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/user_groups/{id}",
                            "parts": [
                                "v2",
                                "user_groups",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "orig": "/v2/users/{id}/user-role",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "user-role"
                            ],
                            "select": {
                                "$action": "user-role",
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "update"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "user_progress": {
            "fields": [
                {
                    "active": true,
                    "name": "section_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "unit",
                    "req": false,
                    "type": "`$ARRAY`",
                    "index$": 1
                }
            ],
            "name": "user_progress",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "course_id",
                                        "orig": "cid",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "user_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/courses/{cid}/progress",
                            "parts": [
                                "v2",
                                "users",
                                "{user_id}",
                                "courses",
                                "{course_id}",
                                "progress"
                            ],
                            "rename": {
                                "param": {
                                    "cid": "course_id",
                                    "id": "user_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "course_id",
                                    "lw_client",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "user",
                        "course"
                    ]
                ]
            }
        },
        "user_role": {
            "fields": [
                {
                    "active": true,
                    "name": "access_level",
                    "req": false,
                    "type": "`$ANY`",
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "course_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "custom_role",
                    "req": false,
                    "type": "`$BOOLEAN`",
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "description",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "revenue_share_percentage",
                    "req": false,
                    "type": "`$NUMBER`",
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "title",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                }
            ],
            "name": "user_role",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": "admin",
                                        "kind": "query",
                                        "name": "access_level",
                                        "orig": "access_level",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "example": "623337c2e7c2d86f9f17a9a3",
                                        "kind": "query",
                                        "name": "role_id",
                                        "orig": "role_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/user-roles",
                            "parts": [
                                "v2",
                                "user-roles"
                            ],
                            "select": {
                                "exist": [
                                    "access_level",
                                    "authorization",
                                    "lw_client",
                                    "role_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        },
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "active": true,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/users/{id}/user-role",
                            "parts": [
                                "v2",
                                "users",
                                "{id}",
                                "user-role"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "id",
                                    "lw_client"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.user_role`"
                            },
                            "index$": 1
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "user_subscription": {
            "fields": [
                {
                    "active": true,
                    "name": "created",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 0
                },
                {
                    "active": true,
                    "name": "email",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 1
                },
                {
                    "active": true,
                    "name": "expires_at",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$NULL`",
                            "`$NUMBER`"
                        ]
                    ],
                    "index$": 2
                },
                {
                    "active": true,
                    "name": "plan_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 3
                },
                {
                    "active": true,
                    "name": "provider",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 4
                },
                {
                    "active": true,
                    "name": "provider_meta",
                    "req": false,
                    "type": [
                        "`$ONE`",
                        [
                            "`$OBJECT`",
                            "`$NULL`"
                        ]
                    ],
                    "index$": 5
                },
                {
                    "active": true,
                    "name": "status",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 6
                },
                {
                    "active": true,
                    "name": "user_id",
                    "req": false,
                    "type": "`$STRING`",
                    "index$": 7
                }
            ],
            "name": "user_subscription",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "active": true,
                            "args": {
                                "header": [
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "header",
                                        "name": "lw_client",
                                        "orig": "lw_client",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "active": true,
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "reqd": false,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "status",
                                        "orig": "status",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "active": true,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": false,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "method": "GET",
                            "orig": "/v2/user-subscriptions",
                            "parts": [
                                "v2",
                                "user-subscriptions"
                            ],
                            "select": {
                                "exist": [
                                    "authorization",
                                    "lw_client",
                                    "page",
                                    "status",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "index$": 0
                        }
                    ],
                    "key$": "list"
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map