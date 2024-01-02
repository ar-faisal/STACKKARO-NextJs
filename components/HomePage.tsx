import React from 'react'
import homeImage from '../public/images/homeImage.png';
import session2img1 from '../public/images/s21.png';
import session2img2 from '../public/images/s22.png';
import session2img3 from '../public/images/s23.png';
import session2img4 from '../public/images/s24.png';
import session4p11 from '../public/images/s4p11.png';
import session4p12 from '../public/images/s4p12.png';
import session4p13 from '../public/images/s4p13.png';
import session4p14 from '../public/images/s4p14.png';
import session4p15 from '../public/images/s4p15.png';

import styles from './HomePage.module.css'

const HomePage = () => {
    
  return (
    <div>
      <div id='session1' className={styles.background1}>
      <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Responsive Image */}
      <div className="w-full lg:col-span-8 xl:col-span-7 2xl:col-span-6">
        <img
          className="w-full h-auto max-w-md mx-auto object-cover rounded-lg"
          src={homeImage.src}  
          alt="Your Image"
        />
      </div>

      {/* Headings and Paragraph */}
      <div className="text-center mt-4">
            <h1 className={`text-center ${styles.s2h1} font-outfit font-bold text-base md:text-xl lg:text-2xl  leading-tight mt-1 lg:mt-2`}>
              Experience Seamless Hiring
            </h1>
        <h2 className={`text-center ${styles.s2h2} font-bold font-outfit text-sm mt-4 md:text-xl lg:text-lg lg:mt-2`}>
               “Connecting Global Companies with the Best Indian Talent”
        </h2>
        <p className={`text-center ${styles.s1h2} font-outfit text-sm md:text-lg lg:text-base mt-4 ml-4 mr-4 sm:mt-8 sm:ml-4 sm:mr-4 md:mt-2 md:ml-16 md:mr-16 lg:mt-4 lg:ml-16 lg:mr-16`}>
        STACKKAROO is a hiring platform that picks the best of IT & Non-IT fields as well as web development, digital marketing, data science, business development, human resource, content writing, advertising and much more in India. Their communication skills, fit for culture, and ability to be ethical for global work will be assessed.
        </p>
        <br></br><br></br>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:border-yellow-300">
  Job Opening
</button>

      </div>
    </div>

      </div>

      <div id='session2' className={styles.background2}>
      <h1 className={`text-center ${styles.s2h1} font-outfit font-bold text-base md:text-xl lg:text-2xl  leading-tight mt-1 lg:mt-0 lg:pt-8 pt-10`}>
              We are Best Because?
        </h1>
        <h2 className={`text-center ${styles.s2h2} font-bold font-outfit text-base mt-2 md:text-xl lg:text-lg lg:mt-2 lg:mb-20`}>
        Affordable Web Development Company in India
        </h2>


        <div className={`flex lg:items-center lg:justify-center ml-2 ${styles.boxContainer}`}>
        {/* Box 1 */}
        <div className={`h-60 mb-10 lg:h-40 m-2 ${styles.boxes}`}>
        <img
          className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
          src={session2img1.src}  
          alt="Your Image"
        />
        <h2 className={`text-center ${styles.s2h22} font-bold font-outfit text-base mt-2 mb-3 md:text-xl lg:text-lg lg:mt-2`}>
        Talent Matchmaker
        </h2>
        <p className={`text-center ${styles.s2p} mb-20 leading-4 font-outfit text-xs md:text-lg lg:text-base mt-2 ml-4 mr-4 sm:mt-8 sm:ml-4 sm:mr-4 md:mt-2 md:ml-16 md:mr-16 lg:mt-4 lg:ml-16 lg:mr-16`}>
        STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.
        </p>
        </div>

        {/* Box 2 */}
        <div className={`h-60 mb-10 lg:h-40 m-2 ${styles.boxes}`}>
        <img
          className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
          src={session2img2.src}  
          alt="Your Image"
        />
        <h2 className={`text-center ${styles.s2h22} font-bold font-outfit text-base mt-2 mb-3 md:text-xl lg:text-lg lg:mt-2`}>
        Easy Hiring
        </h2>
        <p className={`text-center ${styles.s2p} mb-20 leading-4 font-outfit text-xs md:text-lg lg:text-base mt-2 ml-4 mr-4 sm:mt-8 sm:ml-4 sm:mr-4 md:mt-2 md:ml-16 md:mr-16 lg:mt-4 lg:ml-16 lg:mr-16`}>
        We help with hiring, including interviews, negotiations, contracts, and onboarding. Indian talent and the company receive support during recruitment.
        </p>
        </div>

        {/* Box 3 */}
        <div className={`h-60 mb-10 lg:h-40 m-2 ${styles.boxes}`}>
        <img
          className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
          src={session2img3.src}  
          alt="Your Image"
        />
        <h2 className={`text-center ${styles.s2h22} font-bold font-outfit text-base mt-2 mb-3 md:text-xl lg:text-lg lg:mt-2`}>
        Affordability
        </h2>
        <p className={`text-center ${styles.s2p} mb-20 leading-4 font-outfit text-xs md:text-lg lg:text-base mt-2 ml-4 mr-4 sm:mt-8 sm:ml-4 sm:mr-4 md:mt-2 md:ml-16 md:mr-16 lg:mt-4 lg:ml-16 lg:mr-16`}>
        The company pays a fee for talent hire based on salary and role difficulty. The talent is not charged a fee.
        </p>
        </div>

        {/* Box 4 */}
        <div className={`h-60 mb-10 lg:h-40 m-2 ${styles.boxes}`}>
        <img
          className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
          src={session2img4.src}  
          alt="Your Image"
        />
        <h2 className={`text-center ${styles.s2h22} font-bold font-outfit text-base mt-2 mb-3 md:text-xl lg:text-lg lg:mt-2`}>
        Long-Term Relationship
        </h2>
        <p className={`text-center ${styles.s2p} mb-20 leading-4 font-outfit text-xs md:text-lg lg:text-base mt-2 ml-4 mr-4 sm:mt-8 sm:ml-4 sm:mr-4 md:mt-2 md:ml-16 md:mr-16 lg:mt-4 lg:ml-16 lg:mr-16`}>
        STACKKAROO maintains good talent-org relationships by providing feedback, performance appraisal, career development, and settling disputes.
        </p>
        </div>

        </div>
       
     
      </div>



      <div id='session3' className={styles.background3}>
            <p className={`text-center ${styles.s3p} font-outfit text-base mt-2 lg:mt-0 md:text-xl lg:text-lg ml-4 mr-4 pt-4 pb-4 lg:ml-16 lg:mr-16`}>STACKKAROO aims to simplify the remote hiring process and allows global companies to tap into top tech talent from India. Also, it assists Indian talent to find the dream jobs on the global level</p>
            
      </div>


      <div id='session4' className={styles.background4}>
      <h1 className={`text-center ${styles.s2h1} font-outfit font-bold text-base md:text-xl lg:text-2xl  leading-tight mt-1 lg:mt-0 lg:mt-8 pt-10`}>
                Our Rigorous Hiring Process 
        </h1>
        <h2 className={`text-center ${styles.s2h2} font-bold font-outfit text-base mt-2 ml-2 mr-2 md:text-xl lg:text-lg lg:mt-2 lg:mb-20`}>
        To make sure, our Talent get the Best Opportunities
        </h2>


        <div className={`${styles.s4part1} lg:pl-64 lg:pr-64 mt-6`}>
            <div className='flex lg:flex-row flex-wrap'>
                <div className='lg:w-3/12 w-4/12'>
                    <img
                    className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
                    src={session4p11.src}  
                    alt="Your Image"
                    />
                </div>
                
                <div className='lg:w-3/12 w-6/12 mt-6  lg:mt-7'>
                    <h3 className={`${styles.s3p1} font-outfit`}>Profile Screening and Shortlisting</h3>
                </div>
                
                <div className='lg:w-6/12 w-full mt-2 mr-4 ml-4 lg:mt-6 lg:mr-0 lg:ml-0 lg:text-left text-center lg:text-sm'>
                    <p>We evaluate applications based on minimum criteria, professional experience, and background checks of candidates.</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-wrap'>
                <div className='lg:w-3/12 w-4/12'>
                    <img
                    className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
                    src={session4p12.src}  
                    alt="Your Image"
                    />
                </div>
                
                <div className='lg:w-3/12 w-6/12 mt-10  lg:mt-9'>
                    <h3 className={`${styles.s3p1} font-outfit`}>Language Proficiency</h3>
                </div>
                
                <div className='lg:w-6/12 w-full mt-2 mr-4 ml-4 lg:mt-6 lg:mr-0 lg:ml-0 lg:text-left text-center lg:text-sm'>
                    <p>We use communication assessment test to assess candidates' reading, writing, pronunciation, clarity, fluency, and speech speed.</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-wrap'>
                <div className='lg:w-3/12 w-4/12'>
                    <img
                    className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
                    src={session4p13.src}  
                    alt="Your Image"
                    />
                </div>
                
                <div className='lg:w-3/12 w-6/12 mt-10  lg:mt-9'>
                    <h3 className={`${styles.s3p1} font-outfit`}>Aptitute and Evaluation</h3>
                </div>
                
                <div className='lg:w-6/12 w-full mt-2 mr-4 ml-4 lg:mt-6 lg:mr-0 lg:ml-0 lg:text-left text-center lg:text-sm'>
                    <p>We administer scientifically designed aptitude test to assess candidates' reasoning & problem-solving abilities</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-wrap'>
                <div className='lg:w-3/12 w-4/12'>
                    <img
                    className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
                    src={session4p14.src}  
                    alt="Your Image"
                    />
                </div>
                
                <div className='lg:w-3/12 w-6/12 mt-10 lg:mt-9'>
                    <h3 className={`${styles.s3p1} font-outfit`}>Technical Assessment</h3>
                </div>
                
                <div className='lg:w-6/12 w-full mt-2 mr-4 ml-4 lg:mt-6 lg:mr-0 lg:ml-0 lg:text-left text-center lg:text-sm'>
                    <p>We have developed challenging and advanced technical assessments tailored to specific roles, ensuring that only the most skilled candidates make it.</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-wrap'>
                <div className='lg:w-3/12 w-4/12'>
                    <img
                    className="w-20 h-20 mt-3 max-w-md mx-auto object-cover rounded-lg"
                    src={session4p15.src}  
                    alt="Your Image"
                    />
                </div>
                
                <div className='lg:w-3/12 w-6/12 mt-10  lg:mt-9'>
                    <h3 className={`${styles.s3p1} font-outfit`}>Panel Interview</h3>
                </div>
                
                <div className='lg:w-6/12 w-full mt-2 mr-4 ml-4 lg:mt-6 lg:mr-0 lg:ml-0 lg:text-left text-center lg:text-sm'>
                    <p>Our talent acquisition experts conduct a final video interview in the presence of a representative from the hiring company. </p>
                </div>
            </div>
        </div>
        
        <h1 className={`text-center ${styles.s2h1} font-outfit font-bold text-base md:text-xl lg:text-2xl  leading-tight mt-1 lg:mt-8 pt-10`}>
        Hire Best Talents from Stackkaroo
        </h1>
        <h2 className={`text-center ${styles.s2h2} font-bold font-outfit text-base mt-2 ml-2 mr-2 mb-10 md:text-xl lg:text-lg lg:mt-2 lg:mb-20`}>
        4 Easy Steps for Simple and Fast Hiring
        </h2>

        <div className={`${styles.s4part2} text-center`}>
            <div className={`flex ${styles.boxContainer2 } overflow-x-auto`}>
                <div className={`lg:w-3/12 ${styles.s3p2box} lg:ml-24 lg:mr-5 lg:pl-5 lg:pr-5`}>
                    <div className={`${styles.circle}`}>
                        <h1>1</h1>
                    </div>
                    <h3></h3><h3 className={`${styles.s3p1} font-outfit lg:text-lg  font-bold lg:mt-6`}>Share the Job Description with us</h3>
                    <p className={` lg:mt-2 ${styles.s3p}   lg:text-lg pl-5 pr-5 pt-2`}>Talent Specialists will contact you within 2 working hours after you share the job description with us including roles, responsibilities, skills, experience, and budget.</p>
                </div>
                <div className={`lg:w-3/12 ${styles.s3p2box} lg:ml-5 lg:mr-5 lg:pl-5 lg:pr-5`}>
                    <div className={`${styles.circle}`}>
                        <h1>2</h1>
                    </div>
                    <h3></h3><h3 className={`${styles.s3p1} font-outfit  lg:text-lg  font-bold lg:mt-6`}>Review and Shortlist the Matches</h3>
                    <p className={` lg:mt-2 ${styles.s3p}   lg:text-lg pl-5 pr-5 pt-2`}>From there, review and shortlist the best fit profiles shared by STACKKAROO. Company will search if suitable people are not found.</p>
                </div>
                <div className={`lg:w-3/12 ${styles.s3p2box} lg:ml-5 lg:mr-5 lg:pl-5 lg:pr-5`}>
                    <div className={`${styles.circle}`}>
                        <h1>3</h1>
                    </div>
                    <h3></h3><h3 className={`${styles.s3p1} font-outfit lg:text-lg font-bold lg:mt-6`}>Interview and Hire the Best</h3>
                    <p className={` lg:mt-2 ${styles.s3p}  lg:text-lg pl-5 pr-5 pt-2`}>You can interview and hire in 48 hours. Additionally, you can hire top talent from India with 40% cost saving.</p>
                </div>
                <div className={`lg:w-3/12 ${styles.s3p2box} lg:ml-5 lg:mr-20 lg:pl-5 lg:pr-5`}>
                    <div className={`${styles.circle}`}>
                        <h1>4</h1>
                    </div>
                    <h3></h3><h3 className={`${styles.s3p1} font-outfit lg:text-lg  font-bold lg:mt-6`}>Post Hiring Support</h3>
                    <p className={` lg:mt-2 ${styles.s3p}  lg:text-lg pl-5 pr-5 pt-2`}>We'll also ensure smooth onboarding and support, such as contracts, replacement, retention, cancellation and work in your time zone.</p>
                </div>
            </div>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br>

      </div>












        

    </div>
  )
}

export default HomePage
