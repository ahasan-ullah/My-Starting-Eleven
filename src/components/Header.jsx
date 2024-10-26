import PropTypes from 'prop-types';
import Banner from '../assets/bg-shadow.png'
import BannerLogo from '../assets/banner-main.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header=({handleCreditButton})=>{
  const handleAlert=()=>{
    toast();
    toast.success('Credit Added to your Account',{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <div>
      <div
        className="bg-black bg-cover rounded-2xl"
        style={{
          backgroundImage:
            `url(${Banner})`,
          
        }}
      >
        <div className="text-center space-y-8 py-10 lg:p-16">
          <div className="flex items-center justify-center">
            <img src={BannerLogo} alt="" />
          </div>
          <div className="">
            <h1 className="mb-5 text-3xl lg:text-5xl text-[#FFFFFF] font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-5 text-[#FFFFFFB3] text-base md:text-xl lg:text-2xl">Beyond Boundaries Beyond Limits
            </p>
          </div>
          <div className="inline-block p-2 border-2 rounded-2xl border-[#E7FE29]">
            <button onClick={()=>{handleAlert(),handleCreditButton()}} className="btn bg-[#E7FE29] text-black border-none rounded-2xl">Claim Free Credit</button>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes={
  handleCreditButton: PropTypes.func.isRequired,
}

export default Header;
