import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import reviewsCtrl from "./reviews.controller.js";

const router = express.Router(); 

router.route("/").get(RestaurantsCtrl.apiGetRestaurants) //if you go to the root url it will respond with this line. 
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
    .route("/review")
    .post(reviewsCtrl.apiPostReviews) //post a review
    .put(reviewsCtrl.apiUpdateReviews) //update a review
    .delete(reviewsCtrl.apiDeleteReviews) //delete a review


export default router 