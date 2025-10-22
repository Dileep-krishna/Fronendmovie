import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <section
                style={{
                    width: "100%",
                    overflowX: "hidden",
                    height: "450px",
                    backgroundImage:
                        "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png ')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <div className="row pt-5">
                    <div className="col-12 col-md-4"></div>
                    <div className="col-12 col-md-4 shadow border py-5 rounded my-5 text-center bg-white bg-opacity-50">
                        <h4>Designed To Get Hired</h4>
                        <p>Your Skills, Your Story, Your Next Job - all in one</p>
                        <Link to={"/resume"}>
                            <button className="btn btn-primary">MAKE YOUR RESUME</button>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4"></div>
                </div>
            </section>

            <section>
                <h1 className="text-center p-5">Tools</h1>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 p-5">
                        <h4>Resume</h4>
                        <p>Create unlimited new resumes and easily edit them afterwards</p>
                        <h4>Cover Letters</h4>
                        <p>Easily write professional cover letters</p>
                        <h4>Jobs</h4>
                        <p>Automatically receive new and relevant job postings</p>
                        <h4>Applications</h4>
                        <p>
                            Effortlessly manage and track your job applications in an
                            organised manner
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            className="w-75 ms-5"
                            src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section
                style={{
                    width: "100%",
                    overflowX: "hidden",
                    height: "450px",
                    backgroundImage:
                        "url('https://www.resufit.com/wp-content/uploads/2025/04/article-image-a21dac3c-1166-457b-9ac9-41364d2b1ba0.webp')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            ></section>

            <section>
                <h1 className="text-center p-5">Testimony</h1>
                <div className="row">
                    <div className="col-12 col-md-6 p-5">
                        <h1 className="mb-5">Trusted by Professionals worldwide</h1>
                        <p>
                            At LiveCareer, we don't just help you create résumés we help you
                            land the job. Whether you're a seasoned professional or just
                            starting out, our tools are designed to get results.
                        </p>
                        <p>
                            In fact, users who used LiveCareer reported getting hired an
                            average of 48 days faster.
                        </p>
                        <p>
                            Join thousands of job seekers who've fast-tracked their careers
                            with a résume that truly stands out
                        </p>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <div className="mb-3">
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Richard_Madden_%289347943769%29_%28cropped%29.jpg/250px-Richard_Madden_%289347943769%29_%28cropped%29.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://m.media-amazon.com/images/M/MV5BMjIxNjI3NDkwNV5BMl5BanBnXkFtZTcwMDY2NTIwNw@@._V1_.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://d.ibtimes.co.uk/en/full/1451137/jack-gleeson.jpg"
                                alt="Testimonial"
                            />
                        </div>
                        <div className="mb-3">
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Richard_Madden_%289347943769%29_%28cropped%29.jpg/250px-Richard_Madden_%289347943769%29_%28cropped%29.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://m.media-amazon.com/images/M/MV5BMjIxNjI3NDkwNV5BMl5BanBnXkFtZTcwMDY2NTIwNw@@._V1_.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://d.ibtimes.co.uk/en/full/1451137/jack-gleeson.jpg"
                                alt="Testimonial"
                            />
                        </div>
                        <div className="mb-3">
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Richard_Madden_%289347943769%29_%28cropped%29.jpg/250px-Richard_Madden_%289347943769%29_%28cropped%29.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://m.media-amazon.com/images/M/MV5BMjIxNjI3NDkwNV5BMl5BanBnXkFtZTcwMDY2NTIwNw@@._V1_.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://d.ibtimes.co.uk/en/full/1451137/jack-gleeson.jpg"
                                alt="Testimonial"
                            />
                        </div>
                        <div className="mb-3">
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/EX7HMH5HERIYJHJAMW7EB6QLHY.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Richard_Madden_%289347943769%29_%28cropped%29.jpg/250px-Richard_Madden_%289347943769%29_%28cropped%29.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://m.media-amazon.com/images/M/MV5BMjIxNjI3NDkwNV5BMl5BanBnXkFtZTcwMDY2NTIwNw@@._V1_.jpg"
                                alt="Testimonial"
                            />
                            <img className="mx-3"
                                style={{ width: "120px", height:"100px"}}
                                src="https://d.ibtimes.co.uk/en/full/1451137/jack-gleeson.jpg"
                                alt="Testimonial"
                            />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default LandingPage;
