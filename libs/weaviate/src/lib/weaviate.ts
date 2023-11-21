import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';

const client: WeaviateClient = weaviate.client({
  scheme: 'https',
  host: 'gigya-data-l0a7562k.weaviate.network',
  apiKey: new ApiKey('2IPNBlAJYcNIBDnB4TzwWOBTCXjIIpCGfyt4'),
});
export function createClass() {
  return client.schema
    .classCreator()
    .withClass({
      class: 'gigya',
      description: 'gigya knowledge graph',
      vectorizer: 'text2vec-openai',
    })
    .do()
    .then((res) => {
      console.log(res);
      return res;
    });
}

export function createProperty() {
  return client.schema
    .propertyCreator()
    .withProperty({
      name: 'name',
      description: 'name of the gigya user',
      dataType: ['string'],
    })
    .do()
    .then((res) => {
      console.log(res);
      return res;
    });
}
