import React from 'react';
import image from '../keyboard-5017973_1920.jpg';

class Home extends React.Component {
  render() {
    return (
      <main>
        <img
        src={image}
        alt='keyboard night'
        className='absolute object-cover w-full h-full'>
        </img>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pb-48 px-8'>
          <h1 className='text-6xl text-red-400 font-bold cursive leading-none lg:leading-snug home-name'>
            Welcome there! This is Matthieu Besançon's portfolio :)
          </h1>
        </section>
      </main>
    );
  }
}

export default Home;
