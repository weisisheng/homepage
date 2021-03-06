import React from "react";
import Img from "components/Common/Img";
import Link from "gatsby-link";
import ResumeBadge from "components/SuccessfulResumes/ResumeBadge";
import { shuffle, flow, slice, map } from "lodash/fp";

import barackObama from "assets/img/new-successful-resumes/avatars/barack_obama/avatar.jpg";
import barackCompany from "assets/img/new-successful-resumes/avatars/barack_obama/company.png";
import hoverResume from "assets/img/new-successful-resumes/placeholders/hover-cv.png";

export default function FooterList({ list, famousPrefix = "" }) {
    const items = flow(shuffle, slice(0, 3), map("node"))(list);

    return (
        <section className="resumes--others m-sm-top-4 m-md-top-13 m-sm-bottom-3 m-md-bottom-7">
            <div className="resumes--list">
                <p className="big-p text-center text-gray-2 text-gray-1">
                    Other successful resumes made on Enhancv
                </p>
            </div>
            <div className="resumes--others-wrap noBackground Grid">
                {items.map((node, index) => (
                    <Link
                     key={node.url + index}
                     to={`/successful-resumes/${famousPrefix + node.url}`}
                     className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1">
                        <div className="resumes--box">
                            {node.label ? <ResumeBadge label={node.label} /> : null}
                            <span className="resumes--person-avatar">
                                <Img
                                 className="m-xs-left-1 m-md-left-2"
                                 resolutions={node.avatar.childImageSharp.resolutions}
                                 alt={`${node.name}'s photo`}
                                />
                            </span>
                            <div className="resumes--others-person-info">
                                <h4 className="resumes--person-name m-top-1 m-bottom-0">
                                    {node.name}
                                </h4>
                                {node.tags ? (
                                    <h5 className="resumes--person-jobtitle m-no">
                                        {node.tags.join(", ")}
                                    </h5>
                                ) : null}
                                {node.description ? (
                                    <div className="resumes--person-description">
                                        <p className="m-top-2">{node.description}</p>
                                    </div>
                                ) : null}

                                {node.companyLogo ? (
                                    <div className="resumes--hired resumes--hired-list-item m-xs-top-2 m-md-top-3">
                                        <span className="label">Hired at</span>
                                        <Img
                                         style={{ display: "inline-block" }}
                                         className="m-top-0"
                                         resolutions={node.companyLogo.childImageSharp.resolutions}
                                         alt="Company logo"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="resumes--hovered">
                            <Img
                             className="m-xs-left-1 m-md-left-2"
                             resolutions={node.resumes[0].image.childImageSharp.resolutions}
                             alt={`${node.name}'s resume preview`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
