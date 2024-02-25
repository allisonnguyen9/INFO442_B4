import React from 'react';

export default function ResourcesPage(props) {
    return (
        <section className="resources-page">
            <div className="video-container">
                <iframe width="600" height="315" src="https://www.youtube.com/embed/V-KjCL5FiUU?si=TGphCxRZszEqjtFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="content">
                <p>This video goes over food insecurity in college campuses. It is a prevalent issue stemming from various challenges within the college ecosystem. There are many factors that contribute to food insecurity among college students, some of which can be attributed to financial constraints and a lack of convenience for accessible and affordable food choices.</p>
            </div>
        </section>
    );
}
