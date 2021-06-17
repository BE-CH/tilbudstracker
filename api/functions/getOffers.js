const axios = require('axios');

module.exports = getAllOffers = (type) => {
  return new Promise((resolve, reject) => {
    getAllItems(type)
      .then((items) => {
        console.log('DO SOME DATABASE STUFF HERE!');
        resolve(items);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

getAllItems = (type) => {
  return new Promise((resolve, reject) => {
    const items = [];
    const promises = [];

    if (type === 'rema' || type === 'all') {
      console.log('Getting rema offers!');
      promises.push(getRemaOffers());
    }

    if (type === 'foetex' || type === 'all') {
      console.log('get foetex');
    }

    Promise.allSettled(promises).then((result) => {
      console.log('MAKE ALL ITEMS FROM ALL STORES INTO SAME KIND OF OBJECT');
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

getRemaOffers = () => {
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
                  imageurl: item.image_url,
                  pricing: item.pricing,
                };

                itemObject.pricing.procentage_change =
                  ((itemObject.pricing.normal_price - itemObject.pricing.price) / itemObject.pricing.normal_price) *
                  100;

                items.push(itemObject);
              }
            });
          }
        });

        resolve(items);
      })
      .catch(function (error) {
        console.error(error);
        reject(new Error('We could not get the rema offers'));
      });
  });
};
