'use client'
import Images from "@/components/Images"
import MyDialog from "@/components/MyDialog"
import Lights from "@/components/lights/Lights"
import Tree from "@/components/tree/Tree"
import { Box, Typography } from "@mui/material"
import { CSSProperties, useEffect, useRef, useState } from "react"
import Draggable from 'react-draggable'

export default function Home() {
  const ref = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(window.innerWidth)
    window.scrollTo((3333 - window.innerWidth) / 2, (3333 - window.innerHeight) / 2);

    const handleMouseMove = (event: any) => {
      ref.current && setMousePosition({ x: event.clientX - ref.current.getBoundingClientRect().x, y: event.clientY - ref.current.getBoundingClientRect().y });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  const doubleClick = (event: any) => {
    setClickPosition({ x: event.clientX, y: event.clientY })
    setOpen(true)
  }

  const style: CSSProperties = {
    background: `radial-gradient(
      farthest-corner at ${mousePosition.x}px ${mousePosition.y}px,
      transparent 0%,
      white 8%
    )`,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }


  return (
    <>
      <MyDialog open={open} onClose={() => setOpen(false)} />
      <Lights />
      <Draggable>
        <main
          ref={ref}
          className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#b4b4b4_1px,transparent_1px),linear-gradient(to_bottom,#b4b4b4_1px,transparent_1px)] bg-[size:24px_24px]"
        >
          <div
            onDoubleClick={event => doubleClick(event)}
            style={style}
          >
            <Tree />
            <Images
              x={clickPosition.x}
              y={clickPosition.y}
              mousePosition={mousePosition}
            />
          </div>
        </main>
      </Draggable>
    </>
  )
}
