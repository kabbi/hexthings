import { ListGroup, ListGroupItem } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';

import ListGroupItemLink from 'components/common/ListGroupItemLink';

export const DEVCARDS_BASE_URL = '/devcards';

export default class DevcardsNavs extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
  };

  getRoutes(routes = this.props.routes, baseUrl = DEVCARDS_BASE_URL, list = [], level = 0) {
    for (const { path, childRoutes } of routes) {
      const leaf = !childRoutes || childRoutes.length === 0;
      const url = `${baseUrl}/${path}`;
      list.push({ leaf, url, level });
      if (!leaf) {
        this.getRoutes(childRoutes, url, list, level + 1);
      }
    }
    return list;
  }

  render() {
    return (
      <ListGroup>
        {this.getRoutes().map(({ leaf, url }) => (
          leaf ? (
            <ListGroupItemLink key={url} to={url}>
              {url.slice(DEVCARDS_BASE_URL.length)}
            </ListGroupItemLink>
          ) : (
            <ListGroupItem key={url} disabled>
              {url.slice(DEVCARDS_BASE_URL.length)}
            </ListGroupItem>
          )
        ))}
      </ListGroup>
    );
  }
}
