import React from 'react'
import '../../index.css'
import NavBar from './AdminNavBar';
import SideBar from './SideBar';
import { useVehicleStore } from '../../context/VehicleStore';

function FleetManager() {
    const { vehicle, updateVehicleData, addImage, removeImage, resetVehicle } = useVehicleStore();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        files.forEach((file) =>  addImage(file));
        e.target.value = null;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        Object.entries(vehicle).forEach(([key, value]) => {
            if (key !== 'images') {
                formData.append(key, value);
            }
        });

        vehicle.images.forEach((image) => formData.append('images', image));

        try {
            const response = await fetch('https://autoluxe-api-v1-1.onrender.com/vehicles/create/', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = isJson ? await response.json() : await response.text();
                console.log('Backend Error:', errorData);
                throw new Error('Failed to submit Vehicle');
            }

            const data = isJson ? await response.json() : await response.text();
            console.log('Vehicle created:', data);

            resetVehicle();
            alert('Vehicle submitted successfully!')
        } catch (error) {
            console.error('Fetch error:', error)
            alert('Something went wrong')
        }
        
    }  


    return (
        <div>
            <NavBar />
            <div className='flex bg-black overflow-hidden'>
                <SideBar />
                <div className='flex-1 bg-black border text-white'>
                    <div className=' flex flex-col m-20 gap-10'>
                        <div className='flex justify-between'>
                            <h2 className='text-3xl font-bold'>Inventory</h2>
                            <button className='border rounded-2xl p-2'>+ Add New Vehicle</button>
                        </div>
                        <div className='border p-5'>
                            <h3 className='text-2xl font-bold'>Register New Vehicle</h3>
                            <hr />
                            <form onSubmit={handleSubmit} className='flex flex-col mt-5 gap-2 w-90'>
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="make" className='font-semibold'>Make</label>
                                    <input 
                                        type="text" id='make' name='make' 
                                        placeholder='Enter vehicle make' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.make}
                                        onChange={(e) => updateVehicleData({make: e.target.value})}
                                        required
                                    />
                                </fieldset>
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="model" className='font-semibold'>Model</label>
                                    <input 
                                        type="text" id='model' name='model' 
                                        placeholder='Enter model' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.model}
                                        onChange={(e) => updateVehicleData({model: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="body" className=''>Body Type</label>
                                    <input 
                                        type="text" id='body' name='body' 
                                        placeholder='Body type' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.body}
                                        onChange={(e) => updateVehicleData({body_type: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="year" className=''>Year of manufacture</label>
                                    <input 
                                        type="text" id='year' name='year' 
                                        placeholder='Year of manufacture' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.year}
                                        onChange={(e) => updateVehicleData({year: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="cost" className=''>Cost per day</label>
                                    <input 
                                        type="text" id='cost' name='cost' 
                                        placeholder='Enter price' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.cost}
                                        onChange={(e) => updateVehicleData({cost: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="cc" className=''>Engine capacity</label>
                                    <input 
                                        type="text" id='cc' name='cc' 
                                        placeholder='cc' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.cc}
                                        onChange={(e) => updateVehicleData({engine: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between '>
                                    <legend>Gearbox</legend>
                                    <div className='flex gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <label htmlFor="automatic">Automatic</label>
                                            <input 
                                                id="automatic" type="radio" name="transmission" value="automatic" 
                                                onChange={(e) => updateVehicleData({transmission: e.target.value})}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                        <div  className='flex items-center gap-1'>
                                            <label htmlFor="manual">Manual</label>
                                            <input 
                                                id="manual" type="radio" name="transmission" value="manual" 
                                                onChange={(e) => updateVehicleData({transmission: e.target.value})}
                                                className="cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="seats" className='font-semibold'>Seats</label>
                                    <input 
                                        type="number" id='seats' name='seats' 
                                        placeholder='Capacity' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.seats}
                                        onChange={(e) => updateVehicleData({seats: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="gas-type" className='font-semibold'>Gas type</label>
                                    <input 
                                        type="text" id='gas-type' name='gas-type' 
                                        placeholder='Petrol or Diesel' 
                                        className='border rounded p-1 text-xs w-50'
                                        value={vehicle.gas_type}
                                        onChange={(e) => updateVehicleData({gas_type: e.target.value})}
                                        required
                                    />
                                </fieldset> 
                                <fieldset className='flex justify-between'>
                                    <label htmlFor="image" className='font-semibold'>Upload  Images</label>
                                    <input 
                                        type="file" id='image' name='image'
                                        multiple accept='image/*'
                                        className='border rounded p-1 text-xs w-50'
                                        onChange={handleImageChange}
                                    />
                                </fieldset>
                                <div className='flex gap-3'>
                                    {vehicle.images.map((file, index) => (
                                        <div key={index}>
                                            <img 
                                                src={URL.createObjectURL(file)}
                                                alt='preview'
                                                width={60}
                                                height={40}
                                                style={{objectFit: 'cover'}}
                                            />
                                            <button type='button' onClick={() => removeImage(index)}>Remove</button>
                                        </div>
                                    ))}
                                </div>
                                <button type='submit' className='mt-7 border rounded-2xl'>
                                    + Submit new Vehicle
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FleetManager