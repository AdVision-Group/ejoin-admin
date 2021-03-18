import React, {Suspense, lazy} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

const SignInPage  = lazy(() => import("./pages/sign-in/sign-in.page"))
const DashboardPage = lazy(() => import("./pages/dashboard/dashboard.page"))

const App = () => {
  const currentUser = true

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HashRouter basename='/'>
        <Switch>
          <Route path='/sign-in' render={() => <SignInPage/>}/>
          <Route path='/dashboard' render={() => <DashboardPage/>}/>
          {currentUser ? <Redirect to='/dashboard' /> : <Redirect to='/sign-in' />}
        </Switch>
      </HashRouter>

    </Suspense>
  );
}

export default App;
