import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category/index';
import { List, Item } from './styles'

function useCategoriesData() {
    const [categories, setCategories ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        window.fetch('http://demo2763241.mockable.io/categories')
                .then(res => res.json())
                .then(response => {
                    setCategories(response.categories)
                    setLoading(false)
                })
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () => {
    
    const { categories, loading } = useCategoriesData()

    const[showFixed, setShowFixed ] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading
                    ? <Item key='loading'><Category /></Item>
                    :   categories.map(category => <Item key={category.id}>
                            <Category {...category} path={`/pet/${category.id}`}/>
                        </Item>)
            }
        </List>
    ) 
    
    if (loading) {
        return 'Cargando...'
    }

    return (
        <Fragment>
            {
                renderList()
            }
            {
                showFixed && renderList(true)
            }
        </Fragment> 
    )    
}