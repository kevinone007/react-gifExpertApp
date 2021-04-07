import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'



export const GiftExpertApp = () => {
    // const categories = ['One Punch', 'Pokemon', 'League of Legends']

    const [categories, setCategories] = useState(['League of Legends'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Algo'])
    //     setCategories( categoria => [...categoria,'Algo']);
    // }

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr/>
            <ol>
                {
                   categories.map(category =>( 
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}



