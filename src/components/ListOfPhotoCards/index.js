import React from 'react';
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql´´)

export const ListOfPhotoCards = () => {
    return (
        <ul>
            {[1, 2, 3].map(id => <PhotoCard key={id} id={id} />)}
        </ul>
    )
}