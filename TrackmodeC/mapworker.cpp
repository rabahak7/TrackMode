#include "mapworker.h"

MapWorker::MapWorker(QPoint &pi1, QPoint &pi2, QPoint &pi3)
{
    // Variables
    x1 = pi1.x();
    x2 = pi2.x();
    x3 = pi3.x();
    y1 = pi1.y();
    y2 = pi2.y();
    y3 = pi3.y();

    // Timer
    timer = new QTimer();
    timer->setInterval(5000);
    timer->start();

    connect(timer, &QTimer::timeout, this, &MapWorker::fetchUpdate);
}

void MapWorker::fetchUpdate()
{
    QSqlQuery query;
    query.exec("SELECT * from pis ORDER BY pi");
    while(query.next()) {
        // Assign ABSOLUTE Pi Radius and use rrs for sending signal
        if (query.value(1) == "pi1"){
//            r1 = qFabs(query.value(3).toInt());
            r1 = (double)(query.value(3).toInt());
            r1 = qPow(10, ((-54-(r1))/(10*2)))*100;
            rr1 = (int)r1;
            qDebug() << "DISTANCE PI1: " <<r1;
        } else if (query.value(1) == "pi2"){
            r2 = (double)(query.value(3).toInt());
            r2 = qPow(10, ((-54-(r2))/(10*2)))*100;
            rr2 = (int)r2;
            qDebug() << "DISTANCE PI2: " << r2;
        } else if (query.value(1) == "pi3") {
            r3 = (double)(query.value(3).toInt());
            r3 = qPow(10, ((-54-(r3))/(10*2)))*100;
            rr3 = (int)r3;
            qDebug() << "DISTANCE PI3: " << r3;
        }
    }

    // Calculate pos
    int A = -2*x1+2*x2;
    int B = -2*y1+2*y2;
    int C = int(qPow(r1, 2)-qPow(r2, 2)-qPow(x1, 2)+qPow(x2, 2)-qPow(y1,2)+qPow(y2, 2));
//    qDebug() << C << QString::number(C);
    int D = -2*x2+2*x3;
    int E = -2*y2+2*y3;
    int F = int(qPow(r2, 2)-qPow(r3, 2)-qPow(x2, 2)+qPow(x3, 2)-qPow(y2, 2)+qPow(y3, 2));
    posWatch.setX((C*E-F*B)/(E*A-B*D));
    posWatch.setY((C*D-A*F)/(B*D-A*E));
//    qDebug() << posWatch.x();
//    qDebug() << posWatch.y();

    emit signalUpdateMap(rr1, rr2, rr3, posWatch);
}

void MapWorker::slotInitializeDatabase()
{
    db = QSqlDatabase::addDatabase("QMYSQL");
    db.setHostName("192.168.0.10");
    db.setDatabaseName("tmdb");
    db.setUserName("admin");
    db.setPassword("1234");
    qDebug() << db.open();
}
