import { Router } from "express";
import movieService from "../services/movieService";

const movieController = Router();

movieController.get("/create", (req, res) => {
	//TODO Read data from req
	res.render("create");
});

movieController.post("/create", (req, res) => {
	const movieData = req.body;
	movieService.create(movieData);
	res.end();
});

export default movieController;
