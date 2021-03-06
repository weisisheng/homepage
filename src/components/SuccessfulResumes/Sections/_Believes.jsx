import React from "react";

import img from "assets/img/new-successful-resumes/placeholders/3-grid-img-placeholder.jpg";

export default function Believes() {
    return (
        <section className="component m-sm-top-5 m-md-top-10 m-md-bottom-5">
            <div className="container">
                <h3 className="h3">Things I believe in</h3>
                <div className="Grid text-gray-3 m-sm-top-3 m-md-top-6 text-gray-2">
                    <div className="Grid-cell--md-4 Grid-cell--xs-12 m-sm-bottom-4 p-right-4">
                        <img
                         className="m-bottom-3"
                         src={img}
                         alt=""
                        />
                        <h6 className="text-gray-3">Dropping out of collage</h6>
                        <p>
                            Gave three engagement rings to his wife Tallulah, one of them designed
                            by him.
                        </p>
                    </div>
                    <div className="Grid-cell--md-4 Grid-cell--xs-12 m-sm-bottom-4 p-right-4">
                        <img
                         className="m-bottom-3"
                         src={img}
                         alt=""
                        />
                        <h6 className="text-gray-3">Making life multi-planetary</h6>
                        <p>
                            Gave three engagement rings to his wife Tallulah, one of them designed
                            by him.
                        </p>
                    </div>
                    <div className="Grid-cell--md-4 Grid-cell--xs-12 m-sm-bottom-4 p-right-4">
                        <img
                         className="m-bottom-3"
                         src={img}
                         alt=""
                        />
                        <h6 className="text-gray-3">Dropping out of collage</h6>
                        <p>
                            Gave three engagement rings to his wife Tallulah, one of them designed
                            by him.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
