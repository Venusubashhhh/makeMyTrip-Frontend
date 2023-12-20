import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
import SimpleSlider from './SimpleSlider';
import SimpleSlider2 from './SimpleSlider2';
import Searchcomp from './Searchcomp';
import Bodycomponents from './Bodycomponents';
import Sample from './Sample';


function Home() {
  const[visible,setvisible]=useState(false)
  return (
    <div>
    <div  className='img' >
        <Navbar></Navbar>
{/* <ImageSlider/> */}

<Search/>
<Sample/>
<Bodycomponents/>
</div>
<SimpleSlider2/> 
<SimpleSlider/> 
<Footer/>


    </div>
  )
}

export default Home