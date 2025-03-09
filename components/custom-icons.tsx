import { GraduationCap, Certificate, ChalkboardTeacher, Users } from "phosphor-react"

// Componente de ejemplo para un icono de curso
export function CourseIcon({ className }: { className?: string }) {
  return <GraduationCap weight="duotone" className={`text-blue-600 ${className}`} />
}

// Componente de ejemplo para un icono de certificado
export function CertificateIcon({ className }: { className?: string }) {
  return <Certificate weight="duotone" className={`text-blue-600 ${className}`} />
}

// Componente de ejemplo para un icono de instructor
export function InstructorIcon({ className }: { className?: string }) {
  return <ChalkboardTeacher weight="duotone" className={`text-blue-600 ${className}`} />
}

// Componente de ejemplo para un icono de usuarios
export function UsersIcon({ className }: { className?: string }) {
  return <Users weight="duotone" className={`text-blue-600 ${className}`} />
}

