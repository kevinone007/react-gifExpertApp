import React from 'react'
import { useFectchGifts } from '../hooks/useFectchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: images, loading} = useFectchGifts(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                
                {
                    images.map( img  => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}

export default GifGrid;