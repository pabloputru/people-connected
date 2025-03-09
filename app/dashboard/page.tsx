"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Home, LogOut, Settings, User } from "lucide-react"
import { CourseGradientIcon, CertificateGradientIcon } from "@/components/gradient-icons"
import { BrandLogoWithText } from "@/components/brand-logo"

export default function DashboardPage() {
  const [progress, setProgress] = useState(65)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white dark:bg-gray-950 px-4 md:px-6">
        <Link href="/">
          <BrandLogoWithText />
        </Link>
        <nav className="ml-auto flex gap-4 md:gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <Home className="h-4 w-4" />
            <span>Inicio</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            <Settings className="h-4 w-4" />
            <span>Configuración</span>
          </Link>
          <Link href="/logout" className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            <LogOut className="h-4 w-4" />
            <span>Salir</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">Cursos Inscritos</CardTitle>
              <CourseGradientIcon className="w-8 h-8" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+2 este mes</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">Cursos Completados</CardTitle>
              <CheckIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+1 este mes</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">Certificados</CardTitle>
              <CertificateGradientIcon className="w-8 h-8" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Descargables</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">Tiempo de Estudio</CardTitle>
              <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5h 23m</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Este mes</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Tabs defaultValue="in-progress">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight mr-4 text-gray-900 dark:text-white">Mis Cursos</h2>
              <TabsList className="bg-gray-100 dark:bg-gray-800">
                <TabsTrigger
                  value="in-progress"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  En Progreso
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Completados
                </TabsTrigger>
                <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Todos
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="in-progress" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Seguridad en el Trabajo"
                  description="Aprende los protocolos de seguridad básicos para entornos laborales."
                  progress={progress}
                  image="/placeholder.svg?height=200&width=300"
                />
                <CourseCard
                  title="Primeros Auxilios"
                  description="Conoce las técnicas básicas de primeros auxilios para emergencias."
                  progress={30}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Introducción a la Informática"
                  description="Conceptos básicos de informática y uso de computadoras."
                  progress={100}
                  image="/placeholder.svg?height=200&width=300"
                />
                <CourseCard
                  title="Atención al Cliente"
                  description="Mejora tus habilidades de atención al cliente y resolución de problemas."
                  progress={100}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Seguridad en el Trabajo"
                  description="Aprende los protocolos de seguridad básicos para entornos laborales."
                  progress={progress}
                  image="/placeholder.svg?height=200&width=300"
                />
                <CourseCard
                  title="Primeros Auxilios"
                  description="Conoce las técnicas básicas de primeros auxilios para emergencias."
                  progress={30}
                  image="/placeholder.svg?height=200&width=300"
                />
                <CourseCard
                  title="Introducción a la Informática"
                  description="Conceptos básicos de informática y uso de computadoras."
                  progress={100}
                  image="/placeholder.svg?height=200&width=300"
                />
                <CourseCard
                  title="Atención al Cliente"
                  description="Mejora tus habilidades de atención al cliente y resolución de problemas."
                  progress={100}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

interface CourseCardProps {
  title: string
  description: string
  progress: number
  image: string
}

function CourseCard({ title, description, progress, image }: CourseCardProps) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="object-cover w-full h-40"
      />
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progreso</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200 dark:bg-gray-700">
          <div className="h-full bg-blue-600 dark:bg-blue-500" style={{ width: `${progress}%` }}></div>
        </Progress>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          {progress === 100 ? "Ver Certificado" : "Continuar"}
        </Button>
      </CardFooter>
    </Card>
  )
}

