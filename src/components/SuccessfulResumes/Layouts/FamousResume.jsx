import React from "react";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";
import FamousHeader from "components/SuccessfulResumes/Sections/FamousHeader";
import Menu from "components/SuccessfulResumes/Sections/Menu";
import LifeProject from "components/SuccessfulResumes/Sections/LifeProject";
import Experience from "components/SuccessfulResumes/Sections/Experience";
import BooksTwo from "components/SuccessfulResumes/Sections/BooksTwo";
import Awards from "components/SuccessfulResumes/Sections/Awards";
import Strengths from "components/SuccessfulResumes/Sections/Strengths";
import TypicalDay from "components/SuccessfulResumes/Sections/TypicalDay";
import BooksFour from "components/SuccessfulResumes/Sections/BooksFour";
import Strugles from "components/SuccessfulResumes/Sections/Strugles";
import LifePhilosophy from "components/SuccessfulResumes/Sections/LifePhilosophy";
import FamousContainer from "components/SuccessfulResumes/Sections/ResumeBottom";

export default function FamousResume({
    data: { famousResumesJson: { ...data } }
}) {
    return (
        <DefaultLayout>
            <main className="famous-resume--container">
                <FamousHeader
                 name={data.name}
                 cover={data.cover}
                 description={data.description}
                 smallDescription={data.smallDescription}
                />

                <Menu sections={data.sections.map(item => item.section)} />

                {data.sections.map(item => {
                    if (item.section === "LifeProject") {
                        return (
                            <div key={item.section}>
                                <LifeProject {...item} />
                                <Experience {...item} />
                            </div>
                        );
                    }

                    if (
                        item.section === "MostProudOf" ||
                        item.section === "Achievements"
                    ) {
                        return (
                            <Awards
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "TypicalDay") {
                        return (
                            <TypicalDay
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Struggles") {
                        return (
                            <Strugles
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Strengths") {
                        return (
                            <Strengths
                             key={item.section}
                             {...item}
                            />
                        );
                    }
                })}
                <FamousContainer
                 dark={true}
                 name={data.name}
                 finalDescription={data.finalDescription}
                 resume={data.resume}
                />
            </main>
        </DefaultLayout>
    );
}

export const pageQuery = graphql`
    query FamousResume($url: String!) {
        famousResumesJson(url: { eq: $url }) {
            name
            url
            smallDescription
            description
            finalDescription
            cover {
                childImageSharp {
                    sizes(maxWidth: 2500) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            resume {
                childImageSharp {
                    resolutions(width: 442) {
                        ...GatsbyImageSharpResolutions
                    }
                }
            }
            sections {
                image {
                    childImageSharp {
                        sizes(maxWidth: 500) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
                section
                description
                data {
                    title
                    description
                    backgroundColor
                    startDate
                    endDate
                    location
                    position
                }
            }
        }
    }
`;
