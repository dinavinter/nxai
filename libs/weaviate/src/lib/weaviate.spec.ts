import { createClass } from './weaviate';

describe('weaviate', () => {
  test('create-class', async () => {
    const data = await createClass();
    expect(data).toBe({
      class: 'gigya',
      description: 'gigya knowledge graph',
      vectorizer: 'text2vec-openai',
    });
  });
});
