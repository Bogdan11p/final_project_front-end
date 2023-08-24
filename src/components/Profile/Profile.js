import HeaderProfile from "../HeaderProfile/HeaderProfile";
import MainProfile from "../MainProfile/MainProfile";

const Profile = ({
  handleDeleteArticle,
  handleSaveArticle,
  handleSavedArticlesButton,
  handleProfileLeave,
  handleSignOut,
  handleVisibleReset,
  isLoading,
  showsOnProfile,
  keyword,
  savedNewsArticles,
  visible,
}) => {
  return (
    <>
      <HeaderProfile
        handleProfileLeave={handleProfileLeave}
        handleSignOut={handleSignOut}
        handleVisibleReset={handleVisibleReset}
        savedNewsArticles={savedNewsArticles}
      />
      <MainProfile
        handleDeleteArticle={handleDeleteArticle}
        handleSaveArticle={handleSaveArticle}
        handleSavedArticlesButton={handleSavedArticlesButton}
        isLoading={isLoading}
        showsOnProfile={showsOnProfile}
        keyword={keyword}
        savedNewsArticles={savedNewsArticles}
        visible={visible}
      />
    </>
  );
};

export default Profile;
