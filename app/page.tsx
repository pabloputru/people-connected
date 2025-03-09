import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText } from "lucide-react"
import { BrandLogoWithText } from "@/components/brand-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white dark:bg-gray-950">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogoWithText />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/courses"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          >
            Cursos
          </Link>
          <Link
            href="/certificates"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          >
            Certificados
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white">
                    Plataforma de Capacitación Online
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Aprende a tu ritmo con nuestros cursos interactivos y obtén certificados que validen tus
                    conocimientos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/courses">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Ver Cursos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/admin">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      Administración
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=550&width=550"
                  alt="Plataforma de Capacitación"
                  className="rounded-lg object-cover aspect-square"
                  width={550}
                  height={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                  Características Principales
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nuestra plataforma ofrece todo lo que necesitas para crear y gestionar capacitaciones efectivas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Gestión de Contenidos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sube videos y presentaciones PPT fácilmente desde el panel de administración.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Evaluaciones Personalizadas</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Crea cuestionarios con puntuaciones y criterios de aprobación personalizados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certificados Automáticos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Genera certificados personalizados automáticamente para los usuarios que aprueban los cursos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6 bg-gray-50 dark:bg-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 People Connected. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

