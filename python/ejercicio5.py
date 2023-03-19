def bisiesto(anio):
    """
    Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.
    """
    if anio % 4 != 0:
        return print("No es bisiesto")
    elif anio % 100 != 0:
        return True
    elif anio % 400 != 0:
        return print("No es bisiesto")
    else:
        return print("Es bisiesto")

bisiesto(2023)   


        