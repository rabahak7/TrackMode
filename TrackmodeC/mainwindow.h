#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QWidget>
#include <datawindow.h>
#include <map.h>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private:
    QAction *viewDataAction;
    DataWindow *dataWindow;
    Map *map;

private slots:
    void viewData();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
