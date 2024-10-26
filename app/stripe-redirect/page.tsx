'use client'
import { useEffect } from 'react'

export default function ReturnUrl() {
   useEffect(() => {
      const param = window.location.search
      const url = param.replace('?', '').split('=')[1]
      window.location.href = url
   }, [])
   return null
}
