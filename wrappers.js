//'use strict';

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
            '//input[@id="twister-plus-price-data-price"]/@value'
    //        '//span[@class="a-offscreen"]/text()[1]'
          // '//*[contains(@class, "priceToPay")]'
        ]
      },
      {
        name: 'rating',
        xpath: [
          '//*[@id="acrPopover"]/@title'
        ]
      },
    ]
  },
{
    name: 'google_search',
    selector: [
      {
        host: 'www.google.com',
        path_regex: new RegExp('^/search'),
      }
    ],
    fields: [
      {
        name: 'query',
        xpath: [
          '//textarea/@value'
        ]
      },
      {
        name: 'search_result',
        xpath: [
          '//div[@id="search"]//div[@class="MjjYud"]'
        ],
        fields: [
            {
                name: 'search_title',
                xpath: [
                    '//h3/text(1)'
                ]
            },
            {
                name: 'search_link',
                xpath: [
                    '//a/@href'
                ]
            },
            {
                name: 'search_snippet',
                xpath: []
            },
            {
                name: 'search_favicon',
                xpath: [
                    '//img/@src'
                ]
            }
        ]
      },
    ]
  },
  {
    name: 'default',
    selector: [
      {
        host: '',
        path_regex: new RegExp(),
      }
    ],
    fields: [
      {
        name: 'og_type',
        xpath: [
            '/html/head/meta[@property="og:type"]/@content',
            '/html/head/meta[@name="dc.Type"]/@content'
      ]
      },
      {
        name: 'title',
        xpath: [
            '/html/head/title/text()[1]',
            '/html/head/meta[@property="og:title"]/@content'

        ]
      },
      {
        name: 'description',
        xpath: [
          '/html/head/meta[@property="og:description"]/@content',
        ]
      },
      {
        name: 'image',
        xpath: [
           '/html/head/meta[@property="og:image"]/@content'
       ]
      },
      {
        name: 'keywords', // name=keywords or property = news_keywords
        xpath: [
            '/html/head/meta[@name="news_keywords"]/@content',
            '/html/head/meta[@name="keywords"]/@content'
        ]
      },
    ]
  }]