# Normalización de bases de datos

La normalización es una forma de optimizar la organización de una base de datos.
Guía la manera en la que deben descomponer los datos en varias tablas.
Ayuda a prevenir anomalías (inconsistencias que surgen de dependencias al modificar la base) de datos,
a prevenir redundancia, a ahorrar espacio y a recuperar datos más rápido.

La normalización se basa en las dependencias reales que existen entre los datos, las cuales se
formalizan como llaves, de las cuales son más importantes las llaves principales y llaves foráneas,
cada una definiendo los datos que le corresponden a una entrada.

La normalización consiste en formas normales, que abarcan desde la primera hasta la quinta
(Y la de Boyce-Codd, equivalente a 3.5), cada una más estrica. La más estricta, la quinta, prueba si
una tabla original con todos los datos y atributos puede ser reconstruida de manera única a partir de
su división en tablas más pequeñas.
