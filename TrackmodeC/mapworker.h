#ifndef MAPWORKER_H
#define MAPWORKER_H

#include <QObject>
#include <QTimer>
#include <QSqlDatabase>
#include <QSqlQuery>
#include <QPoint>
#include <QtMath>
#include <cmath>

class MapWorker: public QObject
{
    Q_OBJECT
public:
    MapWorker(QPoint &pi1, QPoint &pi2, QPoint &pi3);
    QSqlDatabase db;
    QTimer *timer;
    double r1, r2, r3;
    int rr1, rr2, rr3;
    QPoint posWatch;

private:
    int x1, x2, x3;
    int y1, y2, y3;
    void fetchUpdate();

signals:
    void signalUpdateMap(int &rpi1, int &rpi2, int &rpi3, QPoint &posWatch);

public slots:
    void slotInitializeDatabase();
};

#endif // MAPWORKER_H
