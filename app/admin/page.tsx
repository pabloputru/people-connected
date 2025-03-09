"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Home, LogOut, PlusCircle, Settings, Users, BadgeIcon as Certificate, BarChart } from "lucide-react"
import { BrandLogoWithText } from "@/components/brand-logo"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <aside className="sticky top-0 h-screen w-64 border-r bg-white dark:bg-gray-950 hidden md:block">
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BrandLogoWithText />
            </Link>
          </div>
          <nav className="grid gap-2 px-2 py-4">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 px-3 py-2 text-blue-600 dark:text-blue-400"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/courses"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FileText className="h-5 w-5" />
              <span>Cursos</span>
            </Link>
            <Link
              href="/admin/quizzes"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FileText className="h-5 w-5" />
              <span>Cuestionarios</span>
            </Link>
            <Link
              href="/admin/certificates"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Certificate className="h-5 w-5" />
              <span>Certificados</span>
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Users className="h-5 w-5" />
              <span>Usuarios</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Settings className="h-5 w-5" />
              <span>Configuración</span>
            </Link>
            <Link
              href="/logout"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <LogOut className="h-5 w-5" />
              <span>Cerrar Sesión</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Panel de Administración</h1>
            <div className="flex gap-2">
              <Link href="/admin/courses/new">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nuevo Curso
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">Total de Cursos</CardTitle>
                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+2 este mes</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Usuarios Registrados
                </CardTitle>
                <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">245</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+22 este mes</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Certificados Emitidos
                </CardTitle>
                <Certificate className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">132</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+15 este mes</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Tasa de Finalización
                </CardTitle>
                <BarChart className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">68%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+5% respecto al mes anterior</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Tabs defaultValue="recent">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold tracking-tight mr-4 text-gray-900 dark:text-white">
                  Actividad Reciente
                </h2>
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger
                    value="recent"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Reciente
                  </TabsTrigger>
                  <TabsTrigger
                    value="courses"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Cursos
                  </TabsTrigger>
                  <TabsTrigger value="users" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Usuarios
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="recent" className="mt-6">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Actividad Reciente</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                      Últimas acciones realizadas en la plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                          <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Nuevo curso creado: "Seguridad Informática Básica"
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Hace 2 horas por Admin</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                          <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Nuevo usuario registrado: "María López"
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Hace 3 horas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                          <Certificate className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Certificado emitido: "Atención al Cliente"
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Hace 5 horas para Juan Pérez</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                          <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Cuestionario actualizado: "Primeros Auxilios"
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Hace 1 día por Admin</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="courses" className="mt-6">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Cursos Recientes</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                      Últimos cursos creados en la plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Seguridad Informática"
                            className="rounded-md object-cover"
                            width={40}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Seguridad Informática Básica
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Creado hace 2 días</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Editar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Primeros Auxilios"
                            className="rounded-md object-cover"
                            width={40}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Primeros Auxilios</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Creado hace 5 días</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Editar
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Atención al Cliente"
                            className="rounded-md object-cover"
                            width={40}
                            height={40}
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Atención al Cliente</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Creado hace 1 semana</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Editar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="users" className="mt-6">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">Usuarios Recientes</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                      Últimos usuarios registrados en la plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">María López</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">maria.lopez@ejemplo.com</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Ver Perfil
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Carlos Rodríguez</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">carlos.rodriguez@ejemplo.com</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Ver Perfil
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-2">
                            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Ana Martínez</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">ana.martinez@ejemplo.com</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                          Ver Perfil
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
    </div>
  )
}

