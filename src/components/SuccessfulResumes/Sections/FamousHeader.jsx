import React from "react";
import Img from "components/Common/Img";
import Track from "utils/Track";

export default function FamousHeader({ name, cover, description, smallDescription }) {
    return (
        <section className="famous-resume--head relative">
            <div className="famous-resume--head-image">
                <Img
                 sizes={cover.childImageSharp.sizes}
                 style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                 }}
                 alt={`${name}'s photo`}
                />
            </div>

            <div className="famous-resume--head-content">
                <div className="container">
                    <div className="resumes--content Grid-cell--lg-6 Grid-cell--md-5 Grid-cell--xs-12">
                        <div className="text text-gray-3 text-center-xs text-center-sm">
                            <h1 className="h1 text-md-white">{name}</h1>
                            <div className="m-xs-top-1 m-md-top-3 text-gray-2">
                                <h5 className="h5 text-gray-1 m-bottom-3">{smallDescription}</h5>
                                <p className="p-big text-gray-1">{description}</p>
                            </div>
                            <a
                             href="#famous-resume"
                             className="btn btn-big btn-primary m-xs-top-2 m-md-top-6">
                                See the resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
