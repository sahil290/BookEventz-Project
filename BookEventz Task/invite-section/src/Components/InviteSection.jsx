import React from "react";
import "./InviteSection.css";
import { FcInvite } from "react-icons/fc";
import { HiUserGroup, HiOutlineTemplate } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { CgFormatText } from "react-icons/cg";
const InviteSection = () => {
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <h1 className="top-heading">Surprise Party</h1>
        </div>
        <div classNAme="row">
          <p className="navigation-information p-2 mt-3">Some dummy Text</p>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row create-buttons-row">
          <div className="col-md-12 col-sm-12 col-lg-12 buttons-container">
            <button className="btn active p-2" id="active-button">
              <FcInvite size={25} /> Create Invite
            </button>
            <button className="btn disabled p-2" id="disabled-button">
              <HiUserGroup size={25} /> Create Group
            </button>
            <button className="btn disabled p-2" id="disabled-button">
              <MdAttachEmail size={25} /> Attach Rsvp
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-12 col-lg-1 col-md-1 text-center"
            id="vertical-container"
          >
            <a href="template">
              <HiOutlineTemplate size={40} />
              <br />
              <span>Template</span>
            </a>
            <br />
            <a href="image">
              <BsFillImageFill size={40} />
              <br />
              <span>Image</span>
            </a>
            <br />
            <a href="form">
              <FaWpforms size={40} />
              <br />
              <span>Form</span>
            </a>
            <br />
            <a href="text">
              <CgFormatText size={40} />
              <br />
              <span>Text</span>
            </a>
          </div>
          <div
            id="template-area"
            className="col-sm-4 col-lg-3 col-md-3 mt-1 text-center"
          >
            <h2 className="text-center pt-5 mt-5">
              Template will be shown here
            </h2>
          </div>
          <div
            id="template-review-area"
            className="col-sm-8 col-lg-6 col-md-5 mt-1"
          >
            <h2 className="text-center pt-5 mt-5">
              You can edit your template here
            </h2>
          </div>
          <div
            className="col-sm-12 col-lg-2 col-md-3 mt-1"
            id="buttons-for-save"
          >
            <button className="btn px-2" id="save-button">
              Save Draft
            </button>
            <button className="btn px-2" id="share-button">
              Share Image
            </button>
            <button className="btn px-2" id="image-button">
              Download Image
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row paragraph-section">
          <div className="col-sm-12 col-lg-8 col-md-8 parawrap">
            <h1 className="paragraph-heading">
              Send Free Online Invitation through whatsapp and email
            </h1>
            <p className="paragraph-info">
              Use free online invitation card design to design your customised
              surprise party invitation Invite your friends, family and
              colleagues through whatsapp, email or any other messenger. Choose
              a design of your choice, customise according to your needs and
              download your surprise party invitation. You can directly make a
              group of your invites in BookEventz website and invite your
              friends in your invitation list directly from your bookeventz
              website. Else you can download and send it to your friends through
              email or whatsapp.{" "}
            </p>
            <h1 className="paragraph-heading">
              Surprise party invitation for birthday party
            </h1>
            <p className="paragraph-info">
              surprise party invitation is especially designed for birthday
              party invites. Inviting the guest is the major task of an event
              planner and a major task that worries them. But our surprise party
              invitation makes the task simpler as it could be customized using
              our free invite software. surprise party invitation is a highly
              searched invite theme that conveys the essence of the birthday
              party as well. Now you can reach all your invites by making
              surprise party invitation from BookEventz platform.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-4">
            <h3 className="search-heading text-center pt-4">
              Also Searched as:
            </h3>
            <ul className="search-content-list">
              <li className="search-content">
                Change the Wedding Date Template
              </li>
              <li className="search-content">Wedding Cards</li>
              <li className="search-content">Wedding Card Template</li>
              <li className="search-content">Show More</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteSection;
