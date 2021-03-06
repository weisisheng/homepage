import React from "react";
import Link from "gatsby-link";
import { withRouter } from "react-router";
import classnames from "classnames";
import Helmet from "react-helmet";
import Track from "utils/Track";

import SuccessfulResumesStrip from "components/SuccessfulResumes/SuccessfulResumesStrip";
import StoreService from "utils/StoreService";

import logoImg from "../assets/img/logo-with-text.svg";
import logoWhiteImg from "../assets/img/logo-white.svg";

class Header extends React.PureComponent {
    state = {
        stick: false,
        hidden: true,
    };

    constructor(props) {
        super(props);
        this.onScroll = this.scroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.onScroll);
        if (this.props.location.pathname.indexOf("successful-resumes") !== -1) {
            StoreService.setItem("isMsgShowed", true);
        }

        this.setState({
            hidden: Boolean(StoreService.getItem("isMsgShowed")),
        });
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    scroll(e) {
        const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;

        this.setState({
            stick: top > 10,
        });
    }

    toggleNav() {
        if (this.state.mobileNavOpened) {
            this.setState({ mobileNavOpened: "" });
        } else {
            this.setState({ mobileNavOpened: "navbar-mobile-active" });
        }
    }

    onHide() {
        this.setState({
            hidden: true,
        });
        StoreService.setItem("isMsgShowed", true);
    }

    render() {
        const { location: { pathname } } = this.props;
        const navigationSpacerClass = this.state.hidden
            ? "navigation-spacer"
            : "navigation-spacer-sr";

        return (
            <div>
                <Helmet
                 bodyAttributes={{
                    class: this.state.mobileNavOpened,
                 }}
                />
                <div className={`${navigationSpacerClass}`} />

                <nav
                 className={classnames("navbar navbar-default navbar-sticky navbar-static-top", {
                    "navbar-stick": this.state.stick,
                 })}>
                    <div>
                        {!this.state.hidden ? (
                            <SuccessfulResumesStrip hideMsg={() => this.onHide()} />
                        ) : null}
                    </div>

                    <div className="navbar-spacing">
                        <div className="navbar-header">
                            <button
                             type="button"
                             onClick={() => this.toggleNav()}
                             className="navbar-toggle collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <div className="navbar-mobile-hidden">
                                    <span className="icon-bar first" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar last" />
                                </div>
                                <div className="close navbar-mobile-visible">&times;</div>
                            </button>
                            <Link
                             to="/"
                             className="navbar-logo-wrapper">
                                <img
                                 className="navbar-logo"
                                 src={logoImg}
                                 alt="Enhancv Logo"
                                 width="144"
                                 height="23"
                                />
                            </Link>

                            <img
                             className="navbar-menu-logo"
                             src={logoWhiteImg}
                             alt="Enhancv Logo"
                            />

                            <div className="navbar-center">
                                <ul className="list-unstyled navbar-mobile-menu navbar-mobile-visible m-bottom-10">
                                    <li className="active">
                                        <a href="/">Homepage</a>
                                    </li>
                                    <li
                                     className={classnames({
                                        active: pathname.indexOf("/successful-resumes") !== -1,
                                     })}>
                                        <Link to="/successful-resumes">Successful Resumes</Link>
                                    </li>
                                    <li
                                     className={classnames({
                                        active: pathname === "/pricing",
                                     })}>
                                        <Link to="/pricing">Pricing</Link>
                                    </li>
                                    <li
                                     className={classnames({
                                        active: pathname === "/resources",
                                     })}>
                                        <Link to="/resources">Resources</Link>
                                    </li>
                                    <li>
                                        <a
                                         href="https://blog.enhancv.com/"
                                         target="_blank">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                                <div className="navbar-mobile-visible">
                                    <a
                                     href="https://app.enhancv.com"
                                     onClick={() => Track("Homepage", "Get Started Mobile Menu")}
                                     className="visible-xs btn btn-default btn-sign-in">
                                        GET STARTED
                                    </a>
                                </div>
                                <a
                                 href="https://app.enhancv.com/signup"
                                 onClick={() => Track("Homepage", "Signup Header")}
                                 className="visible-xs btn btn-primary navbar-mobile-visible-sticky navbar-mobile-signup">
                                    Sign Up
                                </a>
                                <a
                                 href="https://app.enhancv.com/login"
                                 onClick={() => Track("Homepage", "Sign In Header")}
                                 className="btn btn-primary navbar-mobile-login">
                                    Sign In
                                </a>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li
                                 className={classnames({
                                    active: pathname.indexOf("/successful-resumes") !== -1,
                                 })}>
                                    <Link to="/successful-resumes">Successful Resumes</Link>
                                </li>
                                <li
                                 className={classnames({
                                    active: pathname === "/resources",
                                 })}>
                                    <Link to="/resources">Resources</Link>
                                </li>
                                <li
                                 className={classnames({
                                    active: pathname === "/pricing",
                                 })}>
                                    <Link to="/pricing">Pricing</Link>
                                </li>

                                <li>
                                    <a
                                     onClick={() => Track("Homepage", "Sign In Header")}
                                     href="https://app.enhancv.com/login">
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <button
                                     onClick={() => {
                                        Track("Homepage", "Get Started Header");
                                        window.location = "https://app.enhancv.com";
                                     }}
                                     className="btn btn-primary navbar-btn m-left-1 m-right-1">
                                        Get Started
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);
