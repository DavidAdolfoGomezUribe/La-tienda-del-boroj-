const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tienda");
session.startTransaction();
try {

    db.productos.updateOne({_id:1},{$inc:{stock:-1}});
    db.ventas.insertOne({_id:11,clienteId:11,productos:[{productoId:1,cantidad:1}],fecha: ISODate("2025-06-16"),total:5000 } );
    session.commitTransaction();
    print("Venta registrada correctamente");

} catch (error) {
    session.abortTransaction();
    print(error)
    
}finally{
    session.endSession();
};