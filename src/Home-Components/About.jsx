import React from 'react'

function About() {
    return (
        <>
            <div className="container" id='About_primary'>
                
                <div className="row">
                <h1>About Us</h1>
                <div className="col"id='about_content'>
                    <h3>We Are Nature Lovers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius faucibus ligula non congue. Suspendisse at pretium massa, sit amet vulputate nibh. Nam posuere eros dolor. Donec vel arcu sagittis, pretium nis</p>
                        <p>Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.</p>
                        <p>Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida.</p>
                    </div>
                    <div className="col" id='about_content'>
                        <img src='https://i.pinimg.com/564x/6c/c1/a4/6cc1a4d8ea2937233627ac166ba1e57c.jpg' alt='...loading' height='500' width='600'></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
