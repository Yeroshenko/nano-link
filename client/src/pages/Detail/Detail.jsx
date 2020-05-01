import React, { useState, useCallback, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AuthContext } from '../../context'
import { useHttp } from '../../hooks'
import { Loader, LinkCard } from '../../components'

const Detail = () => {
  const [link, setLink] = useState(null)

  const { token } = useContext(AuthContext)
  const { request, loading } = useHttp()
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const featched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLink(featched)
    } catch (e) {}
  }, [token, linkId, request])

  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <div className='detail-page'>
      {!loading && link && <LinkCard link={link} />}
    </div>
  )
}

export default Detail
