import {Route} from 'react-router-dom'

/**
 * For implementing diferent layouts to the pages
 */

export const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route {...rest} render={props => (
	  <Layout>
		<Component {...props} />
	  </Layout>
	)} />
  )