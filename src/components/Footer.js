import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
   
    <div className="containerfluid  " style={{marginBottom:'0px'}}>
            <footer className="text-center text-lg-start bg-dark" style={{ backgroundColor: '#db6930'}}>
                <div className="container d-flex justify-content-center py-4" >
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>

                <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" >  NEWS MONKEY</a>
                </div>
            </footer>
        </div>
    
  )
}
