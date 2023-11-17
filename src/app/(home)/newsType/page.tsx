import { findAllNewsType } from '@/services/newstype.service'
import React from 'react'

export default async function NewTypePage() {
    const data = await findAllNewsType();
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}
