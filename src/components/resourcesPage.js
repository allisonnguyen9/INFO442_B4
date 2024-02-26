import React from 'react';

export default function ResourcesPage(props) {
    return (
        <div>
             {/* First Card */}
            <h2 className="page-title">Food Insecurity for College Campuses</h2>
            <div className="card1">
                <section className="resources-page">
                    <div className="video-container">
                        <iframe width="600" height="315" src="https://www.youtube.com/embed/V-KjCL5FiUU?si=TGphCxRZszEqjtFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="content">
                        <p>This video goes over food insecurity in college campuses. It is a prevalent issue stemming from various challenges within the college ecosystem. There are many factors that contribute to food insecurity among college students, some of which can be attributed to financial constraints and a lack of convenience for accessible and affordable food choices.</p>
                    </div>
                </section>
            </div>

            {/* Second Card */}
            <h2 className="page-title">Our Main MVP Features</h2>
            <div className="card2">
                <section className="resources-page">
                    <div className="feature">
                        <h3>Feature 1: Add New Food Listing </h3>
                        <img src="img/food_listing.png" alt="Add new food listing survey" />
                        <p>Users will be able to add a new food listing by filling out a survey which will transfer to the Home page where users can view all items. They can also submit another survey if they want to add another food item.</p>
                    </div>
                    <div className="feature">
                        <h3>Feature 2: Filter Option</h3>
                        <img src="img/filter_option.png" alt="Filtering food categories" />
                        <p>This feature will allow you to filter food categories ranging from Meat or Dairy, Beverages, Produce, Non-pershiable (canned, boxed, dried fruit) making it convienent for all users to choose their item. </p>
                    </div>
                    <div className="feature">
                        <h3>Feature 3: Claim Notification</h3>
                        <img src="img/claim_it.png" alt="Claim it button" />
                        <p>After choosing your item, user will be able to claim their item. Then confirm + notify them with the item that was claimed and their email address in the notification tab.</p>
                    </div>
                </section>
            </div>

            {/* Last Card */}
            <h2 className="page-title">Tips for Minimizing Waste and Maximizing Nutrition</h2>
            <div className="card3">
                <section className="resources-page">
                    <ol className="tips-list">
                        <li>1) Plan your meals ahead of time to only buy what you need.</li>
                        <li>2) Store food properly to prolong freshness and prevent spoilage.</li>
                        <li>3) Use leftovers creatively to create new meals or snacks.</li>
                        <li>4) Compost food scraps instead of throwing them in the trash.</li>
                        <li>5) Practice portion control to avoid excess food waste and save money.</li>
                    </ol>
                    <div className="image-section">
                        <img src="img/food_waste.png" alt="Food Waste" />
                    </div>

                </section>
            </div>
        </div>
    );
}