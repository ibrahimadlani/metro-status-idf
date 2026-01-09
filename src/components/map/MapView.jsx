"use client"

import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"

export default function MapView() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [2.3522, 48.8566], // Paris
      zoom: 10,
    })

    mapRef.current.addControl(new maplibregl.NavigationControl(), "top-right")

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} className="h-[calc(100vh-0px)] w-full" />
}
