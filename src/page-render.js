import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const generatePage = async page => {
    let component;

    try {
        component = await import(`./pages/${page}.js`);
    } catch (err) {
        console.warn(err);
        return () => 404;
    }

    return component.default || component;
};

const PageRenderer = () => {


    const { page } = useParams();

    const [Component, setComponent] = useState(null);


    useEffect(() => {
        generatePage(page).then((comp) => {
            setComponent(() => comp);
        });
    }, [page]);

    return Component ? <Component /> : null;
};

export default PageRenderer;