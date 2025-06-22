const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda");

session.startTransaction();

try {
  
  db.inventario.insertOne({
    productoId: 1,
    lote: "L011",
    cantidad: 10,
    entrada: new Date()
  });

  
 db.productos.updateOne(
    { _id: 1 },
    { $inc: { stock: 10 } },
     );

  
  session.commitTransaction();
  print("Entrada de inventario registrada con éxito.");
} catch (error) {
    print(" Error en la transacción:");
    print(error)
    session.abortTransaction();
} finally {
  session.endSession();
}
