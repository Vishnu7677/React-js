import React from 'react';
import './ATMDetails.css';
import { SiSpringsecurity } from "react-icons/si";
import { TbRefresh } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";
import { CiCreditCardOff } from "react-icons/ci";
import { Link } from "react-router-dom";

const CardDetails = () => {

    return (
        <div className='card_details_container container-fluid'>
            <div className='row'>
                <div className='col-sm-12' >
                    <div className='card atm_card_details_heading'>
                        <h6>Virtual Debit Card</h6>
                    </div>
                    <div className="card atm_card_details mt-2">
                        <div className="atm_card_details_button_container">
                            <SiSpringsecurity className='atm_card_details_logo' />
                            <Link to='/generatepin' className='atm_card_details_button'>Generate Pin</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            < CiCreditCardOff className='atm_card_details_logo' />
                            <Link to='/blockcard' className='atm_card_details_button'>Block Card</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbRefresh className='atm_card_details_logo' />
                            <Link to='/reissuecard' className='atm_card_details_button'>Reissue Card</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbSettingsCog className='atm_card_details_logo' />
                            <Link to="/managecard" className='atm_card_details_button'>Manage Card Limit</Link>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card mt-2'>
                        <div>
                            <h6>Upgrade Debit Card</h6>
                            <p>Enjoy exclusive privileges on entertainment, shopping and added rewards with our premium range of Royal islamaic Debit Cards</p>
                        </div>
                        <div>
                            <button className='atm_card_details_button_upgrade'><p className='atm_card_details_para_upgrade'>Upgrade Now</p></button>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card mt-2'>
                        <div>
                            <h6>Manage Subscription</h6>
                            <p>Manage Standing instruction and recurring charges</p>
                        </div>
                        <div>
                            <button className='atm_card_details_button_upgrade'><p className='atm_card_details_para_upgrade'>Manage Subscriptions</p></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;