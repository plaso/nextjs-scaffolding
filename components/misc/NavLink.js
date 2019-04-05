import React from 'react';
import Router from 'next/router';
import { Link } from '../../routes/routes';
import routeList from '../../routes/routes.json';

const NavLink = ({ route, children, params }) => {
  let page = '';
  let isActive = '';
  console.log(routeList);
  const linkProps = {
    ...(route && { route }),
    ...(params && { params }),
  }
  if (process.browser) {
    page = Router.route;
    isActive = `/${routeList[route].page}` === page;
  }
  return (
    <Link {...linkProps}>
      <a className={`link${isActive ? ' active' : ''}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;