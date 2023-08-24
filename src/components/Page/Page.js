import HeaderPage from "../HeaderPage/HeaderPage";
import MainPage from "../MainPage/MainPage";
import About from "../About/About";

const Page = ({
  handleDeleteArticle,
  handleGetArticles,
  handleSavedArticlesButton,
  handleSaveArticle,
  handleSignIn,
  handleSignOut,
  isLoading,
  newsCards,
  savedNewsArticles,
  showMoreItems,
  visible,
  keyword,
  handleOpenMobileMenuNotLoggedIn,
}) => {
  return (
    <>
      <HeaderPage
        handleGetArticles={handleGetArticles}
        handleSavedArticlesButton={handleSavedArticlesButton}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleOpenMobileMenuNotLoggedIn={handleOpenMobileMenuNotLoggedIn}
      />
      <MainPage
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        isLoading={isLoading}
        keyword={keyword}
        newsCards={newsCards}
        savedNewsArticles={savedNewsArticles}
        showMoreItems={showMoreItems}
        visible={visible}
      />
      {visible === 3 && <About />}
    </>
  );
};

export default Page;
