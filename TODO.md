* Signup: 
    - you shouldn't be able to submit form without filling all fields 
    - style to be more appealing 
    - route back to home (or previous page) when successful
* Login: 
    - you shouldn't be able to submit form without filling all fields 
    - style to be more appealing 
    - route back to home (or previous page) when successful
* Nav:
    - Refresh nav links after user logged in


* User Page 
    - create watchlists, watched, and ratings section 
    - add ability to save to a watchlist and add ratings 
    - Ratings 
    - In watch list
    - Watched 

* Title page
    - Add Sections:
        - Cast
        - Crew
        - Details (language, alt titles, studios)
        - Genres 
        - Reviews ( has many likes )

* Add Likes, Watchlist, Watched, Ratings 
    - Likes: user has many, title has many
        - Create a model for liked titles with a number field that can be incremented
    - Watched: 
        - Array with a movie id
    - Watchlist: 
        - Same as watched 
    - Ratings: 
        - A new model containing a film id (number) and a score given (number)
    - NOTE: Look into multisearch (https://www.themoviedb.org/talk/5c8f9b319251410ffca3d366?language=en-AU)
        - You don't want to be making a request for each film. searching for multiple at once would be best.



* MISC:
- TURN GOOGLE DOCS ANIMALS INTO NPM PACKAGE FOR FUTURE PROJECTS (AND OTHERS)