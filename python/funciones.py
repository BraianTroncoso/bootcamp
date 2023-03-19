def operaciones(a, b):
    return a + b, a - b, a * b, a / b



def sumador(**kwargs):
    inicial = kwargs ['inicial']
    final = kwargs ['final'] if 'final' in kwargs else 0  #Operador ternario en python

    resultado = 0
    for x in range(inicial, final +1):
        resultado += x
    return resultado

print(sumador(inicial=15))        


anonima = lambda nombre, nombre2: print("HOLA", nombre, "ADIOS", nombre2) #Ejemplo de funcion lambda(mejor conocida como anonima)
anonima("Braian","Programador")


sumatoria = lambda x: x+x #Otro ejemplo de lambda
print(sumatoria(2))

