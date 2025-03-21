import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { productInputs } from '../../formSource';

import './single.css';

const Single = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [editMode, setEditMode] = useState(false);
    
    //generate initial state object from userInputs array
    //return accumulated value
    const initialState = productInputs.reduce((acc, input) => {
        acc[input.id] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        console.log(productId); // Log the user ID to verify it's being received
        const fetchProduct = async () => {
            const docRef = doc(db, 'products', productId);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()) {
                setProduct(docSnap.data());
                setFormData(docSnap.data()); //pre-fill form data
            } else {
                console.log('No such document');
            }
        };
        
        fetchProduct();
    }, [productId]);

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = doc(db, 'products', productId);
        await updateDoc(docRef, formData);
        setProduct(formData); //update display user data
        setEditMode(false); //exit edit mode
    };

    return (
        <div className='single'>
            <Sidebar />
            <div className='single-container'>
                <Navbar />
                <div className='single-top'>
                    <div className='single-left'>
                        <div 
                            className='editButton'
                            onClick={() => setEditMode(!editMode)}
                        >
                            {editMode ? 'Cancel' : 'Edit'}
                        </div>
                        <h1 className='single-title'>Information</h1>
                        {editMode ? (
                            <form onSubmit={handleSubmit} className='edit-form'>
                                {productInputs.map((input) => (
                                    <div key={input.id} className='edit-formInputs'>
                                        <label htmlFor={input.id} className='edit-form-label' >{input.label}</label>
                                        <input
                                            type={input.type}
                                            name={input.id}
                                            value={formData[input.id]}
                                            onChange={handleUpdate}
                                            placeholder={input.placeholder}
                                            className='edit-form-input'
                                        />
                                    </div>
                                ))}
                                <button type='submit' className='edit-formButton'>Save</button>
                            </form>
                        ) : (
                            <div className='single-item'>
                                <img 
                                    src={product.file ? product.file : 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                                    alt=''
                                    className='single-item-img'
                                />
                                <div className='details'>
                                    <h1 className='item-title'>{product.title}</h1>
                                    <div className='detail-item'>
                                        <span className='itemKey'>Author:</span>
                                        <span className='itemValue'>{product.author}</span>
                                    </div>
                                    <div className='detail-item'>
                                        <span className='itemKey'>Genre:</span>
                                        <span className='itemValue'>{product.genre}</span>
                                    </div>
                                    <div className='detail-item'>
                                        <span className='itemKey'>Publisher:</span>
                                        <span className='itemValue'>{product.publisher}</span>
                                    </div>
                                    <div className='detail-item'>
                                        <span className='itemKey'>Date Published:</span>
                                        <span className='itemValue'>{product.datePublished}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Single;