import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";

const UserLogin = () => {



  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://image.winudf.com/v2/image1/Y29tLnNnbS5oZHNwb3J0d2FsbHBhcGVyX3NjcmVlbl8xNl8xNTY3MDc4NTIxXzA4OQ/screen-16.jpg?fakeurl=1&type=.jpg)',
              width: '28rem',
              marginLeft:"64%",
              marginTop:"32%"
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> In</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your username'
                group
                type='text'
                validate
                labelClass='white-text'
                name="username"
                
              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
                name="password"
               
              />
             
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                    
                  >
                    <Link to={"/dashboard"} style={{color :"white"}}>Sign In</Link>
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
               Are You a Coach?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                  <Link to={"/master-login"} style={{color :"#007bff"}}>Sign In</Link>
                  </a>
                </p>
              </MDBCol>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                 Don't Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                  <Link to={"/signup"} style={{color :"#007bff"}}>Sign Up</Link>
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserLogin;