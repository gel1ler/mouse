'use client'
import Image from "@/components/Image"
import MyDialog from "@/components/MyDialog"
import Lights from "@/components/lights/Lights"
import Tree from "@/components/tree/Tree"

import { useEffect, useRef, useState } from "react"
import Draggable from 'react-draggable'
import { getCards } from "../../firebase/clientApp"
import Bg from "@/components/Bg"
import Mushrooms from "@/components/Mushrooms"
import { TCard } from "@/GlobalTypes";
import Greeting from "@/components/Greeting"

export default function Home() {
  const ref = useRef<HTMLInputElement>(null)
  const [cards, setCards] = useState<TCard[]>()
  const [open, setOpen] = useState(false)
  const [gOpen, setGOpen] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.scrollTo((3333 - window.innerWidth) / 2, (3333 - window.innerHeight) / 2);

    const fetchCards = async () => {
      const cards = await getCards()
      setCards(cards)
    }
    fetchCards()
  }, [])

  const doubleClick = (event: any) => {
    ref.current && setClickPosition({ x: event.clientX - ref.current.getBoundingClientRect().x, y: event.clientY - ref.current.getBoundingClientRect().y });
    setOpen(true)
    // setMounted(true)
  }

  return (
    <>
      <MyDialog open={open} onClose={() => setOpen(false)} clickPosition={clickPosition} />
      <Lights />
      <Mushrooms />
      <Draggable>
        <main ref={ref} onDoubleClick={event => doubleClick(event)}>
          <Bg />
          <Tree />
          {cards && Object.values(cards).map((i, key) =>
            <Image
              key={key}
              cardData={i}
              mounted={true}
            />
          )}
        </main>
      </Draggable>
    </>
  )
}
