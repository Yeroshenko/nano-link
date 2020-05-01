import React, { useState, useContext, useEffect, useCallback } from 'react'

import { AuthContext } from '../../context'
import { useHttp } from '../../hooks'
import { LinksTable, Loader } from '../../components'

const Links = () => {
  const [links, setLinks] = useState(null)

  const { token } = useContext(AuthContext)
  const { request, loading } = useHttp()

  const getLinks = useCallback(async () => {
    try {
      const featched = await request(`/api/link`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLinks(featched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    getLinks()
  }, [getLinks])

  if (loading) {
    return <Loader />
  }

  return (
    <div className='links-page'>
      {!loading && links && <LinksTable links={links} />}
    </div>
  )
}

export default Links
