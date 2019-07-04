/* eslint  react/jsx-max-depth:0 */
import { Component, ReactElement, Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { AppContextConsumer, AppStateInterface } from './App/App';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { asyncComponent } from './utils/asyncComponent';
import history from './history';
import Header from './components/Header';

const NotFound = asyncComponent(() => import('./components/NotFound'));
const VersionPackage = asyncComponent(() => import('./pages/version/Version'));
const HomePage = asyncComponent(() => import('./pages/home'));

interface RouterAppProps {
  onLogout: () => void;
  onToggleLoginModal: () => void;
}

class RouterApp extends Component<RouterAppProps> {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <Router history={history}>
        <Fragment>
          {this.renderHeader()}
          <Switch>
            <Route exact={true} path={'/'} render={this.renderHomePage} />
            <Route exact={true} path={'/-/web/detail/@:scope/:package'} render={this.renderVersionPage} />
            <Route exact={true} path={'/-/web/detail/:package'} render={this.renderVersionPage} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }

  public renderHeader = (): ReactElement<HTMLDivElement> => {
    const { onLogout, onToggleLoginModal } = this.props;

    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ logoUrl, scope = '', user }: Partial<AppStateInterface>) {
          return <Header logo={logoUrl} onLogout={onLogout} onToggleLoginModal={onToggleLoginModal} scope={scope} username={user && user.username} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderHomePage = (): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn, packages }: Partial<AppStateInterface>) {
          // @ts-ignore
          return <HomePage isUserLoggedIn={isUserLoggedIn} packages={packages} />;
        }}
      </AppContextConsumer>
    );
  };

  public renderVersionPage = (routerProps): ReactElement<HTMLDivElement> => {
    return (
      <AppContextConsumer>
        {function renderConsumerVersionPage({ isUserLoggedIn }: Partial<AppStateInterface>) {
          return <VersionPackage {...routerProps} isUserLoggedIn={isUserLoggedIn} />;
        }}
      </AppContextConsumer>
    );
  };
}

export default RouterApp;
