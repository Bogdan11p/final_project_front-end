import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  handleDeleteArticle,
  handleSaveArticle,
  showsOnProfile,
  keyword,
  newsCards,
  savedNewsArticles,
  visible,
  handleSaveButtonClick,
}) => {
  const cardsShown = showsOnProfile ? savedNewsArticles.length : visible;

  return (
    <>
      {newsCards.slice(0, cardsShown).map((article, index) => (
        <NewsCard
          articleInfo={article}
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          index={index}
          showsOnProfile={showsOnProfile}
          key={article._id}
          keyword={keyword}
          savedNewsArticles={savedNewsArticles}
          handleSaveButtonClick={handleSaveButtonClick}
        />
      ))}
    </>
  );
};

export default NewsCardList;
