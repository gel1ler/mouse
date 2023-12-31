import React, { CSSProperties, useEffect, useRef, useState } from 'react'

const Bg = () => {

    const ref = useRef<HTMLInputElement>(null)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            ref.current && setMousePosition({ x: event.clientX - ref.current.getBoundingClientRect().x, y: event.clientY - ref.current.getBoundingClientRect().y });
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])


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
        <div
            ref={ref}
            className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#b4b4b4_1px,transparent_1px),linear-gradient(to_bottom,#b4b4b4_1px,transparent_1px)] bg-[size:24px_24px]"
        >
            <div
                style={style}
            />
        </div>
    )
}

export default Bg