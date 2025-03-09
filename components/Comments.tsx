'use client'

import { useKBar } from 'kbar'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export function CLButton() {
  let K = useKBar()

  return <button
            onClick={() => K.query.toggle()}
              className="inline-flex items-center justify-between max-w-sm rounded-md bg-gray-800 px-4 py-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="pointer-events-none">Search content...</span>

              <span
                className="ml-2 rounded bg-primary-700 px-2 py-1 text-sm text-white"
              >
                ⌘K
              </span>
            </button>
}

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
