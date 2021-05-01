/**
 * Default Layout
 * This will be the main Layout. (Implemented on the Home page).
 */

import React from 'react'
import {Fragment} from 'react'

//Componentes
import Footer from '../../Components/Footer/footer'
import NavMenu from '../../Components/NavMenu/navMenu'

export default function DefaultLayout({children}) {

    return (
        <Fragment>
            <NavMenu />
                {children}
            <Footer />
        </Fragment>
    )
}

