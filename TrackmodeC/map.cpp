#include "map.h"

Map::Map()
{
    // Scene
    scene = new QGraphicsScene();
    this->setScene(scene);

    // Floor
    pixmap = QPixmap(":/images/plan.jpg");
    scene->addPixmap(pixmap.scaled(1000, 830));

    // Draw the pis
    posPi1 = new QPoint(200, 100);
    posPi2 = new QPoint(800, 100);
    posPi3 = new QPoint(500, 730);

    pi1 = scene->addText("PI1", QFont("Times", 18));
    pi1->setPos(*posPi1);
    pi2 = scene->addText("PI2", QFont("Times", 18));
    pi2->setPos(*posPi2);
    pi3 = scene->addText("PI3", QFont("Times", 18));
    pi3->setPos(*posPi3);

    // Threads and woker
    thread = new QThread();
    mapwoker = new MapWorker(*posPi1, *posPi2, *posPi3);
    this->connect(thread, &QThread::started, mapwoker, &MapWorker::slotInitializeDatabase);
    this->connect(mapwoker, &MapWorker::signalUpdateMap, this, &Map::slotUpdateMap);
    mapwoker->moveToThread(thread);
    thread->start();
}

void Map::slotUpdateMap(int &rpi1, int &rpi2, int &rpi3, QPoint &posWatch)
{
    scene->removeItem(cPi1);
    scene->removeItem(cPi2);
    scene->removeItem(cPi3);
    scene->removeItem(cWatch);

    cPi1 = scene->addEllipse(posPi1->x()-rpi1, posPi1->y()-rpi1, rpi1*2, rpi1*2, QPen(QColor(Qt::red)));
    cPi2 = scene->addEllipse(posPi2->x()-rpi2, posPi2->y()-rpi2, rpi2*2, rpi2*2, QPen(QColor(Qt::green)));
    cPi3 = scene->addEllipse(posPi3->x()-rpi3, posPi3->y()-rpi3, rpi3*2, rpi3*2, QPen(QColor(Qt::blue)));
    cWatch = scene->addEllipse(posWatch.x()-5, posWatch.y()-5, 10, 10, QPen(QColor(Qt::magenta)), QBrush(QColor(Qt::magenta)));

}
