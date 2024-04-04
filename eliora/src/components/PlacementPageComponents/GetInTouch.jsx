
import { useState } from "react";
import { FaSquarePhone } from "react-icons/fa6";
import axios from 'axios';
import {toast} from 'react-toastify';

const GetInTouch = () => {

    const [formData, setFormData] = useState({

            fname:'',
            email:'',
            contact:'',
            work:'',
            message:''

    })


    const handleChange = e =>{
        
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e =>{

        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/save', formData);
            setFormData({
                fname:'',
                email:'',
                contact:'',
                work:'',
                message:''
            });
            toast.success('Data submitted sucessfully ! our Team Reach You soon..');
          } catch (error) {
            console.error('Registration failed:', error);
            toast.error('Something went wrong !');
          }
    }

    
    return (
        <div className="container-fluid bg-registration py-5 mt-5 mb-5" id="call" style={{marginTop: '-100px', backgroundImage: 'url(images/c2c_bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="section-title position-relative pb-3 mb-5" style={{marginTop: '-40px'}}>
                                <h1 className="mb-0 text-white">OPTIMIZE YOUR WORKFORCE</h1>
                            </div>
                            <div className="row gx-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-4  text-white"><i className="bi bi-reply-fill me-2"></i>Reply within 24 hours</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-4  text-white"><i className="bi bi-telephone-fill me-2"></i>24 hrs support</h5>
                                </div>
                            </div>
                            <p className="mb-4 text-white" style={{textAlign: 'justify'}}>Eliora emerges as your dependable companion whether youre a job seeker navigating the complex tunnel of your ideal career or an employer looking for the perfect addition to your ideal team. Our foundation rests on pillars of unyielding commitment and persistent personalized attention. Step into the future of workforce enhancement with Eliora, where every placement and recruitment solution defies convention. We are also recognized as one of the best consultancy firms near you for banking job placement agencies.</p>
                            <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                                <div className="d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                                    <FaSquarePhone/>
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2 text-white">Call to ask any question</h5>
                                    <h4 className="text-danger mb-0"> +91 8956101181 </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="rounded h-100 d-flex align-items-center p-5 wow zoomIn c1" data-wow-delay="0.9s" style={{padding: '17px !important', backgroundColor:"rgb(91, 85, 85)"}}>
                                <form onSubmit={handleSubmit}>
                                    <h1 className="mb-0 text-white text-center">Get in Touch</h1>
                                    <p></p>
                                    <div className="row g-3">
                                        <div className="col-xl-12">
                                            <input type="text" className="form-control bg-light border-0" name="fname" placeholder="Your Name" value={formData.fname} onChange={handleChange} style={{height: '55px'}} required />
                                        </div>
                                        <div className="col-12">
                                            <input type="email" className="form-control bg-light border-0" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={{height: '55px'}} required />
                                        </div>
                                        
                                         <div className="col-12">
                                            <input type="text" className="form-control bg-light border-0" name="contact" placeholder="Your Number" value={formData.contact} onChange={handleChange} style={{height: '55px'}} required />
                                        </div>
                                        <div className="col-12">
                                            <select className="form-select bg-light border-0" value={formData.work} onChange={handleChange} name="work" style={{height: '55px'}}>
                                                <option selected>Select A Option</option>
                                                <option value="Staffing">About Staffing</option>
                                                <option value="Project">About Project</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control bg-light border-0" rows="3" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-danger w-100 py-3" name="submit" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
