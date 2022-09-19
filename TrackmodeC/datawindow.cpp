#include "datawindow.h"

DataWindow::DataWindow()
{

    // Users
    usersModel = new QSqlQueryModel();
    usersModel->setHeaderData(0, Qt::Horizontal, tr("ID"));
    usersModel->setHeaderData(1, Qt::Horizontal, tr("Name"));
    usersModel->setHeaderData(2, Qt::Horizontal, tr("Device"));

    usersView = new QTableView();
    usersView->setModel(usersModel);

    // Pis
    pisModel = new QSqlQueryModel();
    pisModel->setHeaderData(0, Qt::Horizontal, tr("ID"));
    pisModel->setHeaderData(1, Qt::Horizontal, tr("Pi"));
    pisModel->setHeaderData(2, Qt::Horizontal, tr("Watch"));
    pisModel->setHeaderData(3, Qt::Horizontal, tr("RSSI"));
    pisModel->setHeaderData(4, Qt::Horizontal, tr("Time"));

    pisView = new QTableView();
    pisView->setModel(pisModel);


    // Worker and threading
    thread = new QThread();
    dataWorker = new DataWorker();
    dataWorker->moveToThread(thread);
    this->connect(dataWorker, &DataWorker::signalUsersModel, this, &DataWindow::slotUsersData);
    this->connect(dataWorker, &DataWorker::signalPisModel, this, &DataWindow::slotPisData);
    this->connect(thread, &QThread::started, dataWorker, &DataWorker::slotInitializeDatabase);
    thread->start();

    // Layout
    vlay = new QVBoxLayout();
    vlay->addWidget(usersView);
    vlay->addWidget(pisView);

    this->setWindowTitle("TrackmodeC Data");
    this->setLayout(vlay);
}

void DataWindow::slotUsersData(QSqlQueryModel *usersModel)
{
    usersView->setModel(usersModel);
}

void DataWindow::slotPisData(QSqlQueryModel *pisModel)
{
    pisView->setModel(pisModel);
}
