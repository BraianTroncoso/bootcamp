"""
En este segundo ejercicio, tendréis que crear un programa que tenga una clase llamada Alumno
que tenga como atributos su nombre y su nota. Deberéis de definir los métodos para inicializar sus atributos,
imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.
"""

class Alumno:
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota
        
    def imprimir_datos(self):
        print("Nombre del alumno:", self.nombre)
        print("Nota del alumno:", self.nota)
        
    def resultado(self):
        if self.nota >= 5:
            print("El alumno ha aprobado")
        else:
            print("El alumno ha reprobado")

alumno1 = Alumno("Braian", 7)
alumno1.imprimir_datos()
alumno1.resultado()            