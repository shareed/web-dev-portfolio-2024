import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
      <Box pt={'5rem'} height={'100vh'}>
          <NavLink to={'/full-stack-projects'}>
              Full Stack Projects
          </NavLink>

          <NavLink to={'/designs'}>
              Designs
          </NavLink>
    </Box>
  )
}

export default Projects