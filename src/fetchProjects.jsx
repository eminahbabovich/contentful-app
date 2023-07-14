import { createClient } from 'contentful'
import { useEffect } from 'react'
import { useState } from 'react'

const client = createClient({
  space: 'jh7fdyo0qjo1',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const useFetchProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const items = response.items.map((item) => {
        return {
          image: item.fields.image.fields.file.url,
          title: item.fields.title,
          url: item.fields.url,
          id: item.sys.id,
        }
      })
      setProjects(items)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { projects, loading }
}

export default useFetchProjects
