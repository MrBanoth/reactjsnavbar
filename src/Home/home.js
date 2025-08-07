import Footer from '../Shared/footer';
import Navbar from '../Shared/navbar';

function Home() {
  return (
    <div className="container">
      {/* Navbar Row */}
      <div className="row">
        <div className="col mt-3">
          <Navbar />
        </div>
      </div>

      {/* Centered Welcome Section */}
      <div
        className="row pt-5 mt-5 justify-content-center align-items-center"
        style={{ minHeight: '30vh' }} // Optional: adjust vertical centering
      >
        <div className="col text-center">
          <h1>Welcome to Home Page</h1>
          <p>This is the main content of the home page.</p>
        </div>
      </div>

      {/* Other Section */}
      <div className="row pt-2 mt-5 align-items-center justify-content-center">
        <div className="col text-cente bg-light p-5 border rounded-4 text-center">
          <h1>Another Heading to Jumptron</h1>
          <p>This is the content of the other section.</p>
          <button className="btn btn-dark p-2 me-2">learn more</button>
            <button className="btn btn-dark p-2">Create Account </button>
        </div>
      </div>

      {/* Footer Row */}
      <div className="row mt-5">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
