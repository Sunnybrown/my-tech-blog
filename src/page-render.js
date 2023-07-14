import React from 'react';
import { useMatch } from 'react-router-dom';

const generatePage = page => {
    const component = () => require(`./pages/${page}.js`).default

    try {
        return React.createElement(component());
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

const PageRenderer = () => {
    const {
        params: { page }
    } = useMatch()

    return generatePage(page)
}

export default PageRenderer;