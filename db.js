exports.users = [
    {
      "id": 1,
      "email": "jon@austincodingacademy.com",
      "password": "pass12345",
      "cartId": 1
    },
    {
      "id": 2,
      "email": "landon@mystore.com",
      "password": "go",
      "cartId": 2
    }
  ]
  
  exports.carts = [
    {
      "id": 1,
      "userId": 1,
      "products": [
        {
          "id": 2,
          "name": "Topiramate",
          "description": "A wonderful medicine that makes everything all better",
          "rating": 2,
          "imgUrl": "http://dummyimage.com/125x134.jpg/cc0000/ffffff",
          "price": "$37.09",
          "category": "food",
          "reviews": [
            {
              "description": "architect revolutionary deliverables",
              "rating": 2
            },
            {
              "description": "orchestrate dynamic schemas",
              "rating": 2
            },
            {
              "description": "aggregate integrated convergence",
              "rating": 4
            },
            {
              "description": "incubate strategic e-tailers",
              "rating": 5
            },
            {
              "description": "transition synergistic partnerships",
              "rating": 1
            }
          ]
        },
        {
          "id": 5,
          "name": "Decolorized Iodine",
          "description": "Kills germs on contact",
          "rating": 1,
          "imgUrl": "http://dummyimage.com/120x245.jpg/cc0000/ffffff",
          "price": "$70.10",
          "category": "electronics",
          "reviews": [
            {
              "description": "architect revolutionary deliverables",
              "rating": 2
            },
            {
              "description": "orchestrate dynamic schemas",
              "rating": 2
            },
            {
              "description": "aggregate integrated convergence",
              "rating": 4
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "userId": 2,
      "products": [
        {
          "id": 7,
          "name": "LBel",
          "description": "2-Propanol",
          "rating": 3,
          "imgUrl": "http://dummyimage.com/212x144.jpg/ff4444/ffffff",
          "price": "$99.91",
          "category": "sporting",
          "reviews": [
            {
              "description": "architect revolutionary deliverables",
              "rating": 2
            },
            {
              "description": "orchestrate dynamic schemas",
              "rating": 2
            },
            {
              "description": "aggregate integrated convergence",
              "rating": 4
            }
          ]
        },
        {
          "id": 8,
          "name": "Cholestyramine",
          "description": "Help reduce cholesteral in the system",
          "rating": 3,
          "imgUrl": "http://dummyimage.com/204x175.jpg/5fa2dd/ffffff",
          "price": "$67.17",
          "category": "sporting",
          "reviews": [
            {
              "description": "architect revolutionary deliverables",
              "rating": 2
            },
            {
              "description": "orchestrate dynamic schemas",
              "rating": 2
            },
            {
              "description": "aggregate integrated convergence",
              "rating": 4
            }
          ]
        },
        {
          "id": 9,
          "name": "Risperidone",
          "description": "cephalospor/oth beta-lactm antibiot, undet, sequela",
          "rating": 1,
          "imgUrl": "http://dummyimage.com/212x108.bmp/cc0000/ffffff",
          "price": "$96.84",
          "category": "sporting",
          "reviews": [
            {
              "description": "architect revolutionary deliverables",
              "rating": 2
            },
            {
              "description": "orchestrate dynamic schemas",
              "rating": 2
            },
            {
              "description": "aggregate integrated convergence",
              "rating": 4
            }
          ]
        }
      ]
    }
  ]
  
  exports.orders = [
    {
      "id": 1,
      "userId": 1,
      "items": [
        {
          "quantity": 1,
          "productId": 2
        }
      ]
    }
  ]
  
  exports.products = [
    {
      "id": 1,
      "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
      "description": "Makes your hands clean",
      "rating": 2,
      "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
      "price": "$95.11",
      "category": "food",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        },
        {
          "description": "incubate strategic e-tailers",
          "rating": 5
        },
        {
          "description": "transition synergistic partnerships",
          "rating": 1
        },
        {
          "description": "matrix dynamic web-readiness",
          "rating": 1
        },
        {
          "description": "exploit impactful platforms",
          "rating": 4
        },
        {
          "description": "repurpose mission-critical schemas",
          "rating": 1
        },
        {
          "description": "iterate open-source interfaces",
          "rating": 3
        },
        {
          "description": "repurpose impactful interfaces",
          "rating": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "Topiramate",
      "description": "A wonderful medicine that makes everything all better",
      "rating": 2,
      "imgUrl": "http://dummyimage.com/125x134.jpg/cc0000/ffffff",
      "price": "$37.09",
      "category": "food",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        },
        {
          "description": "incubate strategic e-tailers",
          "rating": 5
        },
        {
          "description": "transition synergistic partnerships",
          "rating": 1
        }
      ]
    },
    {
      "id": 3,
      "name": "Almond",
      "description": "A great treat that tastes great",
      "rating": 5,
      "imgUrl": "http://dummyimage.com/149x190.jpg/dddddd/000000",
      "price": "$51.83",
      "category": "food",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 4,
      "name": "VYTORIN",
      "description": "Orchard as the place of occurrence of the external cause",
      "rating": 3,
      "imgUrl": "http://dummyimage.com/162x153.jpg/cc0000/ffffff",
      "price": "$86.93",
      "category": "electronics",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 5,
      "name": "Decolorized Iodine",
      "description": "Kills germs on contact",
      "rating": 1,
      "imgUrl": "http://dummyimage.com/120x245.jpg/cc0000/ffffff",
      "price": "$70.10",
      "category": "electronics",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 6,
      "name": "Fresh Sugar Honey Tinted Lip Treatment SPF15",
      "description": "Fix those chapped lips. ",
      "rating": 3,
      "imgUrl": "http://dummyimage.com/211x227.bmp/5fa2dd/ffffff",
      "price": "$39.25",
      "category": "electronics",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 7,
      "name": "LBel",
      "description": "2-Propanol",
      "rating": 3,
      "imgUrl": "http://dummyimage.com/212x144.jpg/ff4444/ffffff",
      "price": "$99.91",
      "category": "sporting",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 8,
      "name": "Cholestyramine",
      "description": "Help reduce cholesteral in the system",
      "rating": 3,
      "imgUrl": "http://dummyimage.com/204x175.jpg/5fa2dd/ffffff",
      "price": "$67.17",
      "category": "sporting",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 9,
      "name": "Risperidone",
      "description": "cephalospor/oth beta-lactm antibiot, undet, sequela",
      "rating": 1,
      "imgUrl": "http://dummyimage.com/212x108.bmp/cc0000/ffffff",
      "price": "$96.84",
      "category": "sporting",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        },
        {
          "description": "orchestrate dynamic schemas",
          "rating": 2
        },
        {
          "description": "aggregate integrated convergence",
          "rating": 4
        }
      ]
    },
    {
      "id": 10,
      "name": "MAC",
      "description": "Other Gram-negative sepsis",
      "rating": 2,
      "imgUrl": "http://dummyimage.com/189x109.png/cc0000/ffffff",
      "price": "$74.37",
      "category": "sporting",
      "reviews": [
        {
          "description": "architect revolutionary deliverables",
          "rating": 2
        }
      ]
    }
  ]
  
  exports.comments = [
    {
      "id": 0,
      "content": "Wow such content!",
      "username": "zero_cool"
    }
  ]