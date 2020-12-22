import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == '${slug}']{
                        title,
                        _id,
                        slug,
                        mainImage{
                          asset->{
                            _id,
                            url
                          }
                        },
                        body,
                        'name':author->name,
                        'authorImage': author->image
                      }`)
                .then((data) => setSinglePost(data[0]))
                .catch(console.error)
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="">
      <article>
        <header>
          <div>
            <div>
              <h1></h1>
              <div><img/></div>
              <p></p>
            </div>
          </div>
          <img />
        </header>
        <div>CONTENT</div>
      </article>
    </main>
  );
}
