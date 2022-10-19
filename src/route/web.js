import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/CRUD', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);

    //res api
    return app.use("/", router);
}

module.exports = initWebRoutes;