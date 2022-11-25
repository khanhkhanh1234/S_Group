<?php

    session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quản lý phòng ban nhân sự</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    <style>
        .center {
            display: flex;
            text-align: center;
            justify-content: space-around;
            margin-top: 32px;
        }
        a {
            margin-top: 8px;
            margin-bottom: 8px;
            font-size: 16px;
            display: block;
            width: 220px;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        <div>
            <h1 style="text-align: center; color: white;">Quản lý phòng ban nhân sự theo mô hình MVC</h1>
        </div>
        <div style="margin-left: 40px;">
            <?php if (isset($_SESSION['login'])) : ?>
                <a href="Controller/Controller_Admin.php?action=logout" class="btn btn-success" style="width: 140px;">Đăng xuất</a>
            <?php else : ?>
                <a href="View/Login.php" class="btn btn-success" style="width: 140px;">Đăng nhập</a>
            <?php endif; ?>
        </div>
    </nav>
    <div class="container">
        <div class="center">
            <div class="staff_management">
                <img src="Img/employee.jpg" alt="Staff Image" width="500px" height="300px">
                <h1 style="margin-top: 16px;">Quản lý nhân sự</h1>
                <h3><a href="Controller/Controller_Staff.php?mod=read_staff" class="btn btn-secondary">Xem danh sách nhân viên</a></h3>
                <?php if (isset($_SESSION['login'])) : ?>
                    <h3><a href="Controller/Controller_Staff.php?mod=create_staff" class="btn btn-primary">Thêm mới nhân viên</a></h3>
                    <h3><a href="Controller/Controller_Staff.php?mod=update_staff" class="btn btn-success">Cập nhật nhân viên</a></h3>
                    <h3><a href="Controller/Controller_Staff.php?mod=delete_staff" class="btn btn-danger">Xóa nhân viên</a></h3>
                <?php endif;?>
                <h3><a href="Controller/Controller_Staff.php?mod=search_staff" class="btn btn-info">Tìm kiếm</a></h3>
            </div>
            <div class="department_management">
                <img src="Img/department.png" alt="Department Image" width="500px" height="300px">
                <h1 style="margin-top: 16px;">Quản lý phòng ban</h1>
                <h3><a href="Controller/Controller_Department.php?mod=read_department" class="btn btn-secondary">Xem danh sách phòng ban</a></h3>
                <?php if (isset($_SESSION['login'])) : ?>
                    <h3><a href="Controller/Controller_Department.php?mod=create_department" class="btn btn-primary">Thêm mới phòng ban</a></h3>
                    <h3><a href="Controller/Controller_Department.php?mod=update_department" class="btn btn-success">Cập nhật phòng ban</a></h3>
                <?php endif;?>
            </div>
        </div>
    </div>
</body>

</html>