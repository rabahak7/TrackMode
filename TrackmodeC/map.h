#ifndef MAP_H
#define MAP_H

#include <QPixmap>
#include <QTimer>
#include <QDebug>
#include <QGraphicsScene>
#include <QGraphicsView>
#include <QGraphicsItem>
#include <QThread>
#include <QPoint>
#include <mapworker.h>

class Map: public QGraphicsView
{
    Q_OBJECT
public:
    Map();

private:
    MapWorker *mapwoker;
    QThread *thread;
    QGraphicsScene *scene;
    QPixmap pixmap;
    QGraphicsItem *location;

    // Pis
    QGraphicsItem *pi1;
    QGraphicsItem *pi2;
    QGraphicsItem *pi3;
    QPoint *posPi1;
    QPoint *posPi2;
    QPoint *posPi3;

    // Circles
    QGraphicsItem *cPi1;
    QGraphicsItem *cPi2;
    QGraphicsItem *cPi3;
    QGraphicsItem *cWatch;

    QTimer *timer;


public slots:
    void slotUpdateMap(int &rpi1, int &rpi2, int &rpi3, QPoint &posWatch);

};

#endif // MAP_H
