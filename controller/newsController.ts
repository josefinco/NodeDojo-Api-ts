import NewsService from "../services/newsService";
import * as HttpStatus from "http-status";
import httpStatus = require("http-status");

class NewsController {

    sendResponse = function (res, statuscode, data) {
        res.status(statuscode).json({ result: data })
    };


    get(req, res) {
        NewsService.get()
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res) {
        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => this.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    create(req, res) {
        let news = req.body;

        NewsService.create(news)
            .then(news => this.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        NewsService.update(_id, news)
            .then(news => this.sendResponse(res, HttpStatus.OK, `${news.title} foi atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    delete(req, res) {
        const _id = req.params.id;
        NewsService.delete(_id)
            .then(() => this.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }


}

export default new NewsController();