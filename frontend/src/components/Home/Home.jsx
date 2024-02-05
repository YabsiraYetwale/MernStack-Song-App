import React, { useState } from 'react';
import { Container, AppBar, Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { space, color } from 'styled-system';
import Songs from '../Songs/Songs';
import Form from '../Form/Form';
import { GET_SONGS } from '../../redux/actionTypes';
import songs from '/images/songs.png';

const StyledAppBar = styled(AppBar)`
  ${space}
  ${color}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Typography)`
  color: rgba(0, 183, 255, 1);
`;

const StyledImage = styled.img`
  margin-left: 15px;
`;

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <StyledAppBar margin="30px 0" position="static" color="inherit">
        <StyledHeading variant="h2" align="center" >
          Songs
        </StyledHeading>
        <StyledImage src={songs} alt="icon" height="60" />
      </StyledAppBar>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Songs setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;