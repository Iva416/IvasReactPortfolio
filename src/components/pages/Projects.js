import React from 'react';
import Musichub from '../../images/Musichub.png';
import Yourstore from '../../images/Yourstore.png';
import Quiz from '../../images/quiz.png';
import Portfolio from '../../images/portfolio.png';
import weather from '../../images/weatherdashboard.png';
import workoutbuddy from '../../images/workoutbuddy.png';
import Note from '../../images/notetaker.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

<img className="d-block w-100" src={Musichub} />;

export default function Projects() {
  return (
    <div className="projectstext">
      <h1>
        Projects ♡<br></br>
      </h1>

      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Musichub</Card.Title>

          <img className="d-block w-100" src={Musichub} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/MusicHub">Github</a>
            </div>
            <a href="https://iva416.github.io/MusicHub/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>YourStore</Card.Title>
          <img className="d-block w-100" src={Yourstore} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/yourStore">Github</a>
            </div>
            <a href="https://your-store-jibstudios.herokuapp.com">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>WorkoutBuddy</Card.Title>
          <img className="d-block w-100" src={workoutbuddy} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/WorkoutBuddy">Github</a>
            </div>
            <a href="https://workout-buddy-01.herokuapp.com/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Quiz</Card.Title>
          <img className="d-block w-100" src={Quiz} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/IvasQuiz">Github</a>
            </div>
            <a href="https://iva416.github.io/IvasQuiz/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <img className="d-block w-100" src={Note} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/IvasNoteTaker">Github</a>
            </div>
            <a href="https://ivas-note-taker.herokuapp.com/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Portfolio</Card.Title>
          <img className="d-block w-100 h-300" src={Portfolio} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/Module2Challenge">Github</a>
            </div>
            <a href="https://iva416.github.io/Module2Challenge/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Weather</Card.Title>
          <img className="d-block w-100" src={weather} />
          <Card.Text>
            <div>
              <a href="https://github.com/Iva416/IvasWeatherDashboard">
                Github
              </a>
            </div>
            <a href="https://iva416.github.io/IvasWeatherDashboard/">Website</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
