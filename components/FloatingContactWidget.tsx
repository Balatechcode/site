"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MessageCircle,
  Mail,
  Bot,
  X,
  Send,
  User,
} from "lucide-react"

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([
    {
      sender: "bot",
      text: "Hi! How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      sender: "user" as const,
      text: input,
    }

    setMessages((prev) => [...prev, userMessage])

    const userQuestion = encodeURIComponent(input)

    const botMessage = {
      sender: "bot" as const,
      text:
        "Thanks for your question. Please contact us directly on WhatsApp for a quick response.",
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage])
    }, 500)

    setTimeout(() => {
      window.open(
        `https://wa.me/918154954408?text=Hello WebCrafty! I have a question: ${userQuestion}`,
        "_blank"
      )
    }, 1200)

    setInput("")
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Contact Buttons */}
      {open && !chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3">
          {/* WhatsApp */}
          <Link
            href="https://wa.me/918154954408"
            target="_blank"
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg"
          >
            <MessageCircle size={22} />
          </Link>

          {/* Email */}
          <Link
            href="mailto:adtech8154@gmail.com"
            className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg"
          >
            <Mail size={22} />
          </Link>

          {/* Chatbot */}
          <button
            onClick={() => setChatOpen(true)}
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg"
          >
            <Bot size={22} />
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">WebCrafty Assistant</h3>
            <button onClick={() => setChatOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white border"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              placeholder="Type your question..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white p-2 rounded-lg"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}