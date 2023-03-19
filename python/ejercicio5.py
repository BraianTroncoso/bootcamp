def bisiesto(anio):
    """
    Función que recibe como argumento un año y retorna True si es bisiesto,
    de lo contrario retorna False.
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


        