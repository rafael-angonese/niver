"use client"

import canvasConfetti from 'canvas-confetti'
import { motion } from "framer-motion"
import { Cake, Gift, Heart, Music, PartyPopper } from "lucide-react"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"

export default function Home() {
  const [confetti, setConfetti] = useState(false)
  const [message, setMessage] = useState("Feliz Aniversário")
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    // Start confetti after a short delay
    const timer = setTimeout(() => {
      setConfetti(true)
    }, 500)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timer)
    }
  }, [])

  const handleConfetti = () => {
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const messages = ["Feliz Aniversário", "Parabéns Lari", "Muitas Felicidades", "Tudo de bom", "Muitos anos de vida"]

  const changeMessage = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)]
    setMessage(newMessage)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 3000)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-pink-200 flex flex-col items-center justify-center overflow-hidden">
      {confetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.1}
        />
      )}

      {/* Floating balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-20 rounded-full bg-${["pink", "purple", "yellow", "blue"][i % 4]
              }-${[300, 400, 500][i % 3]} opacity-80`}
            style={{
              left: `${i * 8 + 5}%`,
              top: "-20px",
            }}
            animate={{
              y: [0, windowSize.height + 100],
              x: [0, Math.sin(i) * 50],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl max-w-3xl mx-4"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2"
        >
          <Cake className="w-24 h-24 text-pink-500" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mt-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {message}
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 text-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lari!
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 bg-pink-100 p-3 rounded-full">
            <PartyPopper className="w-6 h-6 text-pink-500" />
            <span className="text-pink-700 font-medium">Comemore</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-100 p-3 rounded-full">
            <Heart className="w-6 h-6 text-purple-500" />
            <span className="text-purple-700 font-medium">Sorria</span>
          </div>
          <div className="flex items-center gap-2 bg-yellow-100 p-3 rounded-full">
            <Gift className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-700 font-medium">Presentes</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-100 p-3 rounded-full">
            <Music className="w-6 h-6 text-blue-500" />
            <span className="text-blue-700 font-medium">Dance</span>
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Que este dia seja tão especial quanto você é! Desejamos muita alegria, saúde e realizações neste novo ciclo da
          sua vida.
        </motion.p>

        <button
          onClick={() => {
            handleConfetti()
            changeMessage()
          }
          }
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transform transition hover:scale-105"
        >
          Clique para Celebrar!
        </button>
      </motion.div>

      {/* Cake plate */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-white/50 rounded-full blur-sm"
      />
    </div>
  )
}
