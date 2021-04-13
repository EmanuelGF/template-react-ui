import React from 'react'
//CSS
import './header.scss'
//IMAGES
import {LazyLoadImage} from 'react-lazy-load-image-component'
import '../../../node_modules/react-lazy-load-image-component/src/effects/blur.css'
import ImgExample from '../../Images/logo-react.png'

export default function Header(props) {

    return (
        <div style={{
            height:"400px",
            padding: "40px",
            
        }}>

            <h1>React template</h1>
            <ul>
                <li>This is rendering the DefaulLayout with the Header component.</li>
                <li>You can create more layout components on: /src/Layouts. See the about page example.</li>
                <li>Using react context to pass some data to the about page (example) you can use it to pass any other global data you need.</li>
                <li>Also, dont forget to check the README file.</li>
            </ul>
            <h5>Lazy loading image with react-lazy-load-image-component:</h5>
            <LazyLoadImage 
                className="header-image-example"
                src={ImgExample}
                width={150}
                effect="blur"
            />

        </div>
    )
}