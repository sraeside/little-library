import React from 'react';
import { useState, useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { serverTimestamp, addDoc, collection } from "firebase/firestore"; 
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import './new.css';

const New = ({inputs, title}) => {
    const [file, setFile] = useState('');
    const [data, setData] = useState({});
    const {setProduct} = useContext(ProductContext);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        //console.log(`Input changed: id=${id}, value=${value}`);
        setData({...data, [id]: value});
    };

    const handleAdd = async (e) => {
        e.preventDefault();
       // console.log(data) // log data to check if id exists

        try {
            const newProduct = {
                ...data,
                timeStamp: serverTimestamp(),
            };
            //use addDoc to automatically generate a unique ID
            const docRef = await addDoc(collection(db, 'products'), newProduct);

            setProduct({...newProduct, id: docRef.id}); 
            navigate('/products');

        } catch(err) {
            console.log(err);
        } 
    };
    
    return (
        <div className="new">
            <Sidebar />
            <div className='new-container'>
                <NavBar />
                <div className='new-top'>
                    <h1 className='new-title'>{title}</h1>
                </div>
                <div className='new-bottom'>
                    <div className='new-left'>
                        <img
                            src={
                                file 
                                ? URL.createObjectURL(file) 
                                : 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                }
                            alt=''
                            className='new-image'
                        />
                    </div>
                    <div className='new-right'>
                        <form onSubmit={handleAdd} className='new-form'>
                        <div className='formInputs'>
                                <label htmlFor='file' className='new-form-label'>
                                    Image: <DriveFolderUploadOutlinedIcon className='file-icon' />
                                </label>
                                <input 
                                    type='file' 
                                    id='file' 
                                    onChange={e => setFile(e.target.files[0])} 
                                    style={{display: 'none'}} 
                                    className='new-form-input'
                                /> 
                            </div>
                            {inputs.map((input) => (
                                <div className='formInputs' key={input.id}>
                                    <label className='new-form-label'>{input.label}</label>
                                    <input 
                                        id={input.id}
                                        type={input.type} 
                                        placeholder={input.placeholder}
                                        onChange={handleInput} 
                                        className='new-form-input' 
                                    /> 
                                </div>
                            ))}
                            <button type='submit' className='new-formButton'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;