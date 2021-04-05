/**
 * Default Layout
 * 
 */

import React from 'react'
import {Fragment} from 'react'

//Componentes
import Footer from '../../Components/Footer/footer'
import Nav from '../../Components/Nav/nav'

export default function DefaultLayout({children}) {

    return (
        <Fragment>
            <Nav />
                {children}
            <Footer />
        </Fragment>
    )
}

