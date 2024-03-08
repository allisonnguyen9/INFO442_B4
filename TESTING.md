# Snack Swap Testing
<p> Here are our acceptance tests for the Snack Swap MVP:

### Feature 1: Landing Page
Includes search and filter functionality for objects on the landing page. Feature should be able to accomplish the following:

* Given the user has logged in with an email 
* And food listings have been posted
* Then the user should be on the landing page with food items listed
* Button can be clicked that filter by location or category. For example:
    * User will click button category “Meat”
    * “Meat” items will population
* Search bar allows for users to search by location or category. For example:
    * User will type in “Meat”
    * “Meat” items will populate


### Feature 2: Add New Listing
Includes ability to upload new food listings for others to browse. Feature should be able to accomplish the following:
* Given the user has logged in with an email 
* And the user wants to add a new food listing then there is a button that will be clicked 
* Then the user will be on the food item survey page 
* User will be asked questions on food eligibility and if answered yes 
* Then the food item information (name, category, quantity, location)  will be revealed that requires input 
* Then the food item will appear on the landing page
* And new information will populate in Firebase



### Feature 3: Claiming Food 
Includes ability to claim food listings. Claimed foods will be marked as such so others on the platform can no longer claim them. Feature should be able to accomplish the following:

* Given the user has logged in with an email 
* And food listings have been posted
* User will click “Claim It” button 
* And food listing will be removed from landing page

## Acknowledging Testing Limitations
Despite testing conducted, we must take into the account the limitations of our testing process in order to maintain a realistic overview on production and product viability:

* Some limitations are the locations of the listings as it will not support all locations in the world.
* Users cannot pick up the offered items if they do not communicate with the poster
* If users are not logged in they are not able to access the site
* If the food item is not eligible, user will not be able to list food item 
* For our user tests with the search and filter features, if users do not know what the accepted categories are beforehand they will not see any results (Meat, Snacks, Produce, Shelf-Stable/Canned)

## User Testing and Bug Fixing
Testing will also include a round of user testing where we will work with peers and other students to gauge the user experience and validate assumptions made in our interface.

If we encounter bugs, we will prioritize fixing the major bugs that inhibit the user's ability to engage with our features.

After a first round of user testing, we will incorporate the feedback into production.