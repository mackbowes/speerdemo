import React from 'react';
import {Icon} from '@chakra-ui/react';
import {GoStar} from 'react-icons/go';
import Subtitle from './Subtitle';
import Title from './Title';

export default function Review(props) {

    return (
        <div>
            <div>
            <Icon as={GoStar} width={12} height={12} color="brand.black" />
            <Icon as={GoStar} width={12} height={12} color="brand.black" />
            <Icon as={GoStar} width={12} height={12} color="brand.black" />
            <Icon as={GoStar} width={12} height={12} color="brand.black" />
            <Icon as={GoStar} width={12} height={12} color="brand.black" />
            </div>
            <Title
            color="var(--white)"
            weight="500"
            fontSize="2.5rem"
            ><h3>{props.person}</h3></Title>
            <Subtitle
            weight="500"
            fontSize="1.75rem"
            lineHeight="1"
            ><p>"{props.review}"</p></Subtitle>
        </div>
    )
}
