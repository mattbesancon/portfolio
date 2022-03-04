import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: "klaxwjmb",
    dataset: "production"
});

export default client;
