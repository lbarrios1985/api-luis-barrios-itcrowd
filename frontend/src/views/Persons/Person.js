import React, { useState, useEffect } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Material Ui Graphics
import {
  Button, TextField, Grid,
  InputLabel, FormControl, Select,
  MenuItem, Chip, Input, Checkbox,
  ListItemText
} from '@material-ui/core'

// 3rd party
import axios from 'axios'

// Utils
import config from "utils/config"



const PersonSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  alias: Yup.string().required(),
  movies_as_actor: Yup.array().of(Yup.number()).required(),
  movies_as_director: Yup.array().of(Yup.number()).required(),
  movies_as_producer: Yup.array().of(Yup.number()).required(),
});

const Person = ({ history }) => {
  // States
  const [movies, setMovies] = useState([])
  const [actor, setActor] = useState([])
  const [director, setDirector] = useState([])
  const [producer, setProducer] = useState([])

  const token = localStorage.getItem('token')


  // Effects
  useEffect(() => {
    getMovies()
  }, [])

  // Function
  const getMovies = () => {
    axios.get(`${config.API_HOST}/movie/`).then(result => {
      setMovies(result.data)
    })
  }

  const createPerson = (data) => {
    axios({
      method: 'post',
      url: `${config.API_HOST}/person/`,
      data: data,
      headers: { 'Authorization': 'Token ' + token }
    })
      .then(function (response) {
        //handle success
        console.log(response.data.token);
        // localStorage.setItem('token', response.data.token);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      })
  }

  return (
    <div>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          alias: '',
          movies_as_actor: [],
          movies_as_director: [],
          movies_as_producer: [],
        }}
        validationSchema={PersonSchema}
        onSubmit={values => {
          console.log("AQUIIIIIIIIIIIIIIIIIIII")
          createPerson(values)
        }}
        render={({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errors.first_name ? true : false}
                  variant="outlined"
                  fullWidth
                  label="First Name"
                  name="first_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  helperText={errors.first_name ? errors.first_name : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errors.last_name ? true : false}
                  variant="outlined"
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  helperText={errors.last_name ? errors.last_name : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={errors.alias ? true : false}
                  variant="outlined"
                  fullWidth
                  label="Alias"
                  name="alias"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.alias}
                  helperText={errors.alias ? errors.alias : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="content-actors-label">Movies as Actor</InputLabel>
                  <Select
                    id="content-actors"
                    name="movies_as_actor"
                    labelId="content-actors-label"
                    value={actor}
                    placeholder="Movies as actor"
                    multiple
                    onChange={event => {
                      let preSelected = []
                      event.target.value.filter(data => {
                        let count = 0
                        event.target.value.forEach((value) => {
                          if (value.id == data.id) {
                            count++
                          }
                        })
                        if (count == 1) {
                          preSelected.push(data)
                        }
                      })
                      setActor(preSelected)
                      setFieldValue('movies_as_actor', preSelected.map(p => p.id))
                    }}
                    input={<Input id="select-multiple-actors" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value.id} label={`${value.title}`} />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    {
                      movies.map(item => (
                        <MenuItem key={item.id} value={item}>
                          <Checkbox checked={actor.filter(a => a.id == item.id).length != 0} />
                          <ListItemText primary={`${item.title}`} />
                        </MenuItem>
                      ))
                    }
                  </Select>
                  <ErrorMessage name="actors" component="div" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="content-directors-label">Movies as Director</InputLabel>
                  <Select
                    id="content-directors"
                    name="directors"
                    labelId="content-directors-label"
                    value={director}
                    placeholder="Directors"
                    multiple
                    onChange={event => {
                      let preSelected = []
                      event.target.value.filter(data => {
                        let count = 0
                        event.target.value.forEach((value) => {
                          if (value.id == data.id) {
                            count++
                          }
                        })
                        if (count == 1) {
                          preSelected.push(data)
                        }
                      })
                      setDirector(preSelected)
                      setFieldValue('directors', preSelected.map(p => p.id))
                    }}
                    input={<Input id="select-multiple-directors" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value.id} label={`${value.title}`} />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    {
                      movies.map(item => (
                        <MenuItem key={item.id} value={item}>
                          <Checkbox checked={director.filter(a => a.id == item.id).length != 0} />
                          <ListItemText primary={`${item.title}`} />
                        </MenuItem>
                      ))
                    }
                  </Select>
                  <ErrorMessage name="directors" component="div" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="content-producers-label">Movies as Producer</InputLabel>
                  <Select
                    id="content-producers"
                    name="producers"
                    labelId="content-producers-label"
                    value={producer}
                    placeholder="Producers"
                    multiple
                    onChange={event => {
                      let preSelected = []
                      event.target.value.filter(data => {
                        let count = 0
                        event.target.value.forEach((value) => {
                          if (value.id == data.id) {
                            count++
                          }
                        })
                        if (count == 1) {
                          preSelected.push(data)
                        }
                      })
                      setProducer(preSelected)
                      setFieldValue('producers', preSelected.map(p => p.id))
                    }}
                    input={<Input id="select-multiple-producers" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value.id} label={`${value.title}`} />
                        ))}
                      </div>
                    )}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    {
                      movies.map(item => (
                        <MenuItem key={item.id} value={item}>
                          <Checkbox checked={producer.filter(a => a.id == item.id).length != 0} />
                          <ListItemText primary={`${item.title}`} />
                        </MenuItem>
                      ))
                    }
                  </Select>
                  <ErrorMessage name="producers" component="div" />
                </FormControl>
              </Grid>

            </Grid>
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: "10px" }}>
              Submit
            </Button>
          </form>
        )}
      />
    </div >
  )
}

export default Person