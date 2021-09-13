const axios = require('axios');
const Item = require('../models/items');
const cron = require('node-cron');

console.log('-> Started auto-update database every 5 hours.');

getAllOffers = (type, amount) => {
  return new Promise((resolve, reject) => {
    Item.deleteMany({}, (err, removedObjects) => {
      if (!err) {
        getAllItems(type, amount)
          .then((items) => {
            const itemsArrayToUpdate = items.map((item) => {
              return {
                itemID: item.id,
                createdAt: new Date(),
                name: item.name,
                store: item.store,
                underline: item.underline,
                description: item.description,
                department_id: item.department_id,
                department_name: item.department_name,
                category_id: item.category_id,
                category_name: item.category_name,
                popularity: item.popularity,
                imageurl: item.imageurl,
                pricing: item.pricing,
                url: item.url,
              };
            });

            Item.insertMany(itemsArrayToUpdate, (err, insertedDocs) => {
              if (!err) {
                resolve(insertedDocs);
              } else {
                reject(err);
              }
            });
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject('We could not clear database');
      }
    });
  });
};

getAllItems = (type, amount) => {
  return new Promise((resolve, reject) => {
    const items = [];
    const promises = [];

    if (type === 'rema' || type === 'all') {
      console.log('-> Getting REMA offers');
      promises.push(getRemaOffers(amount));
    }

    if (type === 'coop' || type === 'all') {
      console.log('-> Getting COOP offers');
      promises.push(getCoopOffers(amount));
    }

    if (type === 'foetex' || type === 'all') {
      console.log('-> Getting FØTEX offers');
      promises.push(getFoetexOffers(amount));
    }

    Promise.allSettled(promises).then((result) => {
      result.forEach((resultItem) => {
        if (resultItem.status === 'fulfilled') {
          const resultItemValue = resultItem.value;
          resultItemValue.forEach((value) => {
            items.push(value);
          });
        }
      });
      resolve(items);
    });
  });
};

getRemaOffers = (amount) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'POST',
      url: 'https://flwdn2189e-dsn.algolia.net/1/indexes/*/queries',
      params: {
        'x-algolia-application-id': process.env.ALGOLIA_APP_ID_REMA,
        'x-algolia-api-key': process.env.ALGOLIA_API_KEY_REMA,
      },
      headers: {
        Connection: 'keep-alive',
        accept: 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        requests: [
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A10%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A20%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A30%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A40%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A50%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A60%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A70%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A80%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A90%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A100%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A110%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A120%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A130%22%5D&filters=',
          },
          {
            indexName: 'aws-prod-products',
            params:
              'query=&hitsPerPage=9999&facets=%5B%22labels%22%5D&facetFilters=%5B%22labels%3Aavisvare%22%2C%22department_id%3A140%22%5D&filters=',
          },
        ],
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const responseData = response.data;
        const responseCategories = responseData.results;
        const items = [];

        responseCategories.forEach((category) => {
          if (category.hits.length > 0) {
            const categoryHits = category.hits;
            categoryHits.forEach((item) => {
              if (item.pricing.is_on_discount) {
                if (items.length < amount || amount === 'all') {
                  if (isNaN(item.pricing.normal_price) || item.pricing.normal_price <= 0) {
                    item.pricing.normal_price = 0.0;
                  }

                  const itemObject = {
                    id: item.id,
                    name: item.name,
                    store: 'rema1000',
                    underline: item.underline,
                    description: item.description,
                    department_id: item.department_id,
                    department_name: item.department_name,
                    category_id: item.category_id,
                    category_name: item.category_name,
                    popularity: item.extra.popularity,
                    imageurl: `https://cphapp.rema1000.dk/api/v1${item.image_url}/125.png`,
                    pricing: item.pricing,
                    url: `https://shop.rema1000.dk/varer/${item.id}`,
                  };

                  itemObject.pricing.procentage_change = parseFloat(
                    (
                      ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                      100
                    ).toFixed(2)
                  );

                  if (isNaN(itemObject.pricing.procentage_change) || itemObject.pricing.procentage_change <= 0) {
                    itemObject.pricing.procentage_change = 100.0;
                  }

                  items.push(itemObject);
                }
              }
            });
          }
        });

        resolve(items);
      })
      .catch(function (error) {
        console.error('ERROR GETTING REMA OFFERS:', error.response.data.message);
        reject(new Error(error.response.data.message));
      });
  });
};

getCoopOffers = (amount) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: 'https://mad.coop.dk/api/search/search',
      params: {
        categories: '',
        excludeCategories: '307',
        lastFacet: 'offers',
        offers: ['3', '6'],
        pageSize: '9999',
        sortBy: '',
        term: '',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const responseData = response.data;
        const responseProducts = responseData.products;
        const items = [];

        if (responseProducts) {
          responseProducts.forEach((item) => {
            if (item.hasOffer && item.discountLabel) {
              if (items.length < amount || amount === 'all') {
                let correctNormalPrice = -1;

                if (item.discountLabel.saved) {
                  correctNormalPrice = item.salesPrice.amount + item.discountLabel.saved.amount;
                }

                if (item.discountLabel.savedPercentage) {
                  correctNormalPrice = item.salesPrice.amount / (1 - item.discountLabel.savedPercentage.amount / 100);
                }

                if (isNaN(correctNormalPrice) || correctNormalPrice <= 0) {
                  correctNormalPrice = 0.0;
                }

                const itemObject = {
                  id: item.id,
                  name: item.displayName,
                  url: `https://mad.coop.dk${item.url}`,
                  store: 'COOP',
                  underline: item.spotText,
                  description: 'No description',
                  department_id: -1,
                  department_name: 'No department',
                  category_id: -1,
                  category_name: item.category,
                  popularity: -1,
                  imageurl: `${item.image}&format=png&quality=75&width=125&height=125`,
                  pricing: {
                    price: item.salesPrice.amount,
                    max_quantity: item.maxQuantity,
                    price_over_max: 0,
                    is_on_discount: true,
                    normal_price: correctNormalPrice,
                    price_per_kilogram: -1,
                    price_per_unit: item.pricePerUnitText,
                    price_changes_on: 'No date',
                    is_advertised: true,
                  },
                };

                itemObject.pricing.procentage_change = parseFloat(
                  (
                    ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                    100
                  ).toFixed(2)
                );

                // if the procentage change is NaN beacuse of division by 0. then set change to 0.
                if (isNaN(itemObject.pricing.procentage_change) || itemObject.pricing.procentage_change <= 0) {
                  itemObject.pricing.procentage_change = 100.0;
                }

                items.push(itemObject);
              }
            }
          });

          resolve(items);
        } else {
          reject(new Error('We could not get any products'));
        }
      })
      .catch(function (error) {
        console.log(error);
        console.error('ERROR GETTING COOP OFFERS:', error.response);
        reject(new Error(error.response));
      });
  });
};

getFoetexOffers = (amount) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'POST',
      url: 'https://xpq5wkb9jp-dsn.algolia.net/1/indexes/*/queries',
      headers: {
        Accept: '*/*',
        'Accept-Language': 'en-US,en;q=0.9,da-DK;q=0.8,da;q=0.7',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'content-type': 'application/json',
        Pragma: 'no-cache',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
        'x-algolia-api-key': process.env.ALGOLIA_API_KEY_FOETEX,
        'x-algolia-application-id': process.env.ALGOLIA_APP_ID_FOETEX,
      },
      data: {
        requests: [
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Frugt & Grønt', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Mejeri & Køl', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Kød & Fisk', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Brød & Kager', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Kolonial', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Drikke', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Frost', ['inStock:1', 'inStock:2']],
            params: '',
          },
          {
            hitsPerPage: 999,
            attributesToRetrieve: [
              'articleID',
              'mainGTIN',
              'productType',
              'name',
              'nameURL',
              'subBranding',
              'productUnit',
              'productUoM',
              'salesPrice',
              'normalPrice',
              'salesUnit',
              'salesUoM',
              'isOnOffer',
              'inStock',
              'images',
              'objectID',
              'promoType',
              'categories',
              'maxPromoQty',
              'comparePrice',
              'compareNormalPrice',
            ],
            attributesToSnippet: '',
            attributesToHighlight: '',
            snippetEllipsisText: '…',
            responseFields: ['hits'],
            enablePersonalization: false,
            clickAnalytics: true,
            maxValuesPerFacet: 1000,
            facets: [
              '*',
              'countryOfOrigin',
              'multiPromo',
              'inStock',
              'productSpecification.facetValue',
              'productType',
              'properties',
              'searchHierachy',
              'subBranding',
              'targetBrand',
              'targetCSR',
              'targetEnvironmental',
              'facetFilters',
            ],
            indexName: 'prod_HD_PRODUCTS',
            facetFilters: [['isOnOffer:true'], 'categories.lvl0:Husholdning', ['inStock:1', 'inStock:2']],
            params: '',
          },
        ],
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const responseData = response.data;
        const responseCategories = responseData.results;
        const items = [];

        responseCategories.forEach((category) => {
          if (category.hits.length > 0) {
            const categoryHits = category.hits;
            categoryHits.forEach((item) => {
              // is on offer, and only discounted (not buy 2 for one price) offers
              if (item.isOnOffer && item.promoType === 0) {
                if (items.length < amount || amount === 'all') {
                  let correctNormalPrice = parseFloat((item.normalPrice / 100).toFixed(2));

                  if (isNaN(correctNormalPrice) || correctNormalPrice <= 0) {
                    correctNormalPrice = 0.0;
                  }

                  const itemObject = {
                    id: item.articleID,
                    name: item.name,
                    url: `https://hjem.foetex.dk/produkt/${item.nameURL}/${item.objectID}`,
                    store: 'foetex',
                    underline: `${item.subBranding ? item.subBranding : 'Føtex'}, ${item.salesUnit} ${item.salesUoM}`,
                    description: 'No description',
                    department_id: -1,
                    department_name: 'No department',
                    category_id: -1,
                    category_name: item.categories.lvl0.length > 0 ? item.categories.lvl0[0] : 'No category',
                    popularity: -1,
                    imageurl: `https://digitalassets.sallinggroup.com/image/upload/e_trim/c_pad,e_sharpen:80,f_auto,q_75,w_125,h_125/id/${
                      item.images && item.images.length > 0 ? item.images[0] : 'noimage'
                    }`,
                    pricing: {
                      price: parseFloat((item.salesPrice / 100).toFixed(2)),
                      max_quantity: item.maxPromoQty,
                      price_over_max: 0,
                      is_on_discount: true,
                      normal_price: correctNormalPrice,
                      price_per_kilogram: -1,
                      price_per_unit: -1,
                      price_changes_on: 'No date',
                      is_advertised: true,
                    },
                  };

                  itemObject.pricing.procentage_change = parseFloat(
                    (
                      ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                      100
                    ).toFixed(2)
                  );

                  // if the procentage change is NaN beacuse of division by 0. then set change to 0.
                  if (isNaN(itemObject.pricing.procentage_change) || itemObject.pricing.procentage_change < 0) {
                    itemObject.pricing.procentage_change = 100.0;
                  }

                  items.push(itemObject);
                }
              }
            });
          }
        });

        resolve(items);
      })
      .catch(function (error) {
        console.error('ERROR GETTING FØTEX OFFERS:', error);
        reject(new Error(error));
      });
  });
};

if (process.env.NODE_ENV === 'production') {
  getAllOffers('all', 'all')
    .then(() => {
      console.log('-> Database updated at startup!');
    })
    .catch((err) => {
      console.error(err);
      console.error('-> There was an error updating the database at startup');
    });
}

cron.schedule('0 0 */5 * * *', () => {
  getAllOffers('all', 'all')
    .then(() => {
      console.log('-> Database has been updated!');
    })
    .catch((err) => {
      console.error(err);
      console.error('-> There was an error updating the database');
    });
});
