import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate, useLocation } from 'react-router-dom'

import { categories } from '../redux/constants'
import { supabase } from '../lib/supabaseClient'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

const notify = (message) => toast(message)

const schema = z.object({
    name: z
        .string()
        .min(1, { message: 'Please enter a valid item name' })
        .max(50),
    quantity: z.number({ invalid_type_error: 'Please enter a valid quantity' })
        .min(1, { message: 'Please enter a valid quantity' }),
    category: z
        .string()
        .min(1, { message: 'Please select a category' })
})

const Form = ({ item }) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema),
        values: item ? {
            name: item.name,
            quantity: item.quantity,
            category: item.category
        } : {}
    })

    const onSubmit = async (data) => {
        const { error } = await supabase
            .from('oyatsu')
            .update({ ...data })
            .eq('id', item.id)
            // .select()

        if (error) {
            console.log(error)
        }
        navigate('/')
    }

    const onNewSubmit = async (data) => {
        const { error } = await supabase
            .from('oyatsu')
            .insert({ ...data })
            // .select()
            if (error) {
                console.log(error)
            }
            navigate('/')
    }

    const submitFunction = location.pathname === '/create' ? onNewSubmit : onSubmit

    return (
        <form onSubmit={handleSubmit(submitFunction)}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Item name</span>
                </label>
                <input
                    type="text"
                    placeholder='Type here'
                    className='input input-bordered w-full'
                    {...register("name")}
                />
                {/* {errors.name && 
                    toast.error(errors.name.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        })
                } */}
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder='Type here'
                    className='input input-bordered w-full'
                    {...register("quantity", { valueAsNumber: true })}
                />
                {/* {errors.quantity && 
                    toast.error(errors.quantity.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        })} */}
            {errors.quantity && <p className='text-red-500'>{errors.quantity.message}</p>}
            </div>   

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <select
                    className='select select-bordered w-full'
                    {...register("category")}
                >
                    <option value=''>Select a category</option>
                    <option value={categories.snacks}>Snacks</option>
                    <option value={categories.drinks}>Drinks</option>
                </select>
              {/*   {errors.category && 
                    toast.error(errors.category.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        })} */}
                 { errors.category &&  <p className='text-red-500'>{errors.category.message}</p> }
            </div>

            <button className={`btn my-5 ${isSubmitting ? 'loading' : ''}`} type='submit'>Submit</button>
        </form>
    )
}

export default Form