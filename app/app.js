import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



//Components
import App from './containers/App';
import Home from './components/Home';

const root =  document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute  component={Home} />
        </Route>
      </Router>

    </AppContainer>,
  root
  )
}

render();

if (module.hot) {

  module.hot.accept()
}
