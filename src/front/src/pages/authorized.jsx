import React from 'react';
// import React, { useRef, useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
// import axios from "axios";

// Conponents
import Navbar from "../base/navbar";
import Footer from "../base/footer";

// Styles
import "../scss/base.scss";
import "../scss/index.scss";
import "../scss/authorized.scss";

// Assets
// import logoAssetPath from "../assets/brand/logo.svg";
// import kv from "../assets/background/kv.jpg";

//UIkit
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
import "uikit/dist/css/uikit.min.css";

//UIkit
UIkit.use(Icons);


export default function authorized() {
    return (
        <div>
            <Navbar />
            <div className="uk-padding uk-margin">
                <div className="uk-alert-primary" data-uk-alert>
                    <a className="uk-alert-close" data-uk-close></a>
                    <p>Authorized!</p>
                </div>
                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div>
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <img className="uk-border-circle slack-user-icon" src={Cookies.get("user_profile_image_512")}
                                        alt="slack-user-icon" />
                                    </li>
                                    <li>{Cookies.get("user_id")}</li>
                                    <li>{Cookies.get("user_name")}</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div>
                                <ul className="uk-list uk-list-large uk-list-divider">
                                    <li>
                                        <img className="uk-border-circle slack-team-icon" src={Cookies.get("team_icon_image_original")} alt="slack-team-icon" />
                                    </li>
                                    <li>{Cookies.get("workspace_id")}</li>
                                    <li>{Cookies.get("workspace_name")}</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}