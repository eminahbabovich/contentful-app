import useFetchProjects from '../fetchProjects'

const Projects = () => {
  const { projects, loading } = useFetchProjects()
  if (loading) {
    return <h1 style={{ marginTop: '5rem' }}>Loading...</h1>
  }
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="title-underline"> </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, image, url, title } = project
          return (
            <article
              key={id}
              className="project"
              onClick={() => window.open(url, '_blank')}
            >
              <img className="img" src={image} alt={title} />
              <h5>{title}</h5>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
