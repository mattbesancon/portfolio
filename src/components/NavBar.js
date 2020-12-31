import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <header className='bg-red-400'>
        <div className='container mx-auto flex justify-content'>
          <nav className='flex'>
            <NavLink
              exact to='/'
              activeClassName='text-white'
              className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-600 text-4xl font-bold cursive tracking-widest'>
              Buzz
            </NavLink>
            <NavLink
              exact to='/post'
              activeClassName='text-red-100 bg-red-500'
              className='inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-600 text-2xl font-bold cursive tracking-widest'>
              Blog Posts
            </NavLink>
            <NavLink
              exact to='/project'
              activeClassName='text-red-100 bg-red-500'
              className='inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-600 text-2xl font-bold cursive tracking-widest'>
              Projects
            </NavLink>
            <NavLink
              exact to='/about'
              activeClassName='text-red-100 bg-red-500'
              className='inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-600 text-2xl font-bold cursive tracking-widest'>
              About Me!
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
