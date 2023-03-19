"""
Enunciado del ejercicio:

En este ejercicio vais a crear la clase Vehículo la cual tendrá los siguientes atributos:

Color

Ruedas

Puertas

Por otro lado crearéis la clase Coche la cual heredará de Vehículo y tendrá los siguientes atributos:

Velocidad

Cilindrada

Por último, tendrás que crear un objeto de la clase Coche y mostrarlo por consola.
"""

class Vehiculo:
    def __init__(self, color, ruedas, puertas):
        self.color = color
        self.ruedas = ruedas
        self.puertas = puertas

class Coche(Vehiculo):
    def __init__(self, velocidad, cilindrada, color, ruedas, puertas):
        super().__init__(color, ruedas, puertas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada

tesla = Coche("250km", 2000, "blanco", 4, 4)

print(tesla.color)
print(tesla.ruedas)
print(tesla.puertas)
print(tesla.velocidad)
print(tesla.cilindrada)