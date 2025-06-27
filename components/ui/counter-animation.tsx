"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  startAnimation?: boolean
}

export function CounterAnimation({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
  startAnimation = false,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (startAnimation && !hasStarted) {
      setHasStarted(true)
      startTimeRef.current = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - (startTimeRef.current || now)
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * end)

        setCount(currentCount)
        countRef.current = currentCount

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [startAnimation, hasStarted, end, duration])

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
