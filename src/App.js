import React from 'react'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
//Context
import {CtxProvider} from './Context/ctx'
//Cookie consent
import CookieConsent from 'react-cookie-consent'
//Util
import {AppRoute} from './Helpers/helpers.js'
//Layouts
import DefaultLayout from './Layouts/DefaultLayout/defaultLayout'
import PagesLayout from './Layouts/PagesLayout/PagesLayout'
//Components
import NotFound from './Components/NotFoud/notFound'
import About from './Components/About/about'
import Header from './Components/Header/header'

export default function App() {
  return (
    <CtxProvider>
      <BrowserRouter>
        <Switch>

          <AppRoute exact path='/about' layout={PagesLayout} component={About} />

          <Route path="/" exact>
            <DefaultLayout>
              <Header />

              <CookieConsent
                location="bottom"
                buttonText="Sure man!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
              >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
              </CookieConsent>
            </DefaultLayout>
          </Route>

          <Route path="*" exact component={NotFound} />

        </Switch>
      </BrowserRouter>
    </CtxProvider>
  );
}
