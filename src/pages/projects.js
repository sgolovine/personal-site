import React, { useState, useEffect } from 'react'
import JSONProjectsData from '@data/proj.json'
import { ProjectCard } from '../components/projects/ProjectCard'

export default () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    try {
      const { data } = JSONProjectsData
      setProjects(data)
    } catch (e) {
      console.log('Error: ', e)
    }
  }, [])

  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </>
  )
}
