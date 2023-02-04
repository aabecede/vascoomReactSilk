// import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <Container>
      <Row>
        <Col className='col-12 col-md-7' style={{paddingTop:'10%', paddingBottom:'5%'}}>
          <h4 className='selamat-datang'>Hai, Selamat Datang</h4>
          <h5 className='silahkan-melanjutkan'>Silahkan login untuk melanjutkan</h5>
          <button
            className='btn btn-default text-center'
            style={{
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #EFF3F6',
              borderRadius: '8px',
            }}>
            <FcGoogle/> &nbsp;
            Sign In With Google
          </button>
          <Row>
            <Col><hr></hr></Col>
            <Col><small>or Sign in With Email</small></Col>
            <Col><hr></hr></Col>
          </Row>
          <form>
            <Row>
              <div className='col-6'>
                <label className='font-gilroy font-color-label'>Nama Depan</label>
                <input type="text" placeholder='Jhon' className='form-control shadow-box'></input>
              </div>
              <div className='col-6'>
                <label className='font-gilroy font-color-label'>Nama Belakang</label>
                <input type="text" placeholder='Doe' className='form-control shadow-box'></input>
              </div>
              <div className='form-group'>
                <label className='font-gilroy font-color-label'>KTP</label>
                <input type="text" placeholder='Masukkan No. KTP Anda' className='form-control shadow-box'></input>
              </div>
              <div className='form-group'>
                <label className='font-gilroy font-color-label'>Email</label>
                <input type="text" placeholder='Masukkan Email' className='form-control shadow-box'></input>
              </div>
              <div className='form-group'>
                <label className='font-gilroy font-color-label'>No. Telpon</label>
                <input type="text" placeholder='Masukkan No. Telpon' className='form-control shadow-box'></input>
              </div>
              <div className='form-group'>
                <label className='font-gilroy font-color-label'>Password</label>
                <div className='input-group mb-3'>
                  <input type='password' className='form-control' placeholder='Password'></input>
                  <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type="button">
                      <FaEye/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label className='font-gilroy font-color-label'>Konfirmasi Password</label>
                <div className='input-group mb-3'>
                  <input type='password' className='form-control' placeholder='Konfirmasi Password'></input>
                  <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type="button">
                      <FaEye/>
                    </button>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <button className="btn btn-default" style={{ backgroundColor: "#002060", color: "white", width: '100%' }}>Register <FaArrowRight style={{ float:'right', paddingTop:'1%' }} /></button>
              </div>
              <div className='form-group'>
                <small style={{color: '#BEBEBE'}}>Sudah Punya Akun ? </small>
                <small className='font-gilroy'>Login Sekarang</small>
              </div>
            </Row>
          </form>
        </Col>
        <Col className='col-12 col-md-5' style={{ background:'linear-gradient(45deg, rgb(0 ,32, 96), #046cb3)' }}>
          <div style={{
            width: '300px',
            height: '300px',
            background: 'linear-gradient(89deg, #cfdfec3b, #ffffff00)',
            borderRadius: '50%',
            float: 'right',
            marginRight: '-60%',
            marginTop: '-68%'
          }}>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
