import React from "react";
import Img from "gatsby-image";
import classnames from "classnames";

import elonResume from "assets/img/new-successful-resumes/famous/elon-musk/cv.png";

import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";
import FooterList from "components/SuccessfulResumes/FooterList";

export default function FamousContainer({
	name,
	resume,
	finalDescription,
	list
}) {
	const firstName = name.split(" ")[0];
	console.log(list);

	return (
		<div
		 id="famous-resume"
		 className="p-md-top-10 famous-resume--container-dark"
		>
			<div className="container">
				<section className="resumes--accent accent--reverse Grid full-width noBackground p-md-left-10">
					<div className="resumes--preview Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6">
						<span className="resumes--preview-holder">
							<a
							 href="#view-resume"
							 data-toggle="modal"
							 data-track="event"
							 data-category="Successful Resumes"
							 data-action="Click Full Resume"
							 data-label="Casey Neistat"
							>
								<Img
								 resolutions={resume.childImageSharp.resolutions}
								 width="442"
								 alt="Elon Musk"
								/>
								<button className="btn-resume-preview" />
							</a>
						</span>
					</div>
					<div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12">
						<div className="m-md-top-15">
							<h2 className="h2 m-xs-top-6 text-white">
								{firstName}’s resume
							</h2>
							<div className="m-xs-top-1 m-md-top-3">
								<h5 className="h5 text-white-smoke m-bottom-3">
									One resume to rule them all.
								</h5>
								<p className="p-big text-white-smoke">
									{finalDescription}
								</p>
							</div>
							<a
							 target="_blank"
							 href="#"
							 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
							>
								See the Resume
							</a>
							<div className="full-width">
								<div className="component--feeling feeling-box-dark m-md-top-13 m-sm-top-4 m-sm-right-2">
									<span className="m-right-1 m-left-1">
										Feeling inspired?
									</span>
									<span className="component--feeling-emotion emotion-smiling" />
									<span className="component--feeling-emotion emotion-neutral" />
									<span className="component--feeling-emotion emotion-happy" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<SubscribeNoImage dark={true} />

				<FooterList
				 list={list}
				 famousPrefix="famous/"
				/>
			</div>
		</div>
	);
}
