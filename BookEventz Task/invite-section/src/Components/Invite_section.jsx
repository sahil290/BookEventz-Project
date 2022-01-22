import React from "react";
import "./Invite_section.css";
import { FcInvite } from "react-icons/fc";
import { HiUserGroup, HiOutlineTemplate } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";
import { CgFormatText } from "react-icons/cg";
const InviteSection = () => {
  return (
    <>
      <main className="invite-section">
        <div className="container-fluid">
          <div className="row">
            <h1 className = "top-heading">Surprise Party Invitation</h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-2 mt-3">Some dummy text </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li className="active">
                  <FcInvite size={25} /> Create Invite
                </li>
                <li className="disabled">
                  <HiUserGroup size={25} /> Create Group
                </li>
                <li className="disabled">
                  <MdAttachEmail size={25} /> Attach Rsvp
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row template-row">
            <div className="row buttons-row">
              <div className="col-sm-12 d-flex justify-content-end">
                <button className="btn px-4" id="save-button">
                  Save Draft
                </button>
                <button className="btn px-4" id="image-button">
                  Download Image
                </button>
                <button className="btn px-4" id="share-button">
                  Share Image
                </button>
              </div>
            </div>
            <div className="col-sm-1" id="small-container">
              <a href="template">
                <HiOutlineTemplate size={35} />
                <br />
                <span>Template</span>
              </a>

              <a href="image">
                <BsFillImageFill size={35} />
                <br />
                <span>Image</span>
              </a>
              <br />
              <a href="form">
                <FaWpforms size={35} />
                <br />
                <span>Form</span>
              </a>

              <a href="text">
                <CgFormatText size={35} />
                <br />
                <span>Text</span>
              </a>
            </div>
            <div className="col-sm-3" id="medium-container">
              Templates area
            </div>
            <div className="col-sm-8" id="large-container">
              Template review area
            </div>
          </div>
        </div>
      </main>
      <div className="container-fluid">
        <div className="row paragraph-section">
          <div className="col-sm-8 parawrap">
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
          <div className = "col-sm-4">
            <h3 className = "search-heading text-center pt-4">Also Searched as:</h3>
            <ul className = "search-content-list">
              <li className = "search-content">Change the Wedding Date Template</li>
              <li className = "search-content">Wedding Cards</li>
              <li className = "search-content">Wedding Card Template</li>
              <li className = "search-content">Show More</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteSection;
