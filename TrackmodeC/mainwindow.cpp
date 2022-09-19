#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Menubar
    viewDataAction = new QAction("View data");
    this->menuBar()->addAction(viewDataAction);
    this->connect(this->viewDataAction, &QAction::triggered, this, &MainWindow::viewData);

   // Objects
    map = new Map();

    // Layout
    this->setWindowTitle("TrackmodeC");
    this->setCentralWidget(map);
    this->setFixedHeight(880);
    this->setFixedWidth(1010);
}

MainWindow::~MainWindow()
{
    delete ui;
}
void MainWindow::viewData()
{
    dataWindow = new DataWindow();
    dataWindow->setAttribute(Qt::WA_DeleteOnClose);
    dataWindow->show();
}
