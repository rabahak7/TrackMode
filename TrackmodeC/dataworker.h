#ifndef DATAWORKER_H
#define DATAWORKER_H

#include <QObject>
#include <QSqlDatabase>
#include <QSqlQueryModel>
#include <QTimer>

class DataWorker: public QObject
{
    Q_OBJECT
public:
    DataWorker();
    QSqlQueryModel *usersModel;
    QSqlQueryModel *pisModel;

private:
    QSqlDatabase db;
    QTimer *timer;
    void fetchUsers();
    void fetchPis();

signals:
    void signalUsersModel(QSqlQueryModel *usersModel);
    void signalPisModel(QSqlQueryModel *pisModel);

public slots:
    void slotInitializeDatabase();

};

#endif // DATAWORKER_H
