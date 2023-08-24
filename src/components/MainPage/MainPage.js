import Preloader from "../Preloader/Preloader";
import SearchArticlesPage from "../SearchArticleHome/SearchArticleHome";

const MainPage = ({
  handleDeleteArticle,
  handleSaveArticle,
  isLoading,
  keyword,
  newsCards,
  savedNewsArticles,
  showMoreArticles,
  visible,
}) => {
  return (
    <>
      {isLoading === true && <Preloader />}
      {isLoading === false && (
        <SearchArticlesPage
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          keyword={keyword}
          newsCards={newsCards}
          savedNewsArticles={savedNewsArticles}
          showMoreArticles={showMoreArticles}
          visible={visible}
        />
      )}
    </>
  );
};

export default MainPage;
