const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: "klaxwjmb",
    dataset: "production",
    apiVersion: '2021-03-25',
    token: 'sanity-auth-token',
    useCdn: true,
});

export default client;

/*
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({ apiVersion: '2021-03-25' })

client.createOrReplace({
_id: 'translationService.secrets',
_type: 'smartlingSettings',
organization: 'YOUR_ORG_HERE',
project: 'YOUR_PROJECT_HERE',
secret: 'YOUR_TOKEN_SECRET_HERE',
})

export default client;
*/
