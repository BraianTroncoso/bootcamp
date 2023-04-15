from Vehiculo import Vehiculo

class Coche(Vehiculo):
    def __init__(self,velocidad,cilindrada,color, puertas, ruedas):
        super().__init__(color, puertas, ruedas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada


    def __str__(self):
        return f"Coche: velocidad={self.velocidad}, cilindrada={self.cilindrada}, color={self.color}, puertas={self.puertas}, ruedas={self.ruedas}"


nuevo_coche = Coche("120km", 125,"rojo",4,4)
print(nuevo_coche)

