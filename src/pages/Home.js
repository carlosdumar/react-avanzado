import React, { Fragment } from 'react';
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Fragment>
    )
}

