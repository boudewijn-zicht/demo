import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
// import schema from '~/apollo/datocms.schema.json';
// const fragmentMatcher = new IntrospectionFragmentMatcher({
//     introspectionQueryResultData: schema,
// });

const possibleTypes = {
    PageModelContentField: ['TextRecord', 'ImageRecord', 'ReferenceRecord'],
};

export default function () {
    return {
        httpEndpoint: 'https://graphql.datocms.com',
        getAuth: () => '63010fddb21c316fbbe54794d51d00',
        cache: new InMemoryCache({possibleTypes}),
    };
};
