import NewsRepository from '../repository/newsRepository';

class NewsService{

get(){
    return NewsRepository.find({});
}

getById(_id){
    return NewsRepository.findById(_id);
}

crete(news){
    return NewsRepository.create(news);
}

update(_id, news){
    return NewsRepository.findByIdAndUpdate(_id, news);
}

delete(_id){
    return NewsRepository.findByIdAndRemove(_id);
}

}

export default new NewsRepository();