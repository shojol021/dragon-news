import React from 'react'
import { useEffect, useState } from "react";

const LeftNave = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h4 className='fw-bold mb-4'>All Categories</h4>
            {
                categories.map(category => <p key={category.id}><button className='text-secondary btn btn-link text-decoration-none' type="button">{category.name}</button></p>)
                
            }
        </div>
    );
};

export default LeftNave;