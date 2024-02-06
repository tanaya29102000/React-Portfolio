import React from 'react';
import "./Skills.css";
import UIDesign from "../../Assets/ui.png";
import WebDesign from "../../Assets/images.png";

const Skills = () => {
  return (
    <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and use-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaSript, as well as design software such </span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your content here.</p>
                </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production ready website.</p>
                </div>
        </div>
    </div>

  </section>
  );
}

export default Skills;
