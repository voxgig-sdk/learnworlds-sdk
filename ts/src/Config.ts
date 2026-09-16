
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Learnworlds',
        slug: "learnworlds",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://stoplight.io/mocks/learnworlds/api:main/2951998",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      active: {
      },

      affiliate: {
      },

      assessment: {
      },

      bundle: {
      },

      by_product: {
      },

      by_segment: {
      },

      calendar: {
      },

      certificate: {
      },

      community: {
      },

      community_post: {
      },

      community_space: {
      },

      completed: {
      },

      coupon: {
      },

      coupon_usage: {
      },

      course: {
      },

      course_analytics: {
      },

      course_content: {
      },

      due: {
      },

      event: {
      },

      event_log: {
      },

      form: {
      },

      installment: {
      },

      lead: {
      },

      multiple_seat: {
      },

      payment: {
      },

      post: {
      },

      promotion: {
      },

      reporting: {
      },

      score: {
      },

      seat: {
      },

      segment: {
      },

      space: {
      },

      subscription_plan: {
      },

      unit: {
      },

      unit_analytics: {
      },

      upcoming: {
      },

      update_user_progress: {
      },

      user: {
      },

      user_group: {
      },

      user_progress: {
      },

      user_role: {
      },

      user_subscription: {
      },

    }
  }


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
          "name": "affiliate",
          "short": "Related affiliate data",
          "type": "`$OBJECT`"
        },
        {
          "name": "affiliateId",
          "short": "Unique identifier of the affiliate",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "amount",
          "short": "Amount of the payout",
          "type": "`$NUMBER`"
        },
        {
          "name": "billing_info",
          "short": "Values of the billing info fields for this user",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "clicks",
          "short": "Number of referral link clicks",
          "type": "`$INTEGER`"
        },
        {
          "name": "code",
          "short": "Unique affiliate code",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "commission_percentage",
          "short": "This is the percentage of the sale that goes to the affiliate.",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "commissions",
          "short": "Total commission amount",
          "type": "`$NUMBER`"
        },
        {
          "name": "completedBy",
          "type": "`$OBJECT`"
        },
        {
          "name": "coupon",
          "short": "Coupon code",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the user was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "customers",
          "short": "Number of referred customers",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "date",
          "short": "Datetime the affiliation was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "discount",
          "short": "Discount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "due",
          "short": "Total amount of due payouts",
          "type": "`$NUMBER`"
        },
        {
          "name": "email",
          "short": "Email account of the user",
          "type": "`$STRING`"
        },
        {
          "name": "eu_customer",
          "short": "Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "fields",
          "short": "Default sign up fields for the School.",
          "type": "`$OBJECT`"
        },
        {
          "name": "gateway",
          "short": "Payment gateway name",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        },
        {
          "name": "instructors",
          "short": "Related instructor data",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "instructors_total_percentage",
          "short": "Total percentage of the revenue for the instructor",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "invoice",
          "short": "Invoice identifier",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "is_admin",
          "short": "Indication about whether the user is an administrator of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_affiliate",
          "short": "Indication about whether the user is an affiliate of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_instructor",
          "short": "Indication about whether the user is an instructor in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_reporter",
          "short": "Indication about whether the user is an reporter in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_suspended",
          "short": "Indication about whether the user is suspended in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "float",
          "name": "last_login",
          "short": "Date of the last login of the user, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "leads",
          "short": "Number of leads",
          "type": "`$INTEGER`"
        },
        {
          "name": "nps_comment",
          "short": "The latest comment submitted by the user on the NPS form.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "nps_score",
          "short": "The latest NPS score submitted by the user.",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "paid_at",
          "short": "Payment date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "paymentMethod",
          "short": "Payment method",
          "type": "`$STRING`"
        },
        {
          "name": "paymentNotes",
          "short": "Payment notes",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_current_payment",
          "short": "Current payment number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_total_payments",
          "short": "Total payments number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payments",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "payouts",
          "short": "Total amount of completed payouts",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "pending",
          "short": "Total amount of upcoming payouts",
          "type": "`$NUMBER`"
        },
        {
          "name": "period",
          "short": "Payment plan period",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "product",
          "short": "Related product data",
          "type": "`$OBJECT`"
        },
        {
          "name": "referrer_id",
          "short": "Unique user id of the referrer for this user",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "refund_at",
          "short": "Refund date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "role",
          "short": "Values of the role fields for this user",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "sales",
          "short": "Sales total amount",
          "type": "`$NUMBER`"
        },
        {
          "name": "signup_approval_status",
          "short": "User status regarding the Signup Approval flow",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "subscribed_for_marketing_emails",
          "short": "Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tags",
          "short": "Array of the tags of the user",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "tax_amount",
          "short": "Tax amount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "tax_percentage",
          "short": "Tax percentage of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "transaction_id",
          "short": "Transaction id of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "Username of the user",
          "type": "`$STRING`"
        },
        {
          "name": "utms",
          "short": "Values of the UTM fields for this user",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "affiliate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/affiliates/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "affiliates",
                "{id}"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/customers",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "customers"
                }
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
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "customers"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/leads",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "leads"
                }
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
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "leads"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/payments",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "payments"
                }
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
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "payments"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/payouts/completed",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "payouts"
                },
                {
                  "lit": "completed"
                }
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
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "payouts",
                "completed"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/payouts/due",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "payouts"
                },
                {
                  "lit": "due"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "payouts",
                "due"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates/{id}/payouts/upcoming",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "payouts"
                },
                {
                  "lit": "upcoming"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "affiliates",
                "{id}",
                "payouts",
                "upcoming"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/affiliates",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "affiliates"
                }
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
              "parts": [
                "v2",
                "affiliates"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "assessment": {
      "fields": [
        {
          "name": "answers",
          "short": "Related answers data",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the submission was created (started), in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "email",
          "short": "Email account of the user who submitted the responses",
          "type": "`$STRING`"
        },
        {
          "name": "generalFeedback",
          "short": "General feedback for a submission",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "grade",
          "short": "The grade that corresponds to the responses provided by the user",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the submission of responses by the user specified by the user id",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the submission was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "passed",
          "short": "Indication about whether or not the assessment result was passed or failed",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "submittedTimestamp",
          "short": "Date the submission was finished (submitted), in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user who submitted the responses",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "assessment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "form_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "user",
                    "orig": "user",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/forms/{id}/responses",
              "rename": {
                "param": {
                  "id": "form_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "forms"
                },
                {
                  "var": "form_id"
                },
                {
                  "lit": "responses"
                }
              ],
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
              "parts": [
                "v2",
                "forms",
                "{form_id}",
                "responses"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "user",
                    "orig": "user",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/assessments/{id}/responses",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "assessments"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "responses"
                }
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
              "parts": [
                "v2",
                "assessments",
                "{id}",
                "responses"
              ]
            }
          ]
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
          "name": "access",
          "short": "Access type of the bundle",
          "type": "`$STRING`"
        },
        {
          "name": "afterPurchase",
          "short": "After purchase navigation settings for this bundle",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the bundle was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Bundle description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the bundle",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "Bundle image (full URL)",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the bundle was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "paymentPlans",
          "short": "Payment plans associated with the bundle.",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the bundle",
          "type": "`$NUMBER`"
        },
        {
          "name": "products",
          "short": "Products in the bundle",
          "type": "`$OBJECT`"
        },
        {
          "name": "title",
          "short": "Title of the bundle",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "bundle",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/bundles",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "bundles"
                }
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
              "parts": [
                "v2",
                "bundles"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/bundles/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "bundles"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "bundles",
                "{id}"
              ]
            }
          ]
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
          "name": "bookingDetails",
          "short": "Booking details of the event.",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$OBJECT`"
            ]
          ]
        },
        {
          "name": "productId",
          "short": "Unique identifier of the product",
          "type": "`$STRING`"
        },
        {
          "name": "startDate",
          "short": "Start date of the event, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "title",
          "short": "Title of the event",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the event",
          "type": "`$STRING`"
        }
      ],
      "name": "calendar",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "event_type",
                    "orig": "event_type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/school/events",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "school"
                },
                {
                  "lit": "events"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "school",
                "events"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "certificate": {
      "fields": [
        {
          "format": "float",
          "name": "attempts",
          "short": "Number of attempts",
          "type": "`$INTEGER`"
        },
        {
          "name": "course_id",
          "short": "Unique identifier of the course",
          "type": "`$STRING`"
        },
        {
          "name": "external_url",
          "short": "External URL of the certificate; null if provider is LearnWorlds",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "form",
          "op": {
            "update": {
              "req": true,
              "type": "`$OBJECT`"
            }
          },
          "short": "Form data of the certificate",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the certificate",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "issued",
          "op": {
            "update": {
              "req": true,
              "type": "`$NUMBER`"
            }
          },
          "short": "Date the certification was issued, in Unix timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "provider",
          "short": "Provider of the certificate",
          "type": "`$STRING`"
        },
        {
          "name": "score",
          "short": "Score of the certificate",
          "type": "`$STRING`"
        },
        {
          "name": "short_url",
          "short": "Short URL of the certificate",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "status",
          "short": "Status of the certificate",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the certificate",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the certificate",
          "type": "`$STRING`"
        },
        {
          "name": "user",
          "short": "User related data",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "certificate",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "course_id",
                    "orig": "course_id",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/certificates",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "certificates"
                }
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
              "parts": [
                "v2",
                "certificates"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/certificates/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "certificates"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "certificates",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/certificates/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "certificates"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "certificates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "community": {
      "fields": [
        {
          "name": "access",
          "short": "Access type of the space",
          "type": "`$ANY`"
        },
        {
          "name": "collectionId",
          "short": "Unique identifier of the collection under which the space is displayed",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the post was made, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the space",
          "type": "`$STRING`"
        },
        {
          "name": "display_order",
          "short": "Display order of the collection as it appears in the community sidebar",
          "type": "`$INTEGER`"
        },
        {
          "name": "hidden_from_community",
          "short": "Indication about whether the space is visible in the community",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the post",
          "type": "`$STRING`"
        },
        {
          "name": "invitation",
          "short": "Indication whether the user was sent an invitation.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_invitation_required",
          "short": "Indication about whether users are sent an invitation to join or are directly added to space",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_members_allowed_to_view_members",
          "short": "Indication about whether users can view other users in space",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "items",
          "short": "List of post content items outside of text content",
          "type": "`$ARRAY`"
        },
        {
          "name": "likes",
          "short": "List of users who have liked the post",
          "type": "`$ARRAY`"
        },
        {
          "name": "mentions",
          "short": "User mentions of the post",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the collection was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "short": "Name of the collection",
          "type": "`$STRING`"
        },
        {
          "name": "owner",
          "short": "Information about the space owner",
          "type": "`$OBJECT`"
        },
        {
          "name": "posted_in",
          "short": "Information about where the post was made",
          "type": "`$OBJECT`"
        },
        {
          "name": "space_ids",
          "short": "List of spaces in this collection",
          "type": "`$ARRAY`"
        },
        {
          "name": "status",
          "short": "The status of the user - `joined`, the user has joined the space - `invited`, the user has been sent an invitation to gain access to the space - `deleted`, the user has been removed from the space - `left`, the user has left the space",
          "type": "`$ANY`"
        },
        {
          "name": "text",
          "short": "Text content of the post",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Name of the space",
          "type": "`$STRING`"
        },
        {
          "name": "uids",
          "short": "Unique identifiers or emails of the users to be invited/added",
          "type": "`$ARRAY`"
        },
        {
          "name": "upvotes",
          "short": "List of users who have upvoted the post",
          "type": "`$ARRAY`"
        },
        {
          "name": "usages",
          "short": "List of space usages in the platform",
          "type": "`$ARRAY`"
        },
        {
          "name": "user",
          "short": "Information about the post author",
          "type": "`$OBJECT`"
        },
        {
          "name": "username",
          "short": "The username of the user",
          "type": "`$STRING`"
        },
        {
          "name": "users",
          "short": "List of users that were added or invited to space",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "community",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "space_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/community/spaces/{id}/users",
              "rename": {
                "param": {
                  "id": "space_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "space_id"
                },
                {
                  "lit": "users"
                }
              ],
              "select": {
                "exist": [
                  "authorization",
                  "lw_client",
                  "space_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "community",
                "spaces",
                "{space_id}",
                "users"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "course_id",
                    "orig": "course_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "mention",
                    "orig": "mention",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "space_id",
                    "orig": "space_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/posts",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "posts"
                }
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
              "parts": [
                "v2",
                "community",
                "posts"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "access",
                    "orig": "access",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "collection_id",
                    "orig": "collection_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "usage",
                    "orig": "usage",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/spaces",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                }
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
              "parts": [
                "v2",
                "community",
                "spaces"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "space_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/spaces/{id}/users",
              "rename": {
                "param": {
                  "id": "space_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "space_id"
                },
                {
                  "lit": "users"
                }
              ],
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
              "parts": [
                "v2",
                "community",
                "spaces",
                "{space_id}",
                "users"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/collections",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "collections"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "community",
                "collections"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "space_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "uid",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/community/spaces/{id}/users/{uid}",
              "rename": {
                "param": {
                  "id": "space_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "space_id"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "uid"
                }
              ],
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
              "parts": [
                "v2",
                "community",
                "spaces",
                "{space_id}",
                "users",
                "{uid}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/community/spaces/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "community",
                "spaces",
                "{id}"
              ]
            }
          ]
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
          "format": "float",
          "name": "created",
          "short": "Date the post was made, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the post",
          "type": "`$STRING`"
        },
        {
          "name": "items",
          "short": "List of post content items outside of text content",
          "type": "`$ARRAY`"
        },
        {
          "name": "likes",
          "short": "List of users who have liked the post",
          "type": "`$ARRAY`"
        },
        {
          "name": "mentions",
          "short": "User mentions of the post",
          "type": "`$ARRAY`"
        },
        {
          "name": "posted_in",
          "short": "Information about where the post was made",
          "type": "`$OBJECT`"
        },
        {
          "name": "text",
          "short": "Text content of the post",
          "type": "`$STRING`"
        },
        {
          "name": "upvotes",
          "short": "List of users who have upvoted the post",
          "type": "`$ARRAY`"
        },
        {
          "name": "user",
          "short": "Information about the post author",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "community_post",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/posts/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "posts"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "community",
                "posts",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "community_space": {
      "fields": [
        {
          "name": "access",
          "op": {
            "create": {
              "req": true,
              "type": "`$ANY`"
            }
          },
          "short": "Access type of the space",
          "type": "`$ANY`"
        },
        {
          "name": "collectionId",
          "short": "Unique identifier of the collection under which the space is displayed",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of the space",
          "type": "`$STRING`"
        },
        {
          "name": "hidden_from_community",
          "short": "Indication about whether the space is visible in the community",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the space",
          "type": "`$STRING`"
        },
        {
          "name": "is_invitation_required",
          "short": "Indication about whether users are sent an invitation to join or are directly added to space",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_members_allowed_to_view_members",
          "short": "Indication about whether users can view other users in space",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "owner",
          "short": "Information about the space owner",
          "type": "`$OBJECT`"
        },
        {
          "name": "title",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Name of the space",
          "type": "`$STRING`"
        },
        {
          "name": "usages",
          "short": "List of space usages in the platform",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "community_space",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/community/spaces",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                }
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
              "parts": [
                "v2",
                "community",
                "spaces"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/community/spaces/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "community",
                "spaces",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/community/spaces/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "community"
                },
                {
                  "lit": "spaces"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "community",
                "spaces",
                "{id}"
              ]
            }
          ]
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
          "name": "bulk",
          "short": "Indication about whether there's a bulk set of codes created for this coupon.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "code",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Coupon code",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "expires",
          "short": "Coupon expiration date, in YYYY-MM-DD format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "prefix",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Coupon prefix",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "quantity",
          "op": {
            "create": {
              "req": true,
              "type": "`$NUMBER`"
            }
          },
          "short": "Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "times_used",
          "short": "Coupon number of times used.",
          "type": "`$INTEGER`"
        }
      ],
      "name": "coupon",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "application/json",
                    "kind": "header",
                    "name": "content_type",
                    "orig": "content_type",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "promotion_id",
                    "orig": "pid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/promotions/{pid}/coupons",
              "rename": {
                "param": {
                  "pid": "promotion_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                },
                {
                  "var": "promotion_id"
                },
                {
                  "lit": "coupons"
                }
              ],
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
              "parts": [
                "v2",
                "promotions",
                "{promotion_id}",
                "coupons"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "promotion_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/promotions/{id}/coupons-bulk",
              "rename": {
                "param": {
                  "id": "promotion_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                },
                {
                  "var": "promotion_id"
                },
                {
                  "lit": "coupons-bulk"
                }
              ],
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
              "parts": [
                "v2",
                "promotions",
                "{promotion_id}",
                "coupons-bulk"
              ]
            }
          ]
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
          "name": "affiliate",
          "short": "Related affiliate data",
          "type": "`$OBJECT`"
        },
        {
          "name": "billing_info",
          "short": "Billing info of the payment",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$OBJECT`"
            ]
          ]
        },
        {
          "name": "coupon",
          "short": "Coupon code",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "created",
          "short": "Datetime of the payment was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "discount",
          "short": "Discount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "gateway",
          "short": "Payment gateway name",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "instructors",
          "short": "Related instructor data",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "instructors_total_percentage",
          "short": "Total percentage of the revenue for the instructor",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "invoice",
          "short": "Invoice identifier",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "paid_at",
          "short": "Payment date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_current_payment",
          "short": "Current payment number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_total_payments",
          "short": "Total payments number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "period",
          "short": "Payment plan period",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "product",
          "short": "Related product data",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "refund_at",
          "short": "Refund date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "tax_amount",
          "short": "Tax amount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "tax_percentage",
          "short": "Tax percentage of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "transaction_id",
          "short": "Transaction id of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "coupon_usage",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "cid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "promotion_id",
                    "orig": "pid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/promotions/{pid}/coupons/{cid}/usage",
              "rename": {
                "param": {
                  "cid": "id",
                  "pid": "promotion_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                },
                {
                  "var": "promotion_id"
                },
                {
                  "lit": "coupons"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "usage"
                }
              ],
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
              "parts": [
                "v2",
                "promotions",
                "{promotion_id}",
                "coupons",
                "{id}",
                "usage"
              ]
            }
          ]
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
          "name": "access",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Access type of course",
          "type": "`$STRING`"
        },
        {
          "name": "afterPurchase",
          "short": "After purchase navigation settings for this course",
          "type": "`$OBJECT`"
        },
        {
          "name": "author",
          "short": "Information about the course author",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "billing_info",
          "short": "Values of the billing info fields for this user",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "categories",
          "short": "Categories this course belongs in",
          "type": "`$ARRAY`"
        },
        {
          "name": "courseImage",
          "short": "Course image (full URL)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the course was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the course",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "discount_price",
          "short": "Discount price of the course",
          "type": "`$NUMBER`"
        },
        {
          "name": "dripFeed",
          "short": "Course setting for scheduled course delivery (drip feed); none refers to drip feed not being enabled.",
          "type": "`$STRING`"
        },
        {
          "name": "email",
          "short": "Email account of the user who submitted the responses",
          "type": "`$STRING`"
        },
        {
          "name": "eu_customer",
          "short": "Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "expires",
          "short": "Expiration timeframe value, defines the expiration timeframe, together with the type / unit in the \"expiresType\" field.",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$INTEGER`"
            ]
          ]
        },
        {
          "name": "expiresType",
          "short": "Expiration timeframe type / unit, defines the expiration timeframe, together with the actual value in the \"expires\" field.",
          "type": "`$STRING`"
        },
        {
          "name": "fields",
          "short": "Default sign up fields for the School.",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "final_price",
          "short": "Final price of the course",
          "type": "`$NUMBER`"
        },
        {
          "name": "grade",
          "short": "The grade that corresponds to the responses provided by the user",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the course",
          "type": "`$STRING`"
        },
        {
          "name": "identifiers",
          "short": "Course identifiers for in app purchases.",
          "type": "`$OBJECT`"
        },
        {
          "name": "is_admin",
          "short": "Indication about whether the user is an administrator of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_affiliate",
          "short": "Indication about whether the user is an affiliate of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_instructor",
          "short": "Indication about whether the user is an instructor in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_reporter",
          "short": "Indication about whether the user is an reporter in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_suspended",
          "short": "Indication about whether the user is suspended in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "label",
          "short": "Label of the course",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "last_login",
          "short": "Date of the last login of the user, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "learningUnit",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the course was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "nps_comment",
          "short": "The latest comment submitted by the user on the NPS form.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "nps_score",
          "short": "The latest NPS score submitted by the user.",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "original_price",
          "short": "Original price of the course",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the course",
          "type": "`$NUMBER`"
        },
        {
          "name": "referrer_id",
          "short": "Unique user id of the referrer for this user",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "role",
          "short": "Values of the role fields for this user",
          "type": "`$OBJECT`"
        },
        {
          "name": "signup_approval_status",
          "short": "User status regarding the Signup Approval flow",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "submittedTimestamp",
          "short": "Date the submission was finished (submitted), in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "subscribed_for_marketing_emails",
          "short": "Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tags",
          "short": "Array of the tags of the user",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Title of the course",
          "type": "`$STRING`"
        },
        {
          "name": "titleId",
          "req": true,
          "short": "Unique identifier of the course title.",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user who submitted the responses",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "short": "Username of the user",
          "type": "`$STRING`"
        },
        {
          "name": "utms",
          "short": "Values of the UTM fields for this user",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "course",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/courses",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                }
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
              "parts": [
                "v2",
                "courses"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "learning_unit",
                    "orig": "learning_unit",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "order",
                    "orig": "order",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user",
                    "orig": "user",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}/grades",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "grades"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}",
                "grades"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "[\"draft\", \"free\"]",
                    "kind": "query",
                    "name": "access",
                    "orig": "access",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "super-course,newcourse",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                }
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
              "parts": [
                "v2",
                "courses"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}/users",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "users"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}",
                "users"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/courses/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}"
              ]
            }
          ]
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
          "format": "float",
          "name": "avg_score_rate",
          "short": "Average score (%)",
          "type": "`$NUMBER`"
        },
        {
          "name": "avg_time_to_finish",
          "short": "Average time to finish the course in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "certificates_issued",
          "short": "Number of issued certifications",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "learning_units",
          "short": "Number of learning activities",
          "type": "`$INTEGER`"
        },
        {
          "name": "social_interactions",
          "short": "Number of social interactions",
          "type": "`$INTEGER`"
        },
        {
          "name": "students",
          "short": "Number of students",
          "type": "`$INTEGER`"
        },
        {
          "format": "float",
          "name": "success_rate",
          "short": "Success rate (%)",
          "type": "`$NUMBER`"
        },
        {
          "name": "total_study_time",
          "short": "Total study time in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "video_time",
          "short": "Total video duration of the course in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "video_viewing_time",
          "short": "Total video time viewed",
          "type": "`$INTEGER`"
        },
        {
          "name": "videos",
          "short": "Number of videos",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "course_analytics",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}/analytics",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "analytics"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}",
                "analytics"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "course_content": {
      "fields": [
        {
          "name": "access",
          "short": "Access type of the section",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description of the section",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "drip",
          "short": "Drip feed details of the content.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the section",
          "type": "`$STRING`"
        },
        {
          "name": "learningUnits",
          "short": "Learning activities of section",
          "type": "`$ARRAY`"
        },
        {
          "name": "sections",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Title of the section",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "course_content",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "example": "a-test",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/courses/{id}/sections",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "sections"
                }
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
              "parts": [
                "v2",
                "courses",
                "{id}",
                "sections"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}/contents",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "contents"
                }
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
                "res": "`body.sections`"
              },
              "parts": [
                "v2",
                "courses",
                "{id}",
                "contents"
              ]
            }
          ]
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
          "name": "activity",
          "short": "Name of the activity",
          "type": "`$STRING`"
        },
        {
          "name": "additional_info",
          "short": "Additional info related to the activity.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the event log was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the activity",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the activity",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "user",
          "short": "User details related to event log",
          "type": "`$OBJECT`"
        }
      ],
      "name": "event_log",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "activity",
                    "orig": "activity",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "1626088013",
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "1626076929",
                    "kind": "query",
                    "name": "created_before",
                    "orig": "created_before",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "desc",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/event-logs",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "event-logs"
                }
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
              "parts": [
                "v2",
                "event-logs"
              ]
            }
          ]
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
          "format": "float",
          "name": "amount",
          "short": "Amount per installment",
          "type": "`$NUMBER`"
        },
        {
          "name": "current_period_end",
          "short": "End of the current period that the installment has been invoiced for, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "current_period_start",
          "short": "Start of the current period that the installment has been invoiced for, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "email",
          "short": "Email of the user",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "ends_at",
          "short": "Datetime the installment ends, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "firstAmount",
          "short": "Ιnitial amount of money the customers have to pay up front.",
          "type": "`$NUMBER`"
        },
        {
          "format": "date",
          "name": "firstInstallmentDate",
          "short": "Date of the first installment, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "firstInstallmentType",
          "short": "Type of the first installment",
          "type": "`$STRING`"
        },
        {
          "name": "firstInstallmentlDays",
          "short": "Number of days since the first installment",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the installment",
          "type": "`$STRING`"
        },
        {
          "name": "installmentIntervalType",
          "short": "How much time between each installment",
          "type": "`$STRING`"
        },
        {
          "name": "isCancelable",
          "short": "Indication about whether the installment can be canceled; true if it is cancelable, or false if it is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "short": "Name of the installment",
          "type": "`$STRING`"
        },
        {
          "name": "paymentsCount",
          "short": "Number of payments of the installment",
          "type": "`$NUMBER`"
        },
        {
          "name": "paymentsPayed",
          "short": "Number of completed payments of the installment",
          "type": "`$NUMBER`"
        },
        {
          "name": "plan_id",
          "short": "Unique identifier of the subscription plan",
          "type": "`$STRING`"
        },
        {
          "name": "productId",
          "short": "Unique identifier of the product",
          "type": "`$STRING`"
        },
        {
          "name": "productType",
          "short": "Type of the product",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Status of the installment",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the installment",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "installment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "product_id",
                    "orig": "product_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "product_type",
                    "orig": "product_type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/installments/active",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "installments"
                },
                {
                  "lit": "active"
                }
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
              "parts": [
                "v2",
                "installments",
                "active"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "lead": {
      "fields": [
        {
          "format": "float",
          "name": "created",
          "short": "Date the lead was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "email",
          "short": "Email account of the user",
          "type": "`$STRING`"
        },
        {
          "name": "eu_customer",
          "short": "Indication of whether the user is located in Europe; true if she is, or false if she's not located in Europe.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "first_name",
          "short": "First Name of the user",
          "type": "`$STRING`"
        },
        {
          "name": "last_name",
          "short": "Last name of the user",
          "type": "`$STRING`"
        },
        {
          "name": "page_submitted",
          "short": "Page of the academy, in which the lead submitted their email account",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "submissions",
          "short": "Array of the all the submissions of this email account in lead capture forms of the academy",
          "type": "`$ARRAY`"
        },
        {
          "name": "subscribed_for_marketing_emails",
          "short": "Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "tags",
          "short": "Array of the tags of the user",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "user_id",
          "short": "The unique identifier of the respective user",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "user_registered_at",
          "short": "Date the respective lead was also registered as a user, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "utms",
          "short": "Values of the UTM fields for this user",
          "type": "`$OBJECT`"
        }
      ],
      "name": "lead",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/leads",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "leads"
                }
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
              "parts": [
                "v2",
                "leads"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "multiple_seat": {
      "fields": [
        {
          "deprecated": true,
          "name": "access",
          "short": "Access status of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "add_to_active_seat",
          "short": "Indication about whether the user is assigned a seat in the seat offering; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "available_seats",
          "short": "Number of available seats in the offering.",
          "type": "`$INTEGER`"
        },
        {
          "name": "created",
          "short": "Date the seat offering was created; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "max_number_of_users",
          "short": "Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.",
          "type": "`$INTEGER`"
        },
        {
          "name": "modified",
          "short": "Date the seat offering was modified for the last time; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "number_of_seats",
          "short": "Number of the seats in the offering.",
          "type": "`$INTEGER`"
        },
        {
          "name": "products",
          "short": "Products in the seat offering",
          "type": "`$OBJECT`"
        },
        {
          "name": "seat_managers",
          "short": "Unique identifier of each seat manager.",
          "type": "`$ARRAY`"
        },
        {
          "name": "success",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "tags",
          "short": "Tags assigned to the users added to the seat offering.",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Title of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "total_enrollments",
          "short": "Total enrollements of the seat offering.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "multiple_seat",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "seat_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "uid",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/seats/{id}/users/{uid}",
              "rename": {
                "param": {
                  "id": "seat_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                },
                {
                  "var": "seat_id"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "uid"
                }
              ],
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
              "parts": [
                "v2",
                "seats",
                "{seat_id}",
                "users",
                "{uid}"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/seats",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                }
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
              "parts": [
                "v2",
                "seats"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "seat_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "uid",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/seats/{id}/users/{uid}",
              "rename": {
                "param": {
                  "id": "seat_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                },
                {
                  "var": "seat_id"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "uid"
                }
              ],
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
              "parts": [
                "v2",
                "seats",
                "{seat_id}",
                "users",
                "{uid}"
              ]
            }
          ]
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
          "name": "affiliate",
          "short": "Related affiliate data",
          "type": "`$OBJECT`"
        },
        {
          "name": "billing_info",
          "short": "Billing info of the payment",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$OBJECT`"
            ]
          ]
        },
        {
          "name": "coupon",
          "short": "Coupon code",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "created",
          "short": "Datetime of the payment was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "discount",
          "short": "Discount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "expires_at",
          "short": "Date the invoice expires, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "gateway",
          "short": "Payment gateway name",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "instructors",
          "short": "Related instructor data",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "instructors_total_percentage",
          "short": "Total percentage of the revenue for the instructor",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "invoice",
          "short": "Invoice identifier",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "paid_at",
          "short": "Payment date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_current_payment",
          "short": "Current payment number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "payment_plan_total_payments",
          "short": "Total payments number of payment plan",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "period",
          "short": "Payment plan period",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "product",
          "short": "Related product data",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "refund_at",
          "short": "Refund date, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "tax_amount",
          "short": "Tax amount of the payment",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "tax_percentage",
          "short": "Tax percentage of the payment",
          "type": "`$NUMBER`"
        },
        {
          "name": "transaction_id",
          "short": "Transaction id of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the payment",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Url of invoice",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "payment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "affiliate_id",
                    "orig": "affiliate_id",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1626854780,
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 1626852950,
                    "kind": "query",
                    "name": "created_before",
                    "orig": "created_before",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "product_id",
                    "orig": "product_id",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "product_type",
                    "orig": "product_type",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/payments",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "payments"
                }
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
              "parts": [
                "v2",
                "payments"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/payments/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "payments"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "payments",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/payments/{id}/invoice-link",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "payments"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "invoice-link"
                }
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
              "parts": [
                "v2",
                "payments",
                "{id}",
                "invoice-link"
              ]
            }
          ]
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
          "name": "applies_to_all",
          "short": "All courses and/or bundles that the promotion coupon will be applied to.",
          "type": "`$ARRAY`"
        },
        {
          "name": "bulk",
          "short": "Indication about whether there's a bulk set of codes created for this coupon.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "code",
          "short": "Coupon code",
          "type": "`$STRING`"
        },
        {
          "name": "coupons",
          "short": "Promotion coupons",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the promotion was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "format": "date",
          "name": "expires",
          "short": "Coupon expiration date, in YYYY-MM-DD format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the promotion",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the promotion was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Name of the promotion",
          "type": "`$STRING`"
        },
        {
          "name": "prefix",
          "short": "Coupon prefix",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "products",
          "short": "Specific products that the promotion coupon will be applied to",
          "type": "`$ARRAY`"
        },
        {
          "name": "quantity",
          "short": "Number of redemptions that are allowed for this coupon (null as a value means that there is no limit in how many times a coupon can be redeemed)",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "times_used",
          "short": "Coupon number of times used.",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "short": "Type of discount",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "value",
          "short": "Percentage or fixed amount of discount",
          "type": "`$NUMBER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "promotion",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/promotions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                }
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
              "parts": [
                "v2",
                "promotions"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "pid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/promotions/{pid}/coupons",
              "rename": {
                "param": {
                  "pid": "id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "coupons"
                }
              ],
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "promotions",
                "{id}",
                "coupons"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/promotions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                }
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
              "parts": [
                "v2",
                "promotions"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/promotions/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "promotions"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "promotions",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "reporting": {
      "fields": [
        {
          "format": "float",
          "name": "average_score_rate",
          "short": "Average score percentage",
          "type": "`$NUMBER`"
        },
        {
          "name": "completed_at",
          "short": "Completion date in UNIX timestamp format.",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "completed_units",
          "short": "Total number of completed course learning activities by the user",
          "type": "`$INTEGER`"
        },
        {
          "name": "course_id",
          "short": "Unique identifier of the course",
          "type": "`$STRING`"
        },
        {
          "name": "progress_per_section_unit",
          "short": "User progress data per section/learning activity",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "progress_rate",
          "short": "Progress rate (%)",
          "type": "`$NUMBER`"
        },
        {
          "name": "status",
          "short": "Status of user progress",
          "type": "`$STRING`"
        },
        {
          "name": "time_on_course",
          "short": "Time spent on the course in seconds",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_units",
          "short": "Total number of course learning activities",
          "type": "`$INTEGER`"
        }
      ],
      "name": "reporting",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "user_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "1",
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/progress",
              "rename": {
                "param": {
                  "id": "user_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "user_id"
                },
                {
                  "lit": "progress"
                }
              ],
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
              "parts": [
                "v2",
                "users",
                "{user_id}",
                "progress"
              ]
            }
          ]
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
          "deprecated": true,
          "name": "access",
          "short": "Access status of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "available_seats",
          "short": "Number of available seats in the offering.",
          "type": "`$INTEGER`"
        },
        {
          "name": "created",
          "short": "Date the seat offering was created; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "max_number_of_users",
          "short": "Max number of users who can be added to a seat offering; empty if there is no limit to the number of users who can be added.",
          "type": "`$INTEGER`"
        },
        {
          "name": "modified",
          "short": "Date the seat offering was modified for the last time; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "number_of_seats",
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
          "short": "Number of the seats in the offering.",
          "type": "`$INTEGER`"
        },
        {
          "name": "products",
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
          "short": "Products in the seat offering",
          "type": "`$OBJECT`"
        },
        {
          "name": "seat_managers",
          "short": "Unique identifier of each seat manager.",
          "type": "`$ARRAY`"
        },
        {
          "name": "tags",
          "short": "Tags assigned to the users added to the seat offering.",
          "type": "`$ARRAY`"
        },
        {
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
          "short": "Title of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "total_enrollments",
          "short": "Total enrollements of the seat offering.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "seat",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/seats",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                }
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
              "parts": [
                "v2",
                "seats"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/seats/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "seats",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/seats/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "seats",
                "{id}"
              ]
            }
          ]
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
          "name": "access",
          "short": "Access type of the subscription",
          "type": "`$STRING`"
        },
        {
          "name": "afterPurchase",
          "short": "After purchase navigation settings for this subscription plan",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the subscription plan was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the subscription",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the subscription plan",
          "type": "`$STRING`"
        },
        {
          "name": "image",
          "short": "Subscription plan image (full URL)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "interval",
          "short": "Billing interval value",
          "type": "`$INTEGER`"
        },
        {
          "name": "interval_type",
          "short": "Billing interval type",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the subscription plan was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "price",
          "short": "Price of the subscription plan",
          "type": "`$NUMBER`"
        },
        {
          "name": "products",
          "short": "Products in the subsription",
          "type": "`$OBJECT`"
        },
        {
          "name": "stripePlanId",
          "short": "Stripe's plan Id",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the subscription plan",
          "type": "`$STRING`"
        },
        {
          "name": "trial_period_days",
          "short": "Number of days the trial subscription plan lasts",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "subscription_plan",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscription-plans",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscription-plans"
                }
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
              "parts": [
                "v2",
                "subscription-plans"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/subscription-plans/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "subscription-plans"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "subscription-plans",
                "{id}"
              ]
            }
          ]
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
          "format": "float",
          "name": "avg_score_rate",
          "short": "Average score (%)",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "avg_study_time",
          "short": "Average study time in seconds",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the learning activity",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "total_study_time",
          "short": "Total study time in seconds",
          "type": "`$NUMBER`"
        },
        {
          "name": "type",
          "short": "Type of the learning activity",
          "type": "`$STRING`"
        },
        {
          "name": "users_completed",
          "short": "Number of users that have completed this learning activity",
          "type": "`$INTEGER`"
        },
        {
          "name": "viewers",
          "short": "Number of users that have viewed this learning activity",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "unit_analytics",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "course_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/courses/{id}/units/{uid}/analytics",
              "rename": {
                "param": {
                  "id": "course_id",
                  "uid": "id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "course_id"
                },
                {
                  "lit": "units"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "analytics"
                }
              ],
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
              "parts": [
                "v2",
                "courses",
                "{course_id}",
                "units",
                "{id}",
                "analytics"
              ]
            }
          ]
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
          "name": "async",
          "short": "Indication about whether the request will be executed asynchronously; true if it’s an asynchronous task, false if it is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "job_id",
          "short": "Unique identifier of the asynchronous task; empty if the task is not asynchronous.” Ensure that the documentation link is accordingly updated",
          "type": "`$STRING`"
        },
        {
          "name": "send_course_complete_email",
          "req": true,
          "short": "Indication about whether the user will receive the completion emails; true if she should receive the emails, false if she should not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "units",
          "req": true,
          "short": "Unique identifiers of the learning activities that should be marked as complete; empty if the progress of the whole course should be marked as complete.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "update_user_progress",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "course_id",
                    "orig": "cid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "user_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/users/{id}/courses/{cid}/complete",
              "rename": {
                "param": {
                  "cid": "course_id",
                  "id": "user_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "user_id"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "course_id"
                },
                {
                  "lit": "complete"
                }
              ],
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
              "parts": [
                "v2",
                "users",
                "{user_id}",
                "courses",
                "{course_id}",
                "complete"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "course_id",
                    "orig": "cid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "user_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/users/{id}/courses/{cid}/reset",
              "rename": {
                "param": {
                  "cid": "course_id",
                  "id": "user_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "user_id"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "course_id"
                },
                {
                  "lit": "reset"
                }
              ],
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
              "parts": [
                "v2",
                "users",
                "{user_id}",
                "courses",
                "{course_id}",
                "reset"
              ]
            }
          ]
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
          "name": "action",
          "req": true,
          "short": "The exact action to be performed with the aforementioned tags to the specified user; 'attach' is the indication to add these tags to the user and 'detach' is the indication to remove them from the user.",
          "type": "`$STRING`"
        },
        {
          "name": "active",
          "short": "True or false whether user is active in seat offering",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "answers",
          "short": "Related answers data",
          "type": "`$ARRAY`"
        },
        {
          "name": "billing_info",
          "short": "Values of the billing info fields for this user",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "course",
          "type": "`$OBJECT`"
        },
        {
          "format": "float",
          "name": "created",
          "short": "Date the user was created, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the segment",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "duration",
          "short": "Duration of the product.",
          "type": "`$INTEGER`"
        },
        {
          "name": "duration_type",
          "short": "Duration type of the product.",
          "type": "`$STRING`"
        },
        {
          "name": "email",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Email account of the user",
          "type": "`$STRING`"
        },
        {
          "name": "eu_customer",
          "short": "Indication about whether the user is located in Europe; true if she is, or false if she is not located in Europe.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "expires",
          "short": "Date the enrollment expires, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "fields",
          "short": "Default sign up fields for the School.",
          "type": "`$OBJECT`"
        },
        {
          "name": "generalFeedback",
          "short": "General feedback for a submission",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "got_seat_on",
          "short": "Date user was added to the seat offering, in UNIX timestamp",
          "type": "`$NUMBER`"
        },
        {
          "name": "grade",
          "short": "The grade that corresponds to the responses provided by the user",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        },
        {
          "name": "is_admin",
          "short": "Indication about whether the user is an administrator of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_affiliate",
          "short": "Indication about whether the user is an affiliate of the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_instructor",
          "short": "Indication about whether the user is an instructor in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_reporter",
          "short": "Indication about whether the user is an reporter in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_suspended",
          "short": "Indication about whether the user is suspended in the school; true if she is, or false if she is not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "justification",
          "short": "Any justification/note for the enrollment",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "last_login",
          "short": "Date of the last login of the user, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "format": "float",
          "name": "modified",
          "short": "Date the submission was modified for the last time, in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "name",
          "short": "Name of the segment",
          "type": "`$STRING`"
        },
        {
          "name": "nps_comment",
          "short": "The latest comment submitted by the user on the NPS form.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "nps_score",
          "short": "The latest NPS score submitted by the user.",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "passed",
          "short": "Indication about whether or not the assessment result was passed or failed",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "password",
          "short": "Password of the user",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "price",
          "req": true,
          "short": "Price of the product",
          "type": "`$NUMBER`"
        },
        {
          "name": "productId",
          "req": true,
          "short": "Unique identifier of the product",
          "type": "`$STRING`"
        },
        {
          "name": "productType",
          "req": true,
          "short": "Type of the product",
          "type": "`$STRING`"
        },
        {
          "name": "referrer_id",
          "short": "Unique user id of the referrer for this user",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "role",
          "short": "Values of the role fields for this user",
          "type": "`$OBJECT`"
        },
        {
          "name": "send_enrollment_email",
          "short": "Indication about whether the user should receive the enrollment email; true if she should receive the email, false if she should not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "send_registration_email",
          "short": "Indication about whether the user will receive the registration emails; true if she should receive the emails, false if she should not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "signup_approval_status",
          "short": "User status regarding the Signup Approval flow",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "signup_validation_rules",
          "short": "Indication about whether validation rules should be applied; default value equals to false, which means that validation rules should not be applied.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "float",
          "name": "submittedTimestamp",
          "short": "Date the submission was finished (submitted), in UNIX timestamp format",
          "type": "`$NUMBER`"
        },
        {
          "name": "subscribed_for_marketing_emails",
          "short": "Indication about whether the user has agreed to receive marketing emails; true if she has agreed and thus should receive marketing emails, or false if she has not.",
          "type": [
            "`$ONE`",
            [
              "`$BOOLEAN`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "success",
          "short": "Indication about whether the action of the enrollment was successful; true if it was successful, or false if it was not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "tags",
          "op": {
            "update": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "Array of the tags of the user",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Title of the seat offering.",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Type of the product",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user who submitted the responses",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Username of the user",
          "type": "`$STRING`"
        },
        {
          "name": "utms",
          "short": "Values of the UTM fields for this user",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "user_group_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/user_groups/{id}/users/{uid}",
              "rename": {
                "param": {
                  "id": "user_group_id",
                  "uid": "id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                },
                {
                  "var": "user_group_id"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
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
              "parts": [
                "v2",
                "user_groups",
                "{user_group_id}",
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/users/{id}/enrollment",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "enrollment"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "enrollment"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "score_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/assessments/scores/{id}/review",
              "rename": {
                "param": {
                  "id": "score_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "assessments"
                },
                {
                  "lit": "scores"
                },
                {
                  "var": "score_id"
                },
                {
                  "lit": "review"
                }
              ],
              "select": {
                "exist": [
                  "authorization",
                  "lw_client",
                  "score_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "v2",
                "assessments",
                "scores",
                "{score_id}",
                "review"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/users",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                }
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
              "parts": [
                "v2",
                "users"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "testvalue",
                    "kind": "query",
                    "name": "cf_$field_name",
                    "orig": "cf_$field_name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "true",
                    "kind": "query",
                    "name": "include_suspended",
                    "orig": "include_suspended",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "items_per_page",
                    "orig": "items_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "1626088013",
                    "kind": "query",
                    "name": "registration_after",
                    "orig": "registration_after",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "1626076929",
                    "kind": "query",
                    "name": "registration_before",
                    "orig": "registration_before",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "user",
                    "kind": "query",
                    "name": "role",
                    "orig": "role",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "paying",
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "big learner,other learner",
                    "kind": "query",
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                }
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
              "parts": [
                "v2",
                "users"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "product_id",
                    "orig": "product_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "product_type",
                    "orig": "product_type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/by-product",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "by-product"
                }
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
              "parts": [
                "v2",
                "users",
                "by-product"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "seat_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/seats/{id}/users",
              "rename": {
                "param": {
                  "id": "seat_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "seats"
                },
                {
                  "var": "seat_id"
                },
                {
                  "lit": "users"
                }
              ],
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
              "parts": [
                "v2",
                "seats",
                "{seat_id}",
                "users"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "segment_id",
                    "orig": "segment_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/by-segment",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "by-segment"
                }
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
              "parts": [
                "v2",
                "users",
                "by-segment"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/courses",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "courses"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "courses"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "user_group_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/user_groups/{id}/users",
              "rename": {
                "param": {
                  "id": "user_group_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                },
                {
                  "var": "user_group_id"
                },
                {
                  "lit": "users"
                }
              ],
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
              "parts": [
                "v2",
                "user_groups",
                "{user_group_id}",
                "users"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/products",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "products"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "users",
                "{id}",
                "products"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/segments",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "lit": "segments"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "users",
                "segments"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "true",
                    "kind": "query",
                    "name": "include_suspended",
                    "orig": "include_suspended",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/seats",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "seats"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "seats"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "uid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "user_group_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/user_groups/{id}/users/{uid}",
              "rename": {
                "param": {
                  "id": "user_group_id",
                  "uid": "id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                },
                {
                  "var": "user_group_id"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
              ],
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
              "parts": [
                "v2",
                "user_groups",
                "{user_group_id}",
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/v2/users/{id}/enrollment",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "enrollment"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "enrollment"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/users/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/users/{id}/suspend",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "suspend"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "suspend"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/users/{id}/tags",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "tags"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "tags"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/users/{id}/unsuspend",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "unsuspend"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "unsuspend"
              ]
            }
          ]
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
          "name": "assigned_courses",
          "short": "Courses to be assigned to the instructor; empty if the user is not an instructor or if no courses should be assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "assigned_seat_offering_ids",
          "short": "Unique identifier of the seat offerings to be assigned to the seat manager; empty if the user is not a seat manager or if no offerings should be assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "assigned_segment_id",
          "short": "Unique identifier of the segment to be assigned to the reporter; empty if the user is not a reporter or if no segment should be assigned to the user.",
          "type": "`$STRING`"
        },
        {
          "name": "assigned_user_group_ids",
          "short": "Unique identifier of the user groups to be assigned to the user group manager; empty if the user is not a group manager or if no groups should be assigned to the user.",
          "type": "`$ARRAY`"
        },
        {
          "name": "created",
          "short": "Date the user group was created; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "description",
          "short": "Description of the user group.",
          "type": "`$STRING`"
        },
        {
          "name": "enroll_users_on_courses",
          "short": "Enroll users in all selected courses automatically upon joining the user group.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "group_managers",
          "short": "Unique identifier of each group manager.",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the user group.",
          "type": "`$STRING`"
        },
        {
          "name": "max_number_of_users",
          "short": "Max number of users who can be added to a user group; empty if there is no limit to the number of users who can be added.",
          "type": "`$INTEGER`"
        },
        {
          "name": "modified",
          "short": "Date the user group was modified for the last time; displayed in UNIX timestamp format.",
          "type": "`$NUMBER`"
        },
        {
          "name": "products",
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
          "short": "Products in the user group",
          "type": "`$OBJECT`"
        },
        {
          "name": "role_id",
          "req": true,
          "short": "Unique identifier of the new user role",
          "type": "`$STRING`"
        },
        {
          "name": "tags",
          "short": "Tags assigned to the users added to the user group.",
          "type": "`$ARRAY`"
        },
        {
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
          "short": "Title of the user group.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_group",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/v2/user_groups",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                }
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
              "parts": [
                "v2",
                "user_groups"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/user-groups",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "user-groups"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "user-groups"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/user_groups",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                }
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
              "parts": [
                "v2",
                "user_groups"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/user_groups/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "user_groups",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/user_groups/{id}",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user_groups"
                },
                {
                  "var": "id"
                }
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
              "parts": [
                "v2",
                "user_groups",
                "{id}"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/v2/users/{id}/user-role",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "user-role"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "user-role"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_progress": {
      "fields": [
        {
          "name": "section_id",
          "short": "Unique identifier of the section",
          "type": "`$STRING`"
        },
        {
          "name": "units",
          "short": "User progress data per unit",
          "type": "`$ARRAY`"
        }
      ],
      "name": "user_progress",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "course_id",
                    "orig": "cid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "user_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/courses/{cid}/progress",
              "rename": {
                "param": {
                  "cid": "course_id",
                  "id": "user_id"
                }
              },
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "user_id"
                },
                {
                  "lit": "courses"
                },
                {
                  "var": "course_id"
                },
                {
                  "lit": "progress"
                }
              ],
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
                "res": "`body.progress_per_section_unit`"
              },
              "parts": [
                "v2",
                "users",
                "{user_id}",
                "courses",
                "{course_id}",
                "progress"
              ]
            }
          ]
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
          "name": "access_level",
          "short": "Access level of the user role",
          "type": "`$ANY`"
        },
        {
          "name": "course_id",
          "short": "Unique identifier of the course assigned to the instructor.",
          "type": "`$STRING`"
        },
        {
          "name": "custom_role",
          "short": "`true` if role is a custom role created by school owner",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "description",
          "short": "Description of the user role",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier of the role",
          "type": "`$STRING`"
        },
        {
          "name": "revenue_share_percentage",
          "short": "Instructor's revenue share (% ) from the assigned course e.g.",
          "type": "`$NUMBER`"
        },
        {
          "name": "title",
          "short": "Title of the role",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "user_role",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "admin",
                    "kind": "query",
                    "name": "access_level",
                    "orig": "access_level",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "623337c2e7c2d86f9f17a9a3",
                    "kind": "query",
                    "name": "role_id",
                    "orig": "role_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/user-roles",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user-roles"
                }
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
                "res": "`body.data`"
              },
              "parts": [
                "v2",
                "user-roles"
              ]
            },
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/users/{id}/user-role",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "users"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "user-role"
                }
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
              "parts": [
                "v2",
                "users",
                "{id}",
                "user-role"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "user_subscription": {
      "fields": [
        {
          "format": "float",
          "name": "created",
          "short": "Date the subscription was created, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "email",
          "short": "Email of the user",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "expires_at",
          "short": "Date the subscription expires, in UNIX timestamp format",
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$NUMBER`"
            ]
          ]
        },
        {
          "name": "plan_id",
          "short": "Unique identifier of the subscription plan",
          "type": "`$STRING`"
        },
        {
          "name": "provider",
          "short": "Provider of the subscription",
          "type": "`$STRING`"
        },
        {
          "name": "provider_meta",
          "short": "Metadata of the subscription provider.",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "status",
          "short": "Status of the subscription",
          "type": "`$STRING`"
        },
        {
          "name": "user_id",
          "short": "Unique identifier of the user",
          "type": "`$STRING`"
        }
      ],
      "name": "user_subscription",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "header": [
                  {
                    "kind": "header",
                    "name": "authorization",
                    "orig": "authorization",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "header",
                    "name": "lw_client",
                    "orig": "lw_client",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "user_id",
                    "orig": "user_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v2/user-subscriptions",
              "segments": [
                {
                  "lit": "v2"
                },
                {
                  "lit": "user-subscriptions"
                }
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
              "parts": [
                "v2",
                "user-subscriptions"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

