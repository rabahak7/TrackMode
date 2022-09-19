#ifndef DATAWINDOW_H
#define DATAWINDOW_H

#include <QWidget>
#include <QSqlQueryModel>
#include <QTableView>
#include <QThread>
#include <QVBoxLayout>
#include <dataworker.h>

#include <QDebug>

class DataWindow: public QWidget
{
    Q_OBJECT
public:
    DataWindow();

private:
    QVBoxLayout *vlay;
    QThread *thread;
    DataWorker *dataWorker;
    QSqlQueryModel *pisModel;
    QSqlQueryModel *usersModel;
    QTableView *usersView;
    QTableView *pisView;
    QTimer *timer;

public slots:
    void slotUsersData(QSqlQueryModel *usersModel);
    void slotPisData(QSqlQueryModel *pisModel);
};

#endif // DATAWINDOW_H
