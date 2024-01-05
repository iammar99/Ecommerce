import React, { useState } from 'react'
import img from "../../Assets/homeimg.png"

import img1 from "../../Assets/chair1.png"
import img2 from "../../Assets/chair2.png"
import img3 from "../../Assets/chair3.png"
import img4 from "../../Assets/chair4.png"

import man1 from "../../Assets/first-men.png"
import man2 from "../../Assets/second-man.png"
import man3 from "../../Assets/third-man.png"

export default function ProductDetails() {
    const [value, setValue] = useState(0)

    const handleOne = () => {
        document.getElementById("img-carusal").style.left = "4%"
    }
    const handleTwo = () => {
        document.getElementById("img-carusal").style.left = "-60%"
    }
    const handleThree = () => {
        document.getElementById("img-carusal").style.left = "-132%"
    }
    const handleFour = () => {
        document.getElementById("img-carusal").style.left = "-224%"
    }

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const handleIncrement = () => {
        setValue(value + 1)
    }

    const handleDescriptoin = () => {
        // Class handling
        document.getElementById("description").classList.add("active")
        document.getElementById("specification").classList.remove("active")
        document.getElementById("comments").classList.remove("active")
        document.getElementById("reviews").classList.remove("active")
        document.getElementById("description-container").style.display = "block"
        document.getElementById("specification-container").style.display = "none"
        document.getElementById("comments-container").style.display = "none"
        document.getElementById("review-container").style.display = "none"
    }

    const handleSpecification = () => {
        // Class handling
        document.getElementById("specification").classList.add("active")
        document.getElementById("description").classList.remove("active")
        document.getElementById("comments").classList.remove("active")
        document.getElementById("reviews").classList.remove("active")
        document.getElementById("specification-container").style.display = "block"
        document.getElementById("description-container").style.display = "none"
        document.getElementById("comments-container").style.display = "none"
        document.getElementById("review-container").style.display = "none"
    }

    const handleComment = () => {
        // Class handling
        document.getElementById("comments").classList.add("active")
        document.getElementById("description").classList.remove("active")
        document.getElementById("specification").classList.remove("active")
        document.getElementById("reviews").classList.remove("active")
        document.getElementById("comments-container").style.display = "block"
        document.getElementById("description-container").style.display = "none"
        document.getElementById("specification-container").style.display = "none"
        document.getElementById("review-container").style.display = "none"
    }

    const handleReview = () => {
        // Class handling
        document.getElementById("reviews").classList.add("active")
        document.getElementById("description").classList.remove("active")
        document.getElementById("specification").classList.remove("active")
        document.getElementById("comments").classList.remove("active")
        document.getElementById("review-container").style.display = "block"
        document.getElementById("description-container").style.display = "none"
        document.getElementById("specification-container").style.display = "none"
        document.getElementById("comments-container").style.display = "none"
    }
    return (
        <main>
            {/* Product */}
            <div className="container my-5">
                <div className="row">
                    <div className="col my-5">
                        <div className="img-card">
                            <span className="img-carusal" id="img-carusal">
                                <img src={img1} alt="" style={{ "width": "300px" }} />
                                <img src={img2} alt="" style={{ "width": "300px" }} />
                                <img src={img3} alt="" style={{ "width": "300px" }} />
                                <img src={img4} alt="" style={{ "width": "300px" }} />
                            </span>
                        </div>
                        <div className="d-flex">
                            <img src={img1} alt="" style={{ "width": "90px", "height": "90px" }} onClick={handleOne} />
                            <img src={img2} alt="" style={{ "width": "90px", "height": "90px" }} onClick={handleTwo} />
                            <img src={img3} alt="" style={{ "width": "90px", "height": "90px" }} onClick={handleThree} />
                            <img src={img4} alt="" style={{ "width": "90px", "height": "90px" }} onClick={handleFour} />
                        </div>
                    </div>
                    <div className="col my-5">
                        <h3 className="fw-bolder">
                            Chairs
                        </h3>
                        <h2 className="fw-bolder mb-4" style={{ "color": "#fd8f5e" }}>
                            $149.00
                        </h2>
                        <div className='fs-6'>
                            Category : <span style={{ "color": "#fd8f5e" }}>HouseHold</span>
                        </div>
                        <div className='fs-6'>
                            Availability : <span>Instock</span>
                        </div>
                        <hr className='my-4' />
                        <p className="text-secondary mb-4">
                            Mill Oi
                            l is an innovative oil filled radiator with the most modern technology.
                            If you are looking for something that can make your interior look awesome, and at the same time.
                        </p>
                        <div className="quantity-button">
                            <button className="minus-btn text-secondary" onClick={handleDecrement}><i className='fa-solid fa-minus'></i></button>
                            <span id="output-area">{value}</span>
                            <button className="plus-btn text-secondary" onClick={handleIncrement}><i className='fa-solid fa-plus'></i></button>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="discover-btn my-5 me3" style={{ "width": "30%", "fontSize": "17px" }}>
                                ADD TO CART
                            </button>
                            <span className="heart">
                                <i className="fa-regular fa-heart"></i>
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                            <span className="twitter">
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                            <span className="linkedin">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* reviews / description */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* Navbar */}
                        <nav className='detail-navbar mb-5' >
                            <ul className="d-flex justify-content-between">
                                <li id='description' className='' onClick={handleDescriptoin}>Description</li>
                                <li id='specification' className='' onClick={handleSpecification}>Specification</li>
                                <li id='comments' className='' onClick={handleComment}>Comments</li>
                                <li id='reviews' className='active' onClick={handleReview}>Reviews</li>
                            </ul>
                        </nav>
                        {/* description-container */}
                        <div className="description-container" id="description-container">
                            <p className="text-secondary">
                                Our commitment to style is evident in every curve, color, and contour of our chairs.
                                From timeless classics that exude sophistication to contemporary designs that push the boundaries of modern aesthetics,
                                our range caters to diverse tastes. Your space is a canvas, and our chairs are the brushstrokes that add character and charm.
                                <br className='' />
                                <span className='my-3 d-block'></span>
                                Versatility is the hallmark of our collection,
                                ensuring that whether you're furnishing your home, office, or a commercial space,
                                you'll find the perfect chair to complement your vision. Our chairs aren't just pieces of furniture;
                                they are statements, expressions of your unique style.
                                <br className='' />
                                <span className='my-3 d-block'></span>
                                Quality craftsmanship is the backbone of our brand. Each chair is meticulously crafted with premium materials,
                                promising not just comfort but also durability. Invest in our chairs, and you're investing in a seamless fusion of form and function,
                                where every sit is a testament to the artistry of well-designed seating. Welcome to a world where every chair tells a story – your story.
                            </p>
                        </div>
                        {/*  specifications  */}
                        <div className="specification-container" id="specification-container">
                            <div className="container-sm text-secondary " style={{ "fontSize": "15px" }}>
                                <div className="d-flex">
                                    <span>
                                        Width
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        128mm
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Height
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        508mm
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Depth
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        85mm
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Weight
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        52gm
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Quality checking
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        yes
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Freshness Duration
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        03days
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        When packeting
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        Without touch of hand
                                    </span>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <span>
                                        Each Box contains
                                    </span>
                                    <span className='d-block mx-auto text-start' style={{ "width": "fit-content" }}>
                                        60pcs
                                    </span>
                                </div>
                                <hr />
                            </div>
                        </div>
                        {/* Comments */}
                        <div className="comments-container" id="comments-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="first-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man1} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='text-secondary'>12th Feb, 2017 at 05:56 pm</span>
                                                    </span>
                                                </span>
                                                <button className='reply-btn'>
                                                    Reply
                                                </button>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                        <div className="second-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man2} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='text-secondary'>12th Feb, 2017 at 05:56 pm</span>
                                                    </span>
                                                </span>
                                                <button className='reply-btn'>
                                                    Reply
                                                </button>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                        <div className="third-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man3} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='text-secondary'>12th Feb, 2017 at 05:56 pm</span>
                                                    </span>
                                                </span>
                                                <button className='reply-btn'>
                                                    Reply
                                                </button>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4 className="fw-bolder mb-5">
                                            Post a comment
                                        </h4>
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Your Full Name' />
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Email address' />
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Phone number' />
                                        <textarea placeholder='Message' className='form-control my-3' style={{ "height": "61px", "color": "#6c757d" }}></textarea>
                                        <button className="discover-btn ms-auto" style={{ "width": "30%", "fontSize": "17px" }}>
                                            Submit Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Reviews */}
                        <div className="review-container" id="review-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex justify-content-around">
                                        <span className="d-flex flex-column">
                                            <span style={{ "fontSize": "32px" }}>
                                                Overall
                                            </span>
                                            <span style={{ "fontWeight": "bolder", "fontSize": "59px", "color": "#fd8f5e" }}>
                                                4.0
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "12px" }}>
                                                (03 Reviews)
                                            </span>
                                        </span>
                                        <span className="d-flex flex-column">
                                            <h4 className="fw-bolder">
                                                Based on 03 Reviews
                                            </h4>
                                            <span className='text-secondary'>
                                                05 Stars
                                                <span className='rated-stars '>
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                </span>
                                                01
                                            </span>
                                            <span className='text-secondary'>
                                                04 Stars
                                                <span className='rated-stars '>
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                </span>
                                                01
                                            </span>
                                            <span className='text-secondary'>
                                                03 Stars
                                                <span className='rated-stars '>
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                </span>
                                                01
                                            </span>
                                            <span className='text-secondary'>
                                                02 Stars
                                                <span className='rated-stars '>
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                </span>
                                                01
                                            </span>
                                            <span className='text-secondary'>
                                                01 Stars 
                                                <span className='rated-stars '>
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                    <i className="fa-solid fa-star fa-lg" style={{ color: "rgb(204 204 204)" }} />
                                                </span>
                                                01
                                            </span>
                                        </span>
                                        </div>
                                        {/* First comment */}
                                        <div className="first-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man1} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='rated-stars'>
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                        {/* second comment */}
                                        <div className="second-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man2} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='rated-stars'>
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                        {/* third comment */}
                                        <div className="third-comment my-4">
                                            <span className="d-flex justify-content-between">
                                                <span className="d-flex">
                                                    <img src={man3} className='me-3' alt="" style={{ "width": "60px", "height": "60px", "borderRadius": "50%" }} />
                                                    <span className="d-flex flex-column" style={{ "fontSize": "13px", "margin": "auto" }}>
                                                        <span className='fw-medium'>Blake Ruiz</span>
                                                        <span className='rated-stars'>
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                            <i className="fa-solid fa-star fa-lg" style={{ color: "#fbd600" }} />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="text-secondary" style={{ "fontSize": "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Beatae nisi, perferendis iusto ipsa rem esse neque excepturi nulla eligendi ipsam autem,
                                                recusandae quas. Ab id est, ipsa odit architecto ut?
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4 className="fw-bolder mb-5">
                                            Add a Review
                                        </h4>
                                        <div className="text-secondary d-flex" style={{ "alignItems": "center" }}>
                                            Your Rating :
                                            <div className="rating ms-3">
                                                <input defaultValue={5} name="rating" id="star5" type="radio" />
                                                <label htmlFor="star5" />
                                                <input defaultValue={4} name="rating" id="star4" type="radio" />
                                                <label htmlFor="star4" />
                                                <input defaultValue={3} name="rating" id="star3" type="radio" />
                                                <label htmlFor="star3" />
                                                <input defaultValue={2} name="rating" id="star2" type="radio" />
                                                <label htmlFor="star2" />
                                                <input defaultValue={1} name="rating" id="star1" type="radio" />
                                                <label htmlFor="star1" />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Your Full Name' />
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Email address' />
                                        <input type="text" className="form-control my-3" style={{ "height": "61px", "color": "#6c757d" }} placeholder='Phone number' />
                                        <textarea placeholder='Review' className='form-control my-3' style={{ "height": "61px", "color": "#6c757d" }}></textarea>
                                        <button className="discover-btn ms-auto" style={{ "width": "30%", "fontSize": "17px" }}>
                                            Submit Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
