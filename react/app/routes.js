import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import Other from './containers/Other';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route component={Other} />
		<Route path="/about" component={About} />
	</Route>
);
