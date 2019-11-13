<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $product_id = $_GET['product_id'];

    $sql = $conn->query("SELECT * FROM product WHERE product_id=$product_id");

    $result = $sql->fetch_assoc();

    echo json_encode($result);

    mysqli_close($conn);
?>