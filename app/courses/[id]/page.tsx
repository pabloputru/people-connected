"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronLeft, FileText, Home } from "lucide-react"
import { AnimatedPlayButton } from "@/components/animated-icons"

export default function CoursePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("content")
  const [videoProgress, setVideoProgress] = useState(0)

  // Simulación de datos del curso
  const course = {
    id: params.id,
    title: "Seguridad en el Trabajo",
    description: "Aprende los protocolos de seguridad básicos para entornos laborales.",
    progress: 65,
    modules: [
      {
        id: "1",
        title: "Introducción a la Seguridad Laboral",
        lessons: [
          { id: "1-1", title: "¿Qué es la seguridad laboral?", duration: "5:20", completed: true },
          { id: "1-2", title: "Importancia de la prevención", duration: "8:15", completed: true },
          { id: "1-3", title: "Marco legal", duration: "10:30", completed: false },
        ],
      },
      {
        id: "2",
        title: "Identificación de Riesgos",
        lessons: [
          { id: "2-1", title: "Tipos de riesgos laborales", duration: "7:45", completed: false },
          { id: "2-2", title: "Evaluación de riesgos", duration: "9:10", completed: false },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>People Connected</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-80 border-r">
          <div className="p-4 border-b">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="mb-4">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Volver a Cursos
              </Button>
            </Link>
            <h2 className="text-xl font-bold">{course.title}</h2>
            <div className="flex items-center justify-between mt-2 mb-1">
              <span className="text-sm font-medium">Progreso</span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Contenido del Curso</h3>
            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <h4 className="font-medium text-sm">{module.title}</h4>
                  <ul className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <button
                          className={`flex items-center w-full text-left p-2 rounded-md text-sm hover:bg-accent ${
                            lesson.completed ? "text-muted-foreground" : ""
                          }`}
                        >
                          <AnimatedPlayButton className="mr-2 h-8 w-8" />
                          <span>{lesson.title}</span>
                          <span className="ml-auto text-xs text-muted-foreground">{lesson.duration}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content">Contenido</TabsTrigger>
              <TabsTrigger value="quiz">Evaluación</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="mt-6">
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                  <video
                    className="w-full h-full"
                    poster="/placeholder.svg?height=480&width=854"
                    controls
                    onTimeUpdate={(e) => {
                      const video = e.currentTarget
                      setVideoProgress((video.currentTime / video.duration) * 100)
                    }}
                  >
                    <source src="#" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">¿Qué es la seguridad laboral?</h2>
                  <p className="text-muted-foreground mt-2">
                    En este video aprenderás los conceptos básicos de la seguridad laboral y su importancia en el
                    entorno de trabajo.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Material Complementario</h3>
                  <div className="flex items-center p-2 border rounded-md">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    <span className="text-sm">Presentación: Introducción a la Seguridad Laboral</span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="quiz" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evaluación de Conocimientos</CardTitle>
                  <CardDescription>
                    Responde las siguientes preguntas para evaluar tu comprensión del curso
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">1. ¿Cuál es el principal objetivo de la seguridad laboral?</h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question1" className="w-4 h-4" />
                          <span>Aumentar la productividad de los trabajadores</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question1" className="w-4 h-4" />
                          <span>Prevenir accidentes y enfermedades laborales</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question1" className="w-4 h-4" />
                          <span>Cumplir con las normativas gubernamentales</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question1" className="w-4 h-4" />
                          <span>Reducir los costos operativos de la empresa</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        2. ¿Qué documento es fundamental en la gestión de la seguridad laboral?
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question2" className="w-4 h-4" />
                          <span>Plan de marketing</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question2" className="w-4 h-4" />
                          <span>Evaluación de riesgos</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question2" className="w-4 h-4" />
                          <span>Contrato laboral</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question2" className="w-4 h-4" />
                          <span>Reglamento interno</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        3. ¿Cuál de las siguientes NO es una medida preventiva de seguridad?
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question3" className="w-4 h-4" />
                          <span>Uso de equipos de protección personal</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question3" className="w-4 h-4" />
                          <span>Capacitación regular en seguridad</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question3" className="w-4 h-4" />
                          <span>Documentar accidentes después de que ocurran</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="radio" name="question3" className="w-4 h-4" />
                          <span>Señalización de áreas peligrosas</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar Respuestas</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

