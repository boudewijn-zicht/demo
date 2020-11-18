import apolloConfigFunc from './config';
import {createApolloFetch} from 'apollo-fetch';

const apolloConfig = (() => {
    const apolloConfig = apolloConfigFunc();
    return {uri: apolloConfig.httpEndpoint, authorization: `Bearer ${apolloConfig.getAuth()}`};
})();

const apolloFetch = createApolloFetch({uri: apolloConfig.uri});
apolloFetch.use(({request, options}, next) => {
    options.headers = {authorization: apolloConfig.authorization};
    next();
});

export default apolloFetch;
