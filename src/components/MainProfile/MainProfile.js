import Preloader from "../Preloader/Preloader";
import SearchArticlesProfile from "../SearchArticles/SearchArticlesProfile";

const MainProfile = ({
  handleSavedArticlesButton,
  handleDeleteArticle,
  handleSaveArticle,
  showsOnProfile,
  keyword,
  savedNewsArticles,
  visible,
  isLoading,
  
}) => {
  return (
    <>
      {isLoading.isLoading === true && <Preloader />}
      <SearchArticlesProfile
        handleDeleteArticle={handleDeleteArticle}
        handleSavedArticlesButton={handleSavedArticlesButton}
        handleSaveArticle={handleSaveArticle}
        showsOnProfile={showsOnProfile}
        keyword={keyword}
        savedNewsArticles={savedNewsArticles}
        visible={visible}

      />
    </>
  );
};

export default MainProfile;
