import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BadgeIcon as Certificate, Download, Home } from "lucide-react"

export default function CertificatesPage() {
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
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Mis Certificados</h1>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Atención al Cliente</CardTitle>
                <CardDescription>Completado el 10 de marzo de 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[1.4/1] relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=280"
                    alt="Certificado de Atención al Cliente"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Certificate className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Certificado
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Introducción a la Informática</CardTitle>
                <CardDescription>Completado el 5 de febrero de 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[1.4/1] relative mb-3 bg-gray-100 rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg?height=200&width=280"
                    alt="Certificado de Introducción a la Informática"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Certificate className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Certificado
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle>Próximamente</CardTitle>
                <CardDescription>Completa más cursos para obtener certificados</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Certificate className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground">
                  Completa tus cursos en progreso para obtener más certificados
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Cursos Disponibles
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

