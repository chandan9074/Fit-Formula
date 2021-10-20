// import pakages
import React from 'react';
import Navigation from '../shared/Navbar/Navbar';

// import files
import e_1 from './images/e-1.jpg';
import e_2 from './images/e-2.jpg';
import e_3 from './images/e-3.jpg';
import g_3 from './images/g-3.jpg';
import g_2 from './images/g-2.jpg';
import g_1 from './images/g-1.jpg';
import homebg from '../Homepage/images/hm-bg.png'
import './exercise.css'

const Excercise = () => {
    return ( 
        <div>
            <img src={homebg} alt="" className="home-bg" srcset="" />
            <Navigation />
            <div className="container">
                <div className="mt-20 md:flex">
                    <div>
                    <img src={e_1} alt="e-1" className="border-1 border-light-blue-500" />
                    <p className="m-0 text-white font-semibold">ABS Workout</p>
                    <div className="underline"></div>
                    </div>
                    <div className="md:ml-14">
                        <p className="excercise-point text-xl font-bold">Glue Bridge March</p>
                        <p className="excercise-point text-xl font-bold">Mountain Climber</p>
                        <p className="excercise-point text-xl font-bold">Shoulder Tap And Jack</p>
                        <p className="excercise-point text-xl font-bold">Leg Lower</p>
                        <p className="excercise-point text-xl font-bold">Deadbug</p>
                        <p className="excercise-point text-xl font-bold">Hollow Rock with Hold</p>
                    </div>
                </div>
                <div className="mt-20 md:flex">
                    <div>
                    <img src={e_2} alt="e-1" className="border-1 border-light-blue-500" />
                    <p className="m-0 text-white font-semibold">Chest Workout</p>
                    <div className="underline"></div>
                    </div>
                    <div className="md:ml-14">
                        <p className="excercise-point text-xl font-bold">Barbell Bench Press</p>
                        <p className="excercise-point text-xl font-bold">Dumbbell Bench Press</p>
                        <p className="excercise-point text-xl font-bold">Smith Machine Incline Press</p>
                        <p className="excercise-point text-xl font-bold">Incline Dumbbell Flye</p>
                        <p className="excercise-point text-xl font-bold">Cable Crossover</p>
                        <p className="excercise-point text-xl font-bold">Incline Dumbbell Press</p>
                        <p className="excercise-point text-xl font-bold">Chest Press Machine</p>
                        <p className="excercise-point text-xl font-bold">Dumbbell Flye</p>
                    </div>
                </div>
                <div className="mt-20 md:flex">
                    <div>
                    <img src={e_3} alt="e-1" className="border-1 border-light-blue-500" />
                    <p className="m-0 text-white font-semibold">ARM Workout</p>
                    <div className="underline"></div>
                    </div>
                    <div className="md:ml-14">
                        <p className="excercise-point text-xl font-bold">Hammer Curl</p>
                        <p className="excercise-point text-xl font-bold">Close-grip Curl</p>
                        <p className="excercise-point text-xl font-bold">Suspension Trainer Triceps Extension</p>
                        <p className="excercise-point text-xl font-bold">Diamond Pushup</p>
                        <p className="excercise-point text-xl font-bold">Neutral-grip Triceps Extension</p>
                        <p className="excercise-point text-xl font-bold">Poundstone Curl</p>
                        <p className="excercise-point text-xl font-bold">Suspension Trainer Biceps Curl</p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-center md:justify-around mt-36">
                    <div className="w-80 flex flex-col justify-center items-center">
                        <img src={g_1} alt="g-1" className="gymn-img" />
                        <p className="text-white w-60 text-center mt-2">There nothing better than going out there and seeing</p>
                        <p  className="text-white mt-0">- Aly Raisman</p>
                    </div>
                    <div className="w-80 flex flex-col justify-center items-center">
                        <img src={g_2} alt="g-1" className="gymn-img"/>
                        <p className="text-white w-60 text-center mt-2">Practice like you have never own</p>
                        <p  className="text-white  mt-0">- Kyla Ross</p>
                    </div>
                    <div className="w-80 flex flex-col justify-center items-center">
                        <img src={g_3} alt="g-1" className="gymn-img"/>
                        <p className="text-white w-60 text-center mt-2">Hard days are the best because that's when champions are made</p>
                        <p className="text-white  mt-0">- Gabby douglas</p>

                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Excercise;