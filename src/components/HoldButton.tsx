import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react"
import "./HoldButton.css"

type HoldButtonProps = {
  children: ReactNode
  doneLabel?: ReactNode
  onHold: () => void
  holdTime?: number
  resetAfter?: number
  backgroundColor?: string
  fillColor?: string
  textColor?: string
  fillTextColor?: string
  size?: "sm" | "md" | "lg"
  radius?: number
  fillDirection?: "right" | "up"
  pressScale?: number
  wave?: boolean
  waveAmplitude?: number
  glow?: boolean
}

const HoldButton = ({
  children,
  doneLabel = "Done",
  onHold,
  holdTime = 500,
  resetAfter = 1200,
  backgroundColor = "#27272a",
  fillColor = "#5227ff",
  textColor = "#f5f5f5",
  fillTextColor = "#ffffff",
  size = "md",
  radius = 14,
  fillDirection = "right",
  pressScale = 0.97,
  wave = true,
  waveAmplitude = 6,
  glow = true,
}: HoldButtonProps) => {
  const [phase, setPhase] = useState<"idle" | "holding" | "done">("idle")
  const [progress, setProgress] = useState(0)
  const startRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const resetRef = useRef<number | null>(null)
  const heldRef = useRef(false)

  const stopFrame = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = null
  }

  const reset = () => {
    stopFrame()
    if (resetRef.current !== null) window.clearTimeout(resetRef.current)
    resetRef.current = null
    heldRef.current = false
    setPhase("idle")
    setProgress(0)
  }

  const finish = () => {
    stopFrame()
    heldRef.current = true
    setProgress(1)
    setPhase("done")
    onHold()
    resetRef.current = window.setTimeout(reset, resetAfter)
  }

  const tick = (now: number) => {
    const next = Math.min(1, (now - startRef.current) / holdTime)
    setProgress(next)
    if (next >= 1) finish()
    else frameRef.current = requestAnimationFrame(tick)
  }

  const start = (event: PointerEvent<HTMLButtonElement>) => {
    if (phase === "done") return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    startRef.current = performance.now()
    heldRef.current = false
    setPhase("holding")
    frameRef.current = requestAnimationFrame(tick)
  }

  const release = () => {
    if (heldRef.current || phase !== "holding") return
    reset()
  }

  useEffect(() => () => {
    stopFrame()
    if (resetRef.current !== null) window.clearTimeout(resetRef.current)
  }, [])

  return (
    <button
      type="button"
      className={`hold-button hold-button--${size}`}
      style={{
        "--hb-radius": `${radius}px`,
        "--hb-bg": backgroundColor,
        "--hb-fill": fillColor,
        "--hb-text": textColor,
        "--hb-fill-text": fillTextColor,
        "--hb-hold": `${holdTime}ms`,
        "--hb-press": pressScale,
        "--hb-wave": wave ? `${waveAmplitude}px` : "0px",
        "--hb-p": progress,
      } as CSSProperties}
      data-phase={phase}
      data-input="pointer"
      data-direction={fillDirection}
      data-glow={glow}
      onPointerDown={start}
      onPointerUp={release}
      onPointerCancel={reset}
      onPointerLeave={release}
      aria-label={typeof children === "string" ? children : "Hold to confirm"}
    >
      <span className="hold-button__pulse" aria-hidden="true" />
      <span className="hold-button__label">
        <span className="hold-button__idle">{children}</span>
        <span className="hold-button__done">{doneLabel}</span>
      </span>
      <span className="hold-button__clip" aria-hidden="true">
        <span className="hold-button__fill">
          <span className="hold-button__label hold-button__label--fill">{phase === "done" ? doneLabel : children}</span>
        </span>
        {wave && <span className="hold-button__crest" />}
      </span>
    </button>
  )
}

export default HoldButton
