import React from 'react';
import '../theme/App.css';

import ProjectCard from '../components/project-card';
import { Text } from 'rebass';

const Projects = (props) =>  {

    var projectsJson = require('../resources/projects.json');

    return (
      <div>
        <Text className='page-header'>gallery</Text>
        <Text>{projectsJson.description}</Text>

        <ProjectCard title='test' />
      </div>
    );
}

export default Projects;