import NavbarLogo from "../assets/logo.png";
const Footer=()=>{
  return (
    <div className="bg-[#06091A] px-5 pb-5 md:pb-10 pt-36">
      <div className="flex items-center justify-center md:mb-10">
        <img className="w-20 md:w-28" src={NavbarLogo} alt="" />
      </div>
      <footer className="footer">
        <nav>
          <h6 className="text-lg font-bold text-[#FFFFFF]">Services</h6>
          <div className="text-[#FFFFFF99] text-justify">
            My Starting Eleven offers a dynamic fantasy sports <br />
            platform where fans can create teams, compete, <br />
            and earn rewards based on real player performances.
          </div>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-[#FFFFFF]">Quick Links</h6>
          <a className="link link-hover text-[#FFFFFF99]">Home</a>
          <a className="link link-hover text-[#FFFFFF99]">Services</a>
          <a className="link link-hover text-[#FFFFFF99]">About</a>
          <a className="link link-hover text-[#FFFFFF99]">Contact</a>
        </nav>
        <form>
          <h6 className="text-lg font-bold text-[#FFFFFF]">Subscribe</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="label-text text-[#FFFFFF99]">
                Subscribe to our newsletter for the latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="input input-bordered join-item w-48 md:w-full"
              />
              <button
                onClick={(event) => event.preventDefault()}
                className="btn join-item bg-gradient-to-r from-indigo-300 via-orange-300 to-pink-300"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="divider"></div>
      <div>
        <p className="text-center text-[#FFFFFF99] text-sm">@2024 My Starting Eleven All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
