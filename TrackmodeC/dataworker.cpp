#include "dataworker.h"

DataWorker::DataWorker()
{
    // Models
    usersModel = new QSqlQueryModel();
    pisModel = new QSqlQueryModel();

    // Timer
    timer = new QTimer();
    timer->setInterval(5000);
    timer->start();

    this->connect(timer, &QTimer::timeout, this, &DataWorker::fetchUsers);
    this->connect(timer, &QTimer::timeout, this, &DataWorker::fetchPis);
}

void DataWorker::fetchUsers()
{
    usersModel->setQuery("SELECT * FROM users");
    emit signalUsersModel(usersModel);
}

void DataWorker::fetchPis()
{
     pisModel->setQuery("SELECT * FROM pis");
     emit signalPisModel(pisModel);
}

void DataWorker::slotInitializeDatabase()
{
    db = QSqlDatabase::addDatabase("QMYSQL");
    db.setHostName("192.168.0.10");
    db.setDatabaseName("tmdb");
    db.setUserName("admin");
    db.setPassword("1234");
    qDebug() << db.open();
}
