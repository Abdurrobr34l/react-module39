import React from "react";

const Home = () => {
  return (
    <div>
      <title>Module-49 | Home</title>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Module-49</h1>
            <p className="mb-5">
              Join our platform to manage your tasks efficiently, connect with
              your peers, and stay organized. Sign up now and get started in
              minutes!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
