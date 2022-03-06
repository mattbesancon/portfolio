import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: "klaxwjmb",
    dataset: "production",
    apiVersion: '2021-03-25',
    token: 'sanity-auth-token',
    useCdn: true,
});

export default client;
