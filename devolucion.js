const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda");

session.startTransaction();

try {


 db.productos.updateOne(
    { _id: 1 },
    { $inc: { stock: 10 } },
     );

db.ventas.deleteOne({
    _id:11
})

  
  session.commitTransaction();
  print("transaccion existsa.");
} catch (error) {
    print(" Error en la transacción:");
    print(error)
    session.abortTransaction();
} finally {
  session.endSession();
}
