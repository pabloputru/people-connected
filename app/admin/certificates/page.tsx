"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BadgeIcon as Certificate, ChevronLeft, Download, FileText, Upload } from "lucide-react"

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState("templates")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>People Connected</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al Dashboard
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Gestión de Certificados</h1>
            <Button>
              <Certificate className="mr-2 h-4 w-4" />
              Nuevo Certificado
            </Button>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="templates">Plantillas</TabsTrigger>
              <TabsTrigger value="issued">Certificados Emitidos</TabsTrigger>
            </TabsList>
            <TabsContent value="templates" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plantillas de Certificados</CardTitle>
                  <CardDescription>Gestiona las plantillas disponibles para los certificados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:border-primary cursor-pointer">
                      <div className="aspect-[1.4/1] relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src="/placeholder.svg?height=200&width=280"
                          alt="Certificado Estándar"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Editar
                          </Button>
                        </div>
                      </div>
                      <h3 className="font-medium">Certificado Estándar</h3>
                      <p className="text-sm text-muted-foreground">Plantilla predeterminada para todos los cursos</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-primary cursor-pointer">
                      <div className="aspect-[1.4/1] relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src="/placeholder.svg?height=200&width=280"
                          alt="Certificado Premium"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Editar
                          </Button>
                        </div>
                      </div>
                      <h3 className="font-medium">Certificado Premium</h3>
                      <p className="text-sm text-muted-foreground">Diseño especial para cursos avanzados</p>
                    </div>
                    <div className="border rounded-lg p-4 border-dashed flex flex-col items-center justify-center h-full">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="font-medium">Subir Nueva Plantilla</p>
                      <p className="text-sm text-muted-foreground text-center">
                        Arrastra y suelta o haz clic para subir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="issued" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Certificados Emitidos</CardTitle>
                  <CardDescription>Historial de certificados emitidos a los usuarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Certificate className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium">Seguridad en el Trabajo</p>
                          <p className="text-sm text-muted-foreground">Emitido a: Juan Pérez - 15/03/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Certificate className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium">Atención al Cliente</p>
                          <p className="text-sm text-muted-foreground">Emitido a: María López - 12/03/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Certificate className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium">Primeros Auxilios</p>
                          <p className="text-sm text-muted-foreground">Emitido a: Carlos Rodríguez - 10/03/2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

