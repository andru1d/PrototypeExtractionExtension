'use strict';

export const wrappers = [
  {
    name: 'amazon_product',
    selector: [
      {
        host: 'www.amazon.com',
        path_regex: new RegExp('^/([^/]+/)?dp/[A-Z0-9]+(/ref=.*)?$'),
      }
    ],
    fields: [
      {
        name: 'product_name',
        xpath: [
          '//*[@id="productTitle"]'
        ]
      },
      {
        name: 'product_image',
        xpath: [
          '//*[@id="imgTagWrapperId"]/img/@src'
        ]
      },
      {
        name: 'price',
        xpath: [
          '//*[contains(@class, "priceToPay")]'
        ]
      },
      {
        name: 'rating',
        xpath: [
          '//*[@id="acrPopover"]/@title'
        ]
      },
    ]
  }
]