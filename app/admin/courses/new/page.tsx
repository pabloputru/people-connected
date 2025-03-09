"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, ChevronLeft, FileText, Upload } from "lucide-react"

export default function NewCoursePage() {
  const [activeTab, setActiveTab] = useState("details")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>People Connected</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/admin/courses">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Cursos
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Crear Nuevo Curso</h1>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Detalles del Curso</TabsTrigger>
              <TabsTrigger value="content">Contenido</TabsTrigger>
              <TabsTrigger value="quiz">Cuestionario</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información Básica</CardTitle>
                  <CardDescription>Ingresa los detalles básicos del curso</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título del Curso</Label>
                    <Input id="title" placeholder="Ej. Seguridad en el Trabajo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe brevemente el contenido del curso"
                      className="min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Imagen de Portada</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="thumbnail"
                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG o GIF (MAX. 2MB)</p>
                        </div>
                        <input id="thumbnail" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={() => setActiveTab("content")}>Siguiente</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="content" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contenido del Curso</CardTitle>
                  <CardDescription>Agrega videos, presentaciones y otros materiales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">Módulo 1: Introducción</h3>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Agregar Contenido
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center p-2 border rounded-md">
                          <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span className="text-sm">Video: Introducción al curso</span>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Agregar Nuevo Módulo
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("details")}>
                    Anterior
                  </Button>
                  <Button onClick={() => setActiveTab("quiz")}>Siguiente</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="quiz" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cuestionario de Evaluación</CardTitle>
                  <CardDescription>Crea preguntas para evaluar el conocimiento adquirido</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium">Pregunta 1</h3>
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">¿Cuál es el primer paso en caso de emergencia?</p>
                        <div className="ml-4 space-y-1">
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2 rounded-full border border-green-500 bg-green-500"></div>
                            <span>Mantener la calma y evaluar la situación</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2 rounded-full border"></div>
                            <span>Llamar inmediatamente a emergencias</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2 rounded-full border"></div>
                            <span>Evacuar el área</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Agregar Nueva Pregunta
                    </Button>
                  </div>
                  <div className="space-y-2 pt-4 border-t">
                    <Label htmlFor="passing-score">Puntuación mínima para aprobar (%)</Label>
                    <Input id="passing-score" type="number" placeholder="70" min="0" max="100" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("content")}>
                    Anterior
                  </Button>
                  <Button>Guardar Curso</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

