import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core';
import React, { ChangeEvent, ChangeEventHandler, useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput:{
      marginRight: '5px'
    },
    movieChip:{
      fontSize: '2rem',
      padding:'30px 10px',
      margin: '5px'
    }
  })
);

const Movies = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState('')
  const movieInputChange = (event: ChangeEvent<HTMLInputElement>) =>setMovie(event.target.value)

  //context
  const {theme} = useContext(ThemeContext)
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
  const {movies, addMovie, deleteMovie} = useContext(MovieContext)

  return <>
    <Box display='flex' justifyContent='center' my={5}>
      <TextField label='The Best Movie...' variant='outlined' className={classes.movieInput} onChange={movieInputChange} value={movie}/>
      <Button variant='contained' color='primary' onClick={() => {
        addMovie(movie)
        setMovie('')
      }}>
        ADD
      </Button>
    </Box>
    <Box display='flex' justifyContent='center' mx={5} flexWrap='wrap'>
      {movies.map(movie =>(
        <Chip key={movie.id} label={movie.title} clickable color={chipTheme} className={classes.movieChip} onDelete={deleteMovie.bind(this,movie.id)}/>
      ))}
    </Box>
  </>;
};

export default Movies;
