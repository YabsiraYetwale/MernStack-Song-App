import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { space } from "styled-system";
import Song from "./Song/Song";

const SongsContainer = styled(Grid)(space);

const Songs = ({ setCurrentId }) => {
  const songs = useSelector((state) => state.songs.songs);

  return songs?.length === 0 ? (
    <CircularProgress />
  ) : (
    <SongsContainer
      container
      alignItems="stretch"
      spacing={3}
      p={3}
    >
      {songs?.map((song, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={6}>
          <Song song={song} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </SongsContainer>
  );
};

export default Songs;