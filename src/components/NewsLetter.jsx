import Banner from '../assets/bg-shadow.png'
const NewsLetter=()=>{
  return (
    <div className="flex items-center justify-center absolute md:translate-x-[50%] translate-y-[-60%] backdrop-blur-lg p-4 border border-white rounded-2xl">
      <footer className="py-2 px-4 md:py-10 md:px-40 bg-cover rounded-2xl bg-white" style={{backgroundImage:
            `url(${Banner})`}}>
        <form className='space-y-5'>
          <h1 className="text-xl text-center md:text-3xl font-bold text-black">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[#131313B3] text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <fieldset className="form-control w-full">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="input input-bordered join-item w-full"
              />
              <button
                onClick={(event) => event.preventDefault()}
                className="btn w-full bg-gradient-to-r from-indigo-300 via-orange-300 to-pink-300"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default NewsLetter;
