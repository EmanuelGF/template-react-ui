/**
 * Some Other Layout
 * Put some different components before and after {children} to create this layout.
 */

import React from 'react'
import {Fragment} from 'react'
 
export default function PagesLayout({children}) {

    return (
        <Fragment>
            
            {children}

        </Fragment>
    )
}