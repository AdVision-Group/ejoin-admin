import React, {Suspense, lazy} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {ModalBackground} from './global.styles'
import ProtectedRoute from './components/protected-route/protected-route.component'

import Spinner from './components/spinner/spinner.component'

const SignInPage  = lazy(() => import("./pages/sign-in/sign-in.page"))
const DashboardPage = lazy(() => import("./pages/dashboard/dashboard.page"))
const FourOhFourPage = lazy(() => import('./pages/four-ou-four/four-ou-four.page'))
const EjoinGoPage = lazy(() => import('./pages/ejoin-go/ejoin-go.page'))
const UnderConstructionPage = lazy(() => import('./pages/under-construction/under-construction.page'))

const App = () => {
  return (
    <Suspense fallback={<ModalBackground><Spinner/></ModalBackground>}>
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' render={() => <SignInPage/>}/>
          <ProtectedRoute exact path='/dashboard' component={DashboardPage}/>
          <ProtectedRoute exact path='/dashboard/ejoin-go' component={EjoinGoPage}/>
          <ProtectedRoute exact path='/dashboard/product' component={UnderConstructionPage}/>
          <Route path='*' render={() => <FourOhFourPage/>} />
        </Switch>
      </HashRouter>
    </Suspense>
  );
}

export default App;
