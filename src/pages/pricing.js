import React from "react";
import Helmet from "react-helmet";

import DefaultLayout from "../layouts/DefaultLayout";

import PricingBenefits from "./Pricing/PricingBenefits";
import HomepageCTA from "./Homepage/HomepageCTA";

// noNavigation: true
// socialTitle: "Enhancv: A resume to be proud of"
// title: "Enhancv | Professional Resume & CV Builder"
// socialDescription: "Create your resume with Enhancv to make sure the key things come across. Stand out and get that interview."

export default function Pricing() {
	return (
		<DefaultLayout>
			<Helmet
			 title={"Enhancv | Professional Resume & CV Builder"}
			 meta={[
				{
					name: "description",
					content: "Enhancv: A resume to be proud of"
				}
			 ]}
			/>
			<div className="pricing-header">
				<div className="container text-center">
					<h1 className="hidden-xs hidden-sm md-lg-heading-margin">
						Are you proud when you show your resume?
					</h1>
					<h2 className="hidden-md hidden-lg xs-sm-heading-margin m-top-3 text-bold">
						Are you proud when<br /> you show your resume?
					</h2>

					<div className="m-top-2">
						<p className="p-big">
							Sign up now, decide on your plan later.
						</p>
					</div>
					<div>
						<div className="m-top-3 " />
						<a
						 href="{{ urls.builder }}"
						 data-track="event"
						 data-category="Pricing"
						 data-action="Start Trial"
						 data-label="Header button"
						 className="btn btn-primary btn-lg"
						>
							Try free for 14 days
						</a>
					</div>
					<div className="m-top-2">
						<p
						 className="text-muted-deep m-top-0"
						 style={{ fontSize: 12 }}
						>
							* No credit card required.
						</p>
					</div>
				</div>
			</div>

			<div className="pricing-tabs">
				<div className="container">
					<div className="pricing-tab-switch">
						<a
						 href="#basic"
						 data-track="event"
						 data-category="Pricing"
						 data-action="Tab Change"
						 data-label="Basic"
						 className="btn switch-button switch-basic"
						>
							BASIC
						</a>

						<a
						 href="#pro"
						 data-track="event"
						 data-category="Pricing"
						 data-action="Tab Change"
						 data-label="Pro"
						 className="btn switch-button focused switch-pro"
						>
							PRO
						</a>
					</div>

					<div
					 className="text-center basic-heading"
					 style={{ display: "none" }}
					>
						<h3 className="m-top-5">
							A first step to a stand-out resume
						</h3>
						<p className="text-muted m-top-2">
							Build the basics of a new, more memorable resume
							that sets you apart from other candidates.
						</p>
					</div>

					<div className="text-center pro-heading">
						<h3 className="m-top-8">
							Create a resume you're proud of
						</h3>
						<p className="text-muted m-top-2">
							Stand out with a visual resume that highlights the
							key things about you and shows you're relevant.
						</p>
					</div>

					<div className="overflow-wrapper-container">
						<div
						 className="Grid Grid--justifyCenter basic-tabs m-top-3 m-bottom-2"
						 style={{ display: "none" }}
						>
							<div className="tab basic-plan m-top-3 text-center">
								<div className="m-top-3">
									<span className="currency-basic">$</span>
									<span className="price-big-basic">4</span>
									<span className="price-small-basic">
										.99/m
									</span>
								</div>
								<p className="m-top-0 text-muted">
									to create a resume<br /> that draws
									attention
								</p>
								<a
								 data-track="event"
								 data-category="Pricing"
								 data-action="Buy Basic"
								 href="https://app.enhancv.com/checkout/basic"
								 className="btn btn-primary btn-price-fixed m-top-1"
								>
									Buy Basic
								</a>
								<div className="m-top-2">
									<a
									 data-track="event"
									 data-category="Pricing"
									 data-action="Start Trial"
									 data-label="Text link in basic plan"
									 href="https://app.enhancv.com/"
									 className="text-muted feature-link underlined"
									>
										or try free for 14 days
									</a>
								</div>
							</div>
						</div>

						<div className="Grid Grid--justifyCenter m-top-3 overflow-wrapper pro-tabs">
							<div className="tab side-tab left-tab text-center">
								<div className="plan-name m-top-3">Monthly</div>
								<div className="tab-price m-top-0">
									<span className="currency">$</span>
									<span className="big-price">19</span>
									<span className="small-price">.99/m</span>
								</div>
								<div className="text-muted m-top-1 billed-text">
									you will be billed <br />
									once a month
								</div>

								<a
								 data-track="event"
								 data-category="Pricing"
								 data-action="Buy Pro"
								 data-label="Monthly"
								 href="https://app.enhancv.com/checkout/pro-monthly"
								 className="btn btn-primary btn-light-green btn-price-fixed m-top-2"
								>
									Buy Pro Monthly
								</a>
								<p className="text-muted m-top-1 save-price">
									UPGRADE ANYTIME
								</p>
							</div>

							<div className="tab center-tab text-center">
								<div className="center-tab-header">
									<span>MOST POPULAR</span>
								</div>
								<div className="plan-name m-top-4">
									Quarterly
								</div>
								<div className="tab-price">
									<span className="currency">$</span>
									<span
									 className="big-price"
									 style={{ fontSize: 50 }}
									>
										14
									</span>
									<span className="small-price">.99/m</span>
								</div>
								<div className="text-muted m-top-1 billed-text">
									<span className="text-muted-deep line-through">
										$59.97
									</span>{" "}
									$44.97<br />
									billed every 3 months
								</div>

								<a
								 data-track="event"
								 data-category="Pricing"
								 data-action="Buy Pro"
								 data-label="Quarterly"
								 href="https://app.enhancv.com/checkout/pro-quarterly"
								 className="btn btn-primary btn-price-fixed m-top-2"
								>
									Buy Pro Quarterly
								</a>
								<p className="text-muted m-top-1 save-price">
									SAVE <span>25%</span>
								</p>
							</div>

							<div className="tab side-tab right-tab text-center">
								<div className="plan-name m-top-3">
									Semi-annual
								</div>
								<div className="tab-price m-top-0">
									<span className="currency">$</span>
									<span className="big-price">10</span>
									<span className="small-price">.99/m</span>
								</div>
								<div className="text-muted m-top-1 billed-text">
									<span className="text-muted-deep line-through">
										$119.94
									</span>{" "}
									$65.94<br />
									billed every 6 months
								</div>

								<a
								 data-track="event"
								 data-category="Pricing"
								 data-action="Buy Pro"
								 data-label="Semi-Annual"
								 href="https://app.enhancv.com/checkout/pro-semiannual"
								 className="btn btn-primary btn-light-green btn-price-fixed m-top-2"
								>
									Buy Pro Semi-Annual
								</a>
								<p className="text-muted m-top-1 save-price">
									SAVE <span>45%</span>
								</p>
							</div>
						</div>
					</div>

					<div className="text-center scroll-dot-container m-top-1">
						<div
						 id="dot1"
						 data-id="0"
						 className="scroll-dot"
						>
							<div />
						</div>
						<div
						 id="dot2"
						 data-id="1"
						 className="scroll-dot"
						>
							<div />
						</div>
						<div
						 id="dot3"
						 data-id="2"
						 className="scroll-dot"
						>
							<div />
						</div>
					</div>
				</div>
			</div>

			<PricingBenefits />

			<HomepageCTA />
		</DefaultLayout>
	);
}
