import React from "react";
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import { Card, CardActions, CardContent,Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import { DELETE_SONG_BY_ID } from "../../../redux/actionTypes";
import { setSongSlice } from "../../../redux/slice/song";

const StyledCard = styled(Card)(
  space,
  color,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  }
);

const StyledCardMedia = styled.img(
  space,
  color,
  {
    height:'200px',
    width:'350px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  }
);
const StyledOverlay = styled('div')(
  space,
  color,
  {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'blue',
  }
);

const StyledOverlay2 = styled('div')(
  space,
  color,
  {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'blue',
  }
);

const StyledDetails = styled('div')(
  space,
  color,
  {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  }
);

const StyledTitle = styled('div')(
  space,
  color,
  {
    padding: '0 16px',
  }
);

const StyledCardActions = styled(CardActions)(
  space,
  color,
  {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  }
);

const Song = ({ song, setCurrentId }) => {
  const dispatch = useDispatch();

  const DeleteP = () => {
    dispatch({ type: DELETE_SONG_BY_ID, id: song._id });
  };

  const EDIT = () => {
    dispatch(setSongSlice(song));
    setCurrentId(song._id);
  };

  return (
    <StyledCard>
        <StyledCardMedia
          src={song.imgUrl || "/cover.jpg"}
          title={song.title}
        />
      <StyledOverlay>
        <Typography variant="h6">{song.singer}</Typography>
        <Typography variant="body2">
          {moment(song.releasedAt).fromNow()}
        </Typography>
      </StyledOverlay>
      <StyledOverlay2>
        <Button size="small" onClick={EDIT}>
          <Edit fontSize="small" />
        </Button>
      </StyledOverlay2>
      <StyledDetails></StyledDetails>
      <StyledTitle>
        title:{song.title}
      </StyledTitle>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          genre:{song.genre}
        </Typography>
      </CardContent>
      <audio controls loop outoplay="true">
        <source src={song.audio} type="audio/mp3" />
      </audio>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={DeleteP}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Song;