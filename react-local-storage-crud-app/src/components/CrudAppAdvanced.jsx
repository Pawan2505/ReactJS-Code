import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

const CrudAppAdvanced = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('items')) || [];
        setItems(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const onSubmit = (data) => {
        if (editIndex !== null) {
            const updated = [...items];
            updated[editIndex] = data.item;
            setItems(updated);
            toast.success('Item Updated!');
            setEditIndex(null)
        } else {
            setItems([...items, data.item]);
            toString.success('Item Added');
        }
        reset();
    }

    const handleEdit = (index) => {
        setValue('item', items[index]);
        setEditIndex(index);
    }

    const handleDelete = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to delete this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updated = items.filter((_, i) => i !== index);
                setItems(updated);
                toast.info('Item Deleted!');
            }
        });
    };

  return (
      <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
          
          <h2>LocalStorage CRUD App</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
              
              <input
                  {...register('item', { required: 'Item name is required' })} placeholder='Enter item' 
                  style={{width:'100%', padding:'8px', marginBottom:'5px'}}
              />

              {errors.item && <p style={{ color: 'red' }}>{ errors.item.message}</p> }

              <button type='submit' style={{ width: '100%', padding: '8px', marginTop: '10px' }}>
                  {editIndex !== null ? 'Update':'Add'}
              </button>
          </form>

          <ul>
              {
                  items.map((item, i) => (
              <li key={i} style={{ margin: '10px 0', borderBottom: '1px solid #ccc', padding: '5px' }}>
                  {item}
                  <div>
                              <button onClick={() => handleEdit(i)} style={{ marginRight: '10px' }}>Edit</button>
                              <button onClick={() => handleDelete(i)}>Delete</button>
                  </div>
              </li>
                  ))
              }
          </ul>
          <ToastContainer/>
    </div>
  )
}

export default CrudAppAdvanced