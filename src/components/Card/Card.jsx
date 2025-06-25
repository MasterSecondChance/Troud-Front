import { faHeart, faMars, faStar, faTimes, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createMatch,
  createReaction,
  getArticleByCategory,
  getArticlesUnreaction,
} from "../../../api";
import "./Card.scss";

function Card({ category }) {
  const [articles, setArticles] = useState([]);

  const changeImageLeft = () => {
    alert("Left: Foto Anterior");
  };

  const changeImageRigth = () => {
    alert("Rigth: Foto Siguiente");
  };

  const handleDislike = async (type, idArticle, phoneUser, phoneOwner) => {
    try {
      const match = await createReaction({
        type,
        idArticle,
        phoneUser,
        phoneOwner,
      });
      toast("No te gusta", {
        type: "error",
        autoClose: 2000,
      });
      handleDisappear(idArticle);
    } catch (error) {
      toast("No se pudo dar tu dislike", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const handleLike = async (type, idArticle, phoneUser, phoneOwner, articleName, articleImg) => {
    try {
      const match = await createReaction({
        type,
        idArticle,
        phoneUser,
        phoneOwner,
      });
      if (match.match == 1) {
        await createMatch({
          nameFirst: match.owner.userName,
          phoneFirst: match.owner.phone,
          urlPhotoArticleFirst: match.articleOwner.urlPhoto,
          firstArticleName: match.articleOwner.name,

          nameSecond: match.user.userName,
          phoneSecond: match.user.phone,
          urlPhotoArticleSecond: match.articleOwner.urlPhoto,
          secondArticleName: articleName,
          urlChat: `https://api.whatsapp.com/send?phone=${match.owner.phone}`,
        });
        toast("Hiciste match", {
          type: "success",
          autoClose: 3000,
        });
      }
      toast("Te gusta", {
        autoClose: 2000,
      });
      handleDisappear(idArticle);
    } catch (error) {
      console.log(error);
      toast("No se pudo dar tu like", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const handleSuperLike = async (
    type,
    idArticle,
    phoneUser,
    phoneOwner,
    articleName,
    articleImg
  ) => {
    try {
      const match = await createReaction({
        type,
        idArticle,
        phoneUser,
        phoneOwner,
      });
      if (match.match == 1) {
        await createMatch({
          nameFirst: match.owner.userName,
          phoneFirst: match.owner.phone,
          urlPhotoArticleFirst: match.articleOwner.urlPhoto,
          firstArticleName: match.articleOwner.name,

          nameSecond: match.user.userName,
          phoneSecond: match.user.phone,
          urlPhotoArticleSecond: match.articleOwner.urlPhoto,
          secondArticleName: articleName,
          urlChat: `${import.meta.env.VITE_WHATSAPP_API_URL || "https://api.whatsapp.com/send"}?phone=${match.owner.phone}`,
        });
        toast("Hiciste match", {
          type: "success",
          autoClose: 3000,
        });
      }
      toast("Te súper encanta", {
        type: "success",
        autoClose: 5000,
      });
      const supers = document.querySelectorAll(".small");
      supers.forEach((item) => {
        item.style.display = "none";
      });
      handleDisappear(idArticle);
      const displaySupers = () => {
        supers.forEach((item) => {
          item.style.display = "initial";
        });
      };
      setTimeout(displaySupers, 60000);
    } catch (error) {
      toast("No se pudo dar tu súper like", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const handleDisappear = (id) => {
    const hiddeCard = document.getElementById(`${id}`);
    hiddeCard.style.display = "none";
  };

  useEffect(() => {
    const geArticles = async () => {
      try {
        if (!sessionStorage.getItem("category")) {
          const result = await getArticlesUnreaction(
            JSON.parse(sessionStorage.getItem("userData")).user.phone
          );
          setArticles(result.data.data);
        }
        if (sessionStorage.getItem("category")) {
          const result = await getArticleByCategory(
            sessionStorage.getItem("category"),
            JSON.parse(sessionStorage.getItem("userData")).user.phone
          );
          setArticles(result.data.data);
        }
      } catch (error) {
        toast("Error al cargar artículos", {
          type: "error",
          autoClose: 2000,
        });
      }
    };
    geArticles();
  }, [category]);

  return (
    <>
      <ToastContainer />
      {articles.map((article) => (
        <div className={`Card ${article._id}`} key={article._id} id={article._id}>
          <div className="Card__Info">
            <div className="Card__Info__Header">
              <span className="Card__Info__Header--name"> {article.name}</span>
            </div>
            <div className="Card__Info__Img">
              <img className="Card__Info__Img__Image" src={article.urlPhoto} alt="Img Card" />
              {article.gender === "male" ? (
                <div className="Card__Info__Img__Gender">
                  <FontAwesomeIcon className="faMars" icon={faMars} title="Hombre" />
                </div>
              ) : (
                <div className="Card__Info__Img__Gender">
                  <FontAwesomeIcon className="faVenus" icon={faVenus} title="Mujer" />
                </div>
              )}
              <div className="Card__Info__Img__Size">Talla: {article.size}</div>
              {/* <div className='ChevronLeft' onClick={changeImageLeft} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronLeft' icon={faChevronLeft} title='faChevronLeft' />
                </div>
                <div className='ChevronRight' onClick={changeImageRigth} role='button' tabIndex='0'>
                  <FontAwesomeIcon className='faChevronRight' icon={faChevronRight} title='faChevronRight' />
                </div> */}
              <div className="center">
                <div
                  className="left"
                  role="button"
                  tabIndex="0"
                  onClick={() => {
                    handleDislike(
                      "Dislike",
                      article._id,
                      JSON.parse(sessionStorage.getItem("userData")).user.phone,
                      article.phoneOwner
                    );
                  }}
                />
                <div
                  className="right"
                  role="button"
                  tabIndex="0"
                  onClick={() => {
                    handleLike(
                      "Like",
                      article._id,
                      JSON.parse(sessionStorage.getItem("userData")).user.phone,
                      article.phoneOwner,
                      article.name,
                      article.urlPhoto
                    );
                  }}
                />
              </div>
            </div>
            <div className="Card__Info__Desc">
              <p className="Card__Info__Desc--Info">
                <b>Descripción: </b> {article.description}
              </p>
            </div>
          </div>
          <div className="Card__Actions">
            <FontAwesomeIcon
              className="icon faTimes"
              icon={faTimes}
              title="No Me Gusta"
              onClick={() => {
                handleDislike(
                  "Dislike",
                  article._id,
                  JSON.parse(sessionStorage.getItem("userData")).user.phone,
                  article.phoneOwner
                );
              }}
            />
            <FontAwesomeIcon
              className="icon small faBolt"
              icon={faStar}
              title="Super Like"
              onClick={() => {
                handleSuperLike(
                  "SuperLike",
                  article._id,
                  JSON.parse(sessionStorage.getItem("userData")).user.phone,
                  article.phoneOwner,
                  article.name,
                  article.urlPhoto
                ); //Pending fix
              }}
            />
            <FontAwesomeIcon
              className="icon faHeart"
              icon={faHeart}
              title="Me gusta"
              onClick={() => {
                handleLike(
                  "Like",
                  article._id,
                  JSON.parse(sessionStorage.getItem("userData")).user.phone,
                  article.phoneOwner,
                  article.name,
                  article.urlPhoto
                );
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
