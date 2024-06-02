// src/components/Profile.js

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from '../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faHeart, faComment, faEye, faEyeSlash, faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [poemId, setPoemId] = useState("");
  const [commentId, setCommentId] = useState("");
  const [editingStateComment, setEditingStateComment] = useState({});
  const [editingState, setEditingState] = useState({});
  const [albumDelete, setAlbumDelete] = useState(-1)
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [editing, setEditing] = useState(false);
  const [editedBio, setEditedBio] = useState();

  const { user, userId, setUser, setPoemUpload, PoemUpload } = useContext(AppContext);

  const fetchFollowers = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      
      const response = await axios.get(`${apiUrl}/follows/followers/${userId}`, { withCredentials: true });
      setFollowers(response.data);
    } catch (error) {
      console.error('Error fetching poems:', error.message);
    }
  };

  const fetchFollowing = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      
      const response = await axios.get(`${apiUrl}/follows/following/${userId}`, { withCredentials: true });
      setFollowing(response.data);
    } catch (error) {
      console.error('Error fetching poems:', error.message);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      // Az input mező értéke alapján állítsa be a poemId-t
      const poemIdToDelete = event.target.elements.poemId.value;
      const apiUrl = process.env.REACT_APP_API_URL;

      // Axios DELETE kérés küldése a megadott poemId-vel
      await axios.delete(apiUrl+`/poems/${poemIdToDelete}`, {
        withCredentials: true,
      });

      // Sikeres törlés esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A költemény (${poemIdToDelete}) sikeresen törölve!`);
      setPoemId(poemIdToDelete);
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a törlés során:", error);
    }
  };

  const handleEditSubmit = async (poemId, event) => {
    event.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const editedPoemData = editingState[poemId]?.editedPoem;

      if (!editedPoemData) {
        console.error("Nincs frissített vers adat.");
        return;
      }

      // Az editedPoem állapotot használhatod a frissített adatok elküldéséhez
      await axios.put(apiUrl+`/poems/${poemId}`, editedPoemData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Sikeres módosítás esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A költemény (${poemId}) sikeresen módosítva!`);
      setPoemUpload(poemId)

      // Frissítjük a state-et és leállítjuk a szerkesztés módot
      setEditingState((prevEditingState) => ({
        ...prevEditingState,
        [poemId]: {
          editing: false,
          editedPoem: {
            title: "",
            content: "",
          },
        },
      }));
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a módosítás során:", error);
    }
  };

  const handleEditClick = (poemId, poem) => {
    // Az adott vers egyedi azonosítója alapján állítsuk be az editingState-et
    setEditingState((prevEditingState) => ({
      ...prevEditingState,
      [poemId]: {
        editing: true,
        editedPoem: {
          title: poem.title,
          content: poem.content,
        },
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const poemId = e.target.closest("li").dataset.poemid;

    setEditingState((prevEditingState) => ({
      ...prevEditingState,
      [poemId]: {
        ...prevEditingState[poemId],
        editedPoem: {
          ...prevEditingState[poemId]?.editedPoem,
          [name]: value,
        },
      },
    }));
  };

  const handleDeleteClickComment = async (commentId) => {
    try {
      // Az input mező értéke alapján állítsa be a poemId-t
      const commentIdToDelete = commentId;
      const apiUrl = process.env.REACT_APP_API_URL;

      // Axios DELETE kérés küldése a megadott poemId-vel
      await axios.delete(
        apiUrl+`/comments/${commentIdToDelete}`,
        {
          withCredentials: true,
        }
      );

      // Sikeres törlés esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A komment (${commentIdToDelete}) sikeresen törölve!`);
      setCommentId(commentIdToDelete);
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a törlés során:", error);
    }
  };

  const handleEditClickComment = (commentId, comment) => {
    console.log(comment.commentText);
    setEditingStateComment((prevEditingStateComment) => ({
      ...prevEditingStateComment,
      [commentId]: {
        editing: true,
        editedComment: {
          commentText: comment.commentText,
        },
      },
    }));
  };

  const handleInputChangeComment = (e) => {
    const { name, value } = e.target;
    const commentId = e.target.closest("li").dataset.commentid;
    console.log(commentId)

    setEditingStateComment((prevEditingStateComment) => ({
      ...prevEditingStateComment,
      [commentId]: {
        ...prevEditingStateComment[commentId],
        editedComment: {
          ...prevEditingStateComment[commentId]?.editedComment,
          [name]: value,
        },
      },
    }));
  };

  const handleEditSubmitComment = async (commentId, event) => {
    event.preventDefault();

    try {
      const editedCommentData = editingStateComment[commentId]?.editedComment;

      if (!editedCommentData) {
        console.error("Nincs frissített vers adat.");
        return;
      }

      const apiUrl = process.env.REACT_APP_API_URL;

      // Az editedPoem állapotot használhatod a frissített adatok elküldéséhez
      await axios.put(
        apiUrl+`/comments/${commentId}`,
        editedCommentData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Sikeres módosítás esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A költemény (${commentId}) sikeresen módosítva!`);

      // Frissítjük a state-et és leállítjuk a szerkesztés módot
      setEditingStateComment((prevEditingStateComment) => ({
        ...prevEditingStateComment,
        [commentId]: {
          editing: false,
          editedComment: {
            commentText: "",
          },
        },
      }));
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a módosítás során:", error);
    }
  };

  const handleAlbumDelete = (albumId) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.delete(apiUrl+`/albums/delete-album/${albumId}`,{ withCredentials: true, })
    .then((response) => {
      if (response.status === 200) {
        // A törlés sikeres
        setAlbumDelete(albumId);
      } else {
        // A törlés sikertelen
        console.log('A törlés sikertelen!');
      }
    })
    .catch((error) => {
      // Hiba történt
      console.log(error);
    });
  }

  const renderContentWithLineBreaks = (poem) => {
    if (!poem) return null;

    const contentWithBreaks = poem.content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

    return contentWithBreaks;
  };

  const handleBack = () => {
    setEditingState(false)
  }

  const handleVisibleClick = async (poemId, poem) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
  
      // Invert the value of poem.visible
      poem.visible = poem.visible === 1 ? 0 : 1;
  
      // Az editedPoem állapotot használhatod a frissített adatok elküldéséhez
      await axios.put(apiUrl+`/poems/${poemId}`, {visible: poem.visible}, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Sikeres módosítás esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A költemény (${poemId}) sikeresen módosítva!`);
      setPoemUpload(Math.floor(Math.random() * 1001))
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a módosítás során:", error);
    }
  };

  const handleCommentVisibleClick = async (poemId, poem) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
  
      // Invert the value of poem.visible
      poem.comment = poem.comment === 1 ? 0 : 1;
  
      // Az editedPoem állapotot használhatod a frissített adatok elküldéséhez
      await axios.put(apiUrl+`/poems/${poemId}`, {comment: poem.comment}, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Sikeres módosítás esetén további műveletek, pl. frissítés vagy visszajelzés
      console.log(`A költemény (${poemId}) sikeresen módosítva!`);
      setPoemUpload(Math.floor(Math.random() * 1001))
    } catch (error) {
      // Hiba esetén kezelés, pl. hibaüzenet megjelenítése
      console.error("Hiba történt a módosítás során:", error);
    }
  };

  const editBio = () => {
    setEditing(true)
  };

  const handleSaveClick = async () => {
    // Elküldjük a szerkesztett biót a szervernek
    await sendEditBio(user.id, editedBio);

    // Visszaállítjuk a szerkesztési állapotokat
    setEditing(false);
  };

  const sendEditBio = async (UserId, bio) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const requestBody = {
        bio: bio
      };

      // Axios POST kérés
      const response = await axios.put(apiUrl+"/users/" + UserId, requestBody, {
        withCredentials: true  // withCredentials beállítása true-ra
      });

      // A kérés eredményének logolása
      console.log('Sikeres POST kérés:', response.data);
    } catch (error) {
      console.error('Hiba a POST kérés során:', error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Elkérjük a user ID-t a session-ből
        const userid = userId;

        // Ha nincs bejelentkezve a felhasználó, ne küldjük el a kérést
        if (!user || !user.username) {
          return;
        }

        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get(
          apiUrl+`/users/${userid}`,
          { withCredentials: true }
        );
        setUser(response.data);
        setEditedBio(response.data.bio)
      } catch (error) {
        console.error("Error fetching poems:", error.message);
      }
    };

    fetchUser();
    fetchFollowers();
    fetchFollowing();
  }, [poemId, editingState, commentId, editingStateComment, albumDelete, PoemUpload, editing]);

  return (
    user && (
      <div>
        {/* <!-- Felhasználói adatok --> */}
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header">
              <strong>{user.username}</strong>
            </div> 
            <div className="card-body">
              <div className="row">
                  <div className="col-6">
                    <p className="card-text">E-mail cím: {user.email}</p>
                    <p className="card-text">Profil kép: {user.profileImgUrl}</p>
                    <p className="card-text">Rang: {user.role}</p>
                  </div>
                  <div className="col-6">
                    <p className="card-text">Követők: {followers.length}</p>
                    <p className="card-text">Követés: {following.length}</p>
                  </div>
                </div>
                {editing ? (
                  // Szerkesztési űrlap
                  <div className="row">
                    <div className="col-11">
                      <textarea
                        className="form-control"
                        rows="4"
                        value={editedBio}
                        onChange={(e) => setEditedBio(e.target.value)}
                      />
                    </div>
                    <div className="col-11">
                      <button className="m-2 btn btn-primary" onClick={handleSaveClick}>
                        Mentés
                      </button>
                    </div>
                  </div>
                ) : (
                  // Megjelenített szöveg és gomb
                  <div className="row">
                    <div className="col-11">
                      <p className="card-text">{user.bio}</p>
                    </div>
                    <div className="col-11">
                      <button className="m-2 btn btn-primary" onClick={editBio}>
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>

        


        <div className="container">
          <div className="row">
            {/* <!-- Verseket tartalmazó bal oszlop --> */}
            <div className="col-md-6">
              <h2 className="text-center">Összes Vers</h2>
              <ul className="list-unstyled">
                {user.poems && user.poems.length > 0 ? (
                  <>
                    {user.poems.map((poem, index) => (
                      <li
                        key={index}
                        data-poemid={poem.id}
                        className="mb-4"
                      >
                        <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <strong>{poem.title} - {poem.visible === 1 ? (<span>Látható</span>) : (<span>Rejtett</span>)} - {poem.comment === 1 ? (<span>Kommentek</span>) : (<span>No Kommentek</span>)}</strong>
                            <div className="text-center">
                              <span className="m-2"><FontAwesomeIcon icon={faHeart} /> {poem.likes.length} </span>
                              <span className="m-2"><FontAwesomeIcon icon={faComment} /> {poem.comments.length} </span>
                            </div>
                          </div>
                          <div className="card-body">
                            {editingState[poem.id]?.editing ? (
                              <>
                                <form onSubmit={(e) => handleEditSubmit(poem.id, e)}>
                                  <div className="form-group">
                                    <label htmlFor="title">Title:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="title"
                                      name="title"
                                      value={editingState[poem.id]?.editedPoem.title || ""}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="content">Content:</label>
                                    <textarea
                                      className="form-control"
                                      id="content"
                                      name="content"
                                      value={editingState[poem.id]?.editedPoem.content || ""}
                                      onChange={handleInputChange}
                                      style={{ height: "450px" }}
                                    />
                                  </div>
                                  <button type="submit" className="btn btn-primary m-2 w-25"><FontAwesomeIcon icon={faFloppyDisk} /></button>
                                  <button className="btn btn-primary m-2 w-25" onClick={handleBack}>
                                    Vissza
                                  </button>
                                </form>
                              </>
                              ) : (
                                <>
                                  <blockquote>
                                    <p>{renderContentWithLineBreaks(poem)}</p>
                                    <footer className="blockquote-footer">
                                      <cite>
                                        <strong>{poem.author}</strong>
                                        <p>{poem.creationDate.split("T")[0]}</p>
                                      </cite>
                                    </footer>
                                  </blockquote>

                                  <div className="col-6 d-flex align-items-center justify-content-center">
                                    <form onSubmit={handleDelete}>
                                      <label>
                                        <input
                                          type="text"
                                          name="poemId"
                                          value={poem.id}
                                          style={{ display: "none" }}
                                          readOnly
                                        />
                                      </label>
                                      <button type="submit" className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                      </button>
                                    </form>
                                    <button className="btn btn-primary m-1" onClick={() => handleEditClick(poem.id, poem)}>
                                      <FontAwesomeIcon icon={faPen} />
                                    </button>
                                    {/* Vosoble */}
                                    {poem.visible===1? (
                                      <button className="btn btn-danger m-1" onClick={() => handleVisibleClick(poem.id, poem)}>
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                      </button>
                                    ) : (
                                      <button className="btn btn-primary m-1" onClick={() => handleVisibleClick(poem.id, poem)}>
                                        <FontAwesomeIcon icon={faEye} />
                                      </button>
                                    )}
                                    {/* Kommentek kikapcsolasa */}
                                    {poem.comment===1? (
                                      <button className="btn btn-danger m-1" onClick={() => handleCommentVisibleClick(poem.id, poem)}>
                                        <FontAwesomeIcon icon={faCommentSlash} />
                                      </button>
                                    ) : (
                                      <button className="btn btn-primary m-1" onClick={() => handleCommentVisibleClick(poem.id, poem)}>
                                        <FontAwesomeIcon icon={faComment} />
                                      </button>
                                    )}
                                  </div>
                                </>
                            )}
                            <ul className="list-group list-group-flush mb-4">
                              {poem.comments && poem.comments.map((comment, index) => (
                                <li
                                  key={index}
                                  className="list-group-item"
                                  data-commentid={comment.id}
                                >
                                  <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                      <p className="text-left mb-0">{comment.commenter}</p>
                                      <p className="text-right mb-0">{comment.dateCommented.split("T")[0]}</p>
                                    </div>
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-6">
                                          <p className="card-text komment">
                                            {comment.commentText}
                                          </p>
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-danger m-1" onClick={() => handleDeleteClickComment(comment.id)}>
                                              <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </div>
                                        <div className="col-3">
                                          <button className="btn btn-primary m-1" onClick={() => handleEditClickComment(comment.id,comment)}>
                                            <FontAwesomeIcon icon={faPen} />
                                          </button>
                                        </div>

                                      </div>
                                      

                                      <div className="row">
                                        
                                          {(user.role === "admin" || user.username === comment.commenter) ? (
                                            <>
                                              <div className="col-12">
                                                {editingStateComment[comment.id]?.editing ? (
                                                <div>
                                                  <form onSubmit={(e) => handleEditSubmitComment(comment.id, e)}>
                                                    <div className="form-group">
                                                      <label htmlFor="commentText">Comment text:</label>
                                                      <textarea
                                                        className="form-control"
                                                        id="commentText"
                                                        name="commentText"
                                                        value={editingStateComment[comment.id]?.editedComment.commentText || ""}
                                                        onChange={handleInputChangeComment}
                                                      />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mt-2 w-100">Komment mentése</button>
                                                  </form>
                                                </div>
                                              ) : (
                                                null
                                              )}
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                            </>
                                          )}
                                      </div>
                                      

                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    <p>Még nincsenek verseid feltöltve</p>
                  </>
                )}
              </ul>
            </div>

            {/* <!-- Albumokat tartalmazó jobb oszlop --> */}
            <div className="col-md-6">
                  <h2 className="text-center">Albumok</h2>
                  {user.albums && user.albums.length > 0 ? (
                    <>
                      <ul className="list-unstyled">
                        {user.albums[0].map((smallAlbum, smallindex) => (
                          <li key={smallindex}>
                            <div className="card mb-4">
                              <div className="card-header">
                                <strong>{smallAlbum.title}</strong>
                              </div>
                              <div className="card-body">
                                <p className="card-text">
                                  {smallAlbum.description}
                                </p>
                                <button onClick={() => handleAlbumDelete(smallAlbum.album_id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                              </div>

                              <ul className="list-unstyled m-2">
                                {smallAlbum.poems && smallAlbum.poems.map((poem, index) => (
                                  <li key={index} className="m-2">
                                    <div className="card">
                                      <div className="card-header">
                                        <strong>{poem.title}</strong>
                                      </div>
                                      <div className="card-body">
                                        <blockquote>
                                          <p>{renderContentWithLineBreaks(poem)}</p>
                                          <footer className="blockquote-footer">
                                            <cite>
                                              <strong>{poem.author}</strong>
                                              <p>{poem.creationDate.split("T")[0]}</p>
                                            </cite>
                                          </footer>
                                        </blockquote>

                                        <span><strong>Likeok: </strong> {poem.likes.length} db</span>
                                        {/* <ul>
                                          {poem.likes.map((like, index) => (
                                            <li key={index}>{like.username}</li>
                                          ))}
                                        </ul> */}

                                        {/* <ul className="list-unstyled">
                                          {poem.comments.map((comment, index) => (
                                            <li key={index} className="list-group-item">
                                              <div className="card">
                                                <div className="card-header d-flex justify-content-between">
                                                  <p className="text-left mb-0">{comment.commenter}</p>
                                                  <p className="text-right mb-0">{comment.dateCommented.split("T")[0]}</p>
                                                </div>
                                                <div className="card-body">
                                                  <p className="text-left mb-0">{comment.commentText}</p>
                                                </div>
                                              </div>
                                            </li>
                                          ))}
                                        </ul> */}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <p>Még nincs albumod</p>
                    </>
                  )}
            </div>
          </div>
        </div>

        
      </div>
    )
  );
};

export default Profile;
