import React from "react";

export default function SocialBar() {
    return (
        <div class="component--social-bar">
            <div class="component--social-bar-wrap">
                <a href="https://www.facebook.com/sharer.php?u=https://enhancv.com/successful-resumes/{{ url }}&message={{ uriencode facebookText }}"
                    data-track="event" data-category="Successful Resumes" data-action="Social Share" data-label="Facebook" class="component--social-button btn-facebook"
                    target="_blank">
                    <i class="icon-facebook pull-right"></i>
                </a>
                <a href="https://twitter.com/share?url=https://enhancv.com/successful-resumes/{{ url }}&text={{ uriencode twitterText }}"
                    target="_blank" data-track="event" data-category="Successful Resumes" data-action="Social Share" data-label="Twitter"
                    class="component--social-button btn-twitter">
                    <i class="icon-twitter pull-right"></i>
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://enhancv.com/successful-resumes/{{ url }}&text={{ uriencode facebookText }}"
                    target="_blank" data-track="event" data-category="Successful Resumes" data-action="Social Share" data-label="LinkedIn"
                    class="component--social-button btn-linkedin">
                    <i class="icon-linkedin-alt pull-right"></i>
                </a>
            </div>

            <div class="component--social-bar-vertical-view">
                <span class="line"></span>
                <span class="label">Appreciate</span>
                <a href="#" class="btn-wow btn-wow-reverse"></a>
            </div>
            <div class="component--social-bar-horizontal-view">
                Do you like this article? Appreciate it, so we can make more like it
                <a href="#" class="btn-wow-default"></a>
            </div>
        </div>
    );
}
