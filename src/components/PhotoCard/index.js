import React, { useEffect, useRef, useState, Fragment } from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const element = useRef(null)
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>
                    <Button onClick={() => setLiked(!liked)}>
                        <Icon size="32px"/> {likes} likes!
                    </Button>
                </Fragment>
            }
        </Article>
    )
}