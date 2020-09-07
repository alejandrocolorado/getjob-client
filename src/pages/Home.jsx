import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

function Home() {
  return (
    <div className="js-content section cover">
      <h3 className="title">
        Wondering what type of skills you need for landing a job in the tech
        industry?
      </h3>
      <Image src="/images/2250.jpg" fluid />
      <p className="title">Wonder no more!</p>
      <Link className='link' to={"/login"}>
        <MDBBtn color="blue-grey">Give it a try</MDBBtn>
      </Link>
    </div>
  );
}

export default Home;
