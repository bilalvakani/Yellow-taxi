import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div>
            <div className='bg-cover  bg-[url(https://i.pinimg.com/736x/27/92/ae/2792ae9a3cb77adaa78a54e75a9b8db1.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-yellow-500 '>
                {/* <img className='w-16 ml-8'src='' /> */}
                {/* <h2 className=' text-2xl font-bold  ml-8'>YELLOW TAXI</h2> */}
                <h2 className='text-3xl font-bold ml-8 ' style={{ fontFamily: 'Roboto' }}>
                    <span className='text-yellow-500 mr-1'>Yellow</span>
                    <span className='text-black ml-1'>  Taxi</span>
                </h2>


                <div className='bg-white pb-7 py-4 px-4'>

                    <h2 className='text-2xl ml-2 font-bold'>Get Started With Yellow Taxi </h2>
                    <Link to="/login" className=' flex items-center justify-center w-full text-white py-3 rounded mt-5' style={{ background: 'linear-gradient(to right, #f59e0b 50%, #000000 50%)' }}>
                        Continue    ->
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Home