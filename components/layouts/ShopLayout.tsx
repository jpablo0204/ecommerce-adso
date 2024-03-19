import { FC } from 'react'
import Head from 'next/head'

interface Props {
    titile: string;
    pageDescription: string;
    ImageFullUrl?: string
}

export const ShopLayout: FC<Props> = ( children, titile, pageDescription, ImageFullUrl ) => {
    return (
        <div>ShopLayout<div/>
    )
}