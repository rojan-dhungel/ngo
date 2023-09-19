import React from 'react'

function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://c1.wallpaperflare.com/preview/362/282/532/field-agriculture-earth.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Lorem, ipsum.</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In est explicabo iusto debitis quaerat illo?</p>
                            <p><button>Plant A Tree</button></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://c1.wallpaperflare.com/preview/532/665/142/electricity-sun-wind-forces-of-nature.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>lorem, ipsum</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore eveniet ea quisquam quod distinctio. Et.</p>
                            <p><button>Plant A Tree</button></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Lorem, ipsum. </h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt magnam, voluptatem consequatur dolores excepturi.</p>
                            <p><button>Plant A Tree</button></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Carousel
