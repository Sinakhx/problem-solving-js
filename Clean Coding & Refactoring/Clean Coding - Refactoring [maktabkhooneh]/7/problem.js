function emailClients(clients){
    clients.forEach(client => {
        const clientRecord = database.lookup(client);
        if (clientRecord.isActive()){
            email(client);
        }
    });
}