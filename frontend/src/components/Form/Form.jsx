import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../../redux/actionTypes";
import FileBase from "react-file-base64";
import styled from "@emotion/styled";
import { space, layout} from "styled-system";
import {useNavigate} from 'react-router-dom'

const FormContainer = styled(Paper)(space,{borderRadius: '10px',});
const FormTextField = styled(TextField)(space);
const FormButton = styled(Button)(space, layout);
const FormSelect = styled(Select)(space);
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    singer: "",
    title: "",
    genre: "",
    imgUrl: "",
    audio: ""
  });
  const history=useNavigate()
  const song = useSelector((state) =>
    currentId ? state.songs.songs.find((msg) => msg._id === currentId) : null
  );

  useEffect(() => {
    if (song) {
      setPostData(song);
    }
  }, [song]);

  const dispatch = useDispatch();
  const handleSubmit =async (e) => {
    e.preventDefault();
    if( currentId ){
      dispatch({ type: UPDATE_SONG_BY_ID,currentId , song: postData})
      history('/songs')
     }
     else{
       dispatch({ type: CREATE_SONG,song: postData })
       history('/')
     }
  
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      singer: "",
      title: "",
      genre: "",
      imgUrl: "",
      audio: ""
    });
  };

  return (
   <>
   <FormContainer p={3} mb={3}>
      <Typography variant="h6">{currentId ? "Edit" : "Add"} Song</Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <FormTextField
          name="singer"
          variant="outlined"
          label="Singer"
          fullWidth
          value={postData.singer}
          onChange={(e) => setPostData({ ...postData, singer: e.target.value })}
          mb={2}
        />
        <FormTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          mb={2}
        />
        <FormControl fullWidth variant="outlined" mb={2}>
          <InputLabel>Genre</InputLabel>
          <FormSelect
            value={postData.genre}
            onChange={(e) => setPostData({ ...postData, genre: e.target.value })}
            label="Genre"
          >
            <MenuItem value="Rock">Rock</MenuItem>
            <MenuItem value="Pop">Pop</MenuItem>
            <MenuItem value="Hip Hop">Hip Hop</MenuItem>
            <MenuItem value="Dance">Dance</MenuItem>
            <MenuItem value="Electronic">Electronic</MenuItem>
          </FormSelect>
        </FormControl> &nbsp;&nbsp;

        <div>
          &nbsp;&nbsp;&nbsp; imgUrl &nbsp;&nbsp;&nbsp;<FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, imgUrl: base64 })
            }
          />
        
        </div>
        &nbsp;&nbsp;
         <div >
            upload mp3
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, audio: base64 })
            }
          />
          </div>
          &nbsp;&nbsp;
        <FormButton
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          mt={2}
        >
          {currentId ? "Update" : "Add"} Song
        </FormButton>
        <FormButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          mt={2}
        >
          Clear
        </FormButton>
      </form>
    </FormContainer>
    </>
  );
};

export default Form;