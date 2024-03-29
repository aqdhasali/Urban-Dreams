// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../../assets/css/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                    <div className="me-5 d-none d-lg-block">
                        <span>Feel Free To Connect Anytime! We are here to serve you </span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>
              
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>URBAN DREAMS
                                </h6>
                                <p>
                                Unlock your dream home with us. Find your sanctuary and start a new chapter in just a click. 
                                Welcome to a world of possibilities.
                                </p>
                            </div>
                        
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                             
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Properties 
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Houses</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Bungalows</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Resorts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Apartments</a>
                                </p>
                            </div>
                        
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                              
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                          
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Main StreetBirmingham, B1 1AA, United Kingdom</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    urbandreams@proerties.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
             
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold">UrbanDreams.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
