import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BottomNavbar from './BottomNavbar';

import { AppContext } from '../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import BadgeAlert from './BadgeAlert';
import 'animate.css';

const Poems = () => {
  const { poems, userId, setPoems, user, setCommentUpload, labels } = useContext(AppContext);
  const [showcomment, setShowComment] = useState(false);
  const [selectedPoemIndex, setSelectedPoemIndex] = useState(null);
  const [likeCount, setLikeCount] = useState({});
  const [fakeLike, setFakeLike] = useState(null)
  const [fakeLikeText, setFakeLikeText] = useState("")
  const [commentText, setCommentText] = useState('');
  const [commented, setCommented] = useState(0)

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // A hónapok 0-tól indexelődnek, ezért hozzáadunk 1-et
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  useEffect(() => {
    // Betöltésnél inicializáljuk a like számokat
    if (poems.length > 0) {
      const initialLikes = poems.reduce((acc, poem) => {
        acc[poem.id] = poem.likeDb;
        return acc;
      }, {});
      setLikeCount(initialLikes);
    }
  }, [poems, fakeLike]);

  const handleToggleComments = (index) => {
    if (userId > 0) {
      setShowComment(!showcomment);
      setSelectedPoemIndex(index);
    }
    else {
      setFakeLike(false)
      setFakeLikeText("Lépj be vagy regisztrálj, ahhoz hogy kommentelni tudj!")

      setTimeout(() => {
        setFakeLike(null);
        setFakeLikeText("");
      }, 2000);
    }
  };

  const handleLike = async (poemId) => {
    try {

      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(
        apiUrl+`/poems/like/${poemId}`,
        {},
        {
          withCredentials: true,
        }
      );
  
      const message = response.data.message;
  
      if (message === 'Poem liked successfully.') {
        // Ha a vers sikeresen lájkolva lett, növeljük a like-ok számát
        setLikeCount(prevLikes => ({
          ...prevLikes,
          [poemId]: (prevLikes[poemId] || 0) + 1
        }));
        // Frissítjük a verslistát
        setPoems(prevPoems => 
          prevPoems.map(poem => 
            poem.id === poemId ? { ...poem, likeDb: poem.likeDb + 1 } : poem
          )
        );
      } else if (message === 'Poem like removed successfully.') {
        // Ha a like sikeresen eltávolítva lett, csökkentjük a like-ok számát
        setLikeCount(prevLikes => ({
          ...prevLikes,
          [poemId]: Math.max((prevLikes[poemId] || 0) - 1, 0)
        }));
        // Frissítjük a verslistát
        setPoems(prevPoems => 
          prevPoems.map(poem => 
            poem.id === poemId ? { ...poem, likeDb: Math.max(poem.likeDb - 1, 0) } : poem
          )
        );
      }
    } catch (error) {
      console.error("Hiba történt a like kérés közben", error);
    }
  };

  const handleLikeFake = () => {
    setFakeLike(false)
    setFakeLikeText("Lépj be vagy regisztrálj, ahhoz hogy likeolni tudj!")

    setTimeout(() => {
      setFakeLike(null);
      setFakeLikeText("");
    }, 2000);
  } 

  const renderContentWithLineBreaks = (poem, index) => {
    if (!poem) return null;

    const lines = poem.content.split('\n');
    const contentWithBreaks = lines.slice(0, 4).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    if (lines.length > 4) {
      contentWithBreaks.push(
        <button className='btn btn-primary mt-2 d-flex justify-content-center'>
          <Link to={`/poems/${index}`} className="text-light text-decoration-none">
            Olvasd tovább
          </Link>
        </button>
      );
    }
    return contentWithBreaks;
  };


  const handleCommentSubmit = async (poemId) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(
        apiUrl+`/comments/${poemId}`,
        { commentText: commentText },
        { withCredentials: true }
      );

      console.log('Sikeres POST kérés:', response.data);
      setCommentUpload(poemId)
      setCommentText('')
      setCommented(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

      // Esetleges további műveletek a sikeres kérés esetén
    } catch (error) {
      console.error('Hiba a POST kérés során:', error);

      // Esetleges további műveletek a hiba esetén
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.delete(
        apiUrl+`/comments/${commentId}`,
        { withCredentials: true }
      );

      console.log('Sikeres Delete kérés:', response.data);
      setCommentUpload(commentId)

      // Esetleges további műveletek a sikeres kérés esetén
    } catch (error) {
      console.error('Hiba a POST kérés során:', error);

      // Esetleges további műveletek a hiba esetén
    }
  }

  const getLabelNameById = (labelId) => {
    const foundLabel = labels.find(label => label.label_id === labelId);
    return foundLabel ? foundLabel.label_name : null;
  };

  

  return (
    <>
      {poems && poems.length > 0 ? (
        <>
          <div className='container'>
            <h1 className="text-center">Versek</h1>
              <div className='row'>
                {poems.map((poem, index) => (  
                  <div key={index} className='col-md-4 mb-4'>
                    {poem.visible === 1 ? (
                        <div className="card-animated card m-4">
                          <div className="card-header d-flex justify-content-between">
                            <Link to={`/poems/${index}`} className='text-dark'>
                              <strong>{poem.title}</strong>
                            </Link>
                            <Link to={`/profile/${poem.userId}`} className='text-dark'>
                              <strong>{poem.author}</strong>
                            </Link>
                          </div>
                          <div className="card-body">
                            <blockquote>
                              <p>{renderContentWithLineBreaks(poem, index)}</p>
                              <footer className="blockquote-footer">
                                <cite>
                                  <p>{poem.creationDate.split("T")[0]}</p>
                                </cite>
                              </footer>
                            </blockquote>

                            {poem.labels !== null ? (
                              <div>
                                <div className="mb-2">
                                  {poem.labels !== null &&
                                    poem.labels.split('-').map((labelId, index) => (
                                      <span key={index} className="badge me-1">
                                        {getLabelNameById(parseInt(labelId))}
                                      </span>
                                    ))}
                                </div>
                              </div>
                            ) : (<></>)}


                            {userId>0?(
                              <button className='btn btn-primary m-2 btn-sm' onClick={() => handleLike(poem.id)}>
                                <FontAwesomeIcon icon={faHeart} /> {likeCount[poem.id] || 0}
                              </button>
                            ):(
                              <button className='btn btn-primary m-2 btn-sm' onClick={handleLikeFake}>
                                <FontAwesomeIcon icon={faHeart} /> {likeCount[poem.id] || 0}
                              </button>
                            )}
                            {/* kommentek */}
                            {poem.comment === 1 ? (
                              <>
                                <button
                                  className="btn btn-primary btn-sm ms-2"
                                  onClick={() => handleToggleComments(index)}
                                >
                                  <FontAwesomeIcon icon={faComment} /> {poem.comments.length}
                                </button>
                                
                                {selectedPoemIndex === index && showcomment ? (
                                    <ul className="list-unstyled list-group-flush mb-4" style={{ height: '350px', overflowY: 'scroll' }}>
                                      {userId > 0 ? (
                                        <>
                                          <li className="list-group-item">
                                            <div className="card m-4">
                                              <div className="card-header d-flex justify-content-between">
                                                <p className="text-left mb-0">{user.username}</p>
                                                <p className="text-right mb-0">{formattedDate}</p>
                                              </div>
                                              <div className="card-body">
                                                <div className="card-text">
                                                  <form onSubmit={(e) => {e.preventDefault();handleCommentSubmit(poem.id);}}>
                                                    <div className="form-group mb-4">
                                                      <label htmlFor="commentText">Komment:</label>
                                                      <textarea
                                                        className="form-control"
                                                        id="commentText"
                                                        rows="3"
                                                        value={commentText}
                                                        onChange={(e) => setCommentText(e.target.value)}
                                                      />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Küldés</button>
                                                  </form>
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </>
                                      ) : (
                                        null
                                      )}


                                      {poem.comments.map((comment, index) => (
                                        <li
                                          key={index}
                                          className="list-group-item"
                                          data-commentid={comment.id}
                                        >
                                          <div className="card m-4">
                                            <div className="card-header d-flex justify-content-between">
                                              <p className="text-left mb-0">{comment.commenter}</p>
                                              <p className="text-right mb-0">{comment.dateCommented.split("T")[0]}</p>
                                            </div>
                                            <div className="card-body">
                                              <div className='row'>
                                                <div className='col-9'>
                                                  <p className="card-text komment">
                                                    {comment.commentText}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    null
                                  )}
                              </>
                            ) : (<></>)}

                            {fakeLike !== null && (
                              <BadgeAlert
                                success={fakeLike}
                                text={fakeLikeText}
                              />
                            )}
                            
                          </div>
                        </div>
                    ) : (<></>)}
                    
                  </div>
                ))}
              </div>
          </div>
          {/* <BottomNavbar /> */}
        </>
      ) : (
        <>
          <p>A versek még nem töltöttek be</p>
        </>
      )}
    </>
  );
};

export default Poems;
