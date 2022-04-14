const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: "klaxwjmb",
    dataset: "production",
    apiVersion: '2021-03-25',
    useCdn: false,
});

export default client;
