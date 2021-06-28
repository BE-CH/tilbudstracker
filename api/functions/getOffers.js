const axios = require('axios');
const Item = require('../models/items');

module.exports = getAllOffers = (type, amount) => {
  return new Promise((resolve, reject) => {
    Item.findOne({}, (err, foundItem) => {
      if (!err) {
        if (
          !foundItem ||
          (foundItem && (new Date().getTime() - new Date(foundItem.createdAt).getTime()) / 1000 >= 18000)
        ) {
          // No items found or older than 5 hours. Add everything
          console.log('-> ITEMS NEED TO BE UPDATED');

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
        } else {
          // return items in database

          if (amount === 'all') {
            amount = 1000;
          }

          Item.find({})
            .limit(amount)
            .exec((err, foundItems) => {
              if (!err && foundItems) {
                resolve(foundItems);
              } else {
                reject('We could not find the items in the database');
              }
            });
        }
      } else {
        reject('We could query the database');
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
                    imageurl: `https://cphapp.rema1000.dk/api/v1${item.image_url}/200.png`,
                    pricing: item.pricing,
                    url: `https://shop.rema1000.dk/varer/${item.id}`,
                  };

                  itemObject.pricing.procentage_change =
                    ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                    100;

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
            if (item.hasOffer) {
              if (items.length < amount || amount === 'all') {
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
                  imageurl: `${item.image}&format=png&quality=75&width=200&height=200`,
                  pricing: {
                    price: item.salesPrice.amount,
                    max_quantity: item.maxQuantity,
                    price_over_max: 0,
                    is_on_discount: true,
                    normal_price: item.salesPrice.amount + item.discountLabel.saved.amount,
                    price_per_kilogram: -1,
                    price_per_unit: item.pricePerUnitText,
                    price_changes_on: 'No date',
                    is_advertised: true,
                  },
                };

                itemObject.pricing.procentage_change =
                  ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                  100;

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
        console.error('ERROR GETTING COOP OFFERS:', error.response.data.message);
        reject(new Error(error.response.data.message));
      });
  });
};
