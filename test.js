// Definir una función verificarStock(productoId, cantidadDeseada) que retorne si hay suficiente stock.

function verificarStock(productoId, cantidadDeseada){let producto  = db.productos.findOne({_id:productoId}); if (producto.stock > cantidadDeseada) { return print("si hay suficiente stock")  } else { return print("no hay suficiente stock") };};


