import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Yogas = props => (
    // <tr>
    //   <td>{props.exercise.username}</td>
    //   <td>{props.exercise.description}</td>
    //   <td>{props.exercise.duration}</td>
    //   <td>{props.exercise.date.substring(0,10)}</td>
    //   <td>
    //     <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    //   </td>
    // </tr>
    <div class="panel panel-default">
        <div class="panel-body" data-toggle="collapse" data-target="#demo">{props.yogasanas.name}</div>
        <div id="demo" class="collapse">
            Lorem ipsum dolor text....
        </div>

    </div>
  )
    