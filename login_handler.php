<?php
session_start();
require 'db.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user-id'] = $user['id'];
            $_SESSION['username'] = $user['name'];
            echo "<script>
                 alert('Login successful!');
                 window.location.href = 'index.html';
            </script>";
        exit();
        } else {
            echo "<script>
                alert('Incorrect password.');
                window.location.href = 'login.html'; // Login page
            </script>";
            exit();
        }
    } else {
        echo "<script>
            alert('No account found with that email.');
            window.location.href = 'login.html'; // Login page
        </script>";
        exit();
    }

    $stmt->close();
}
$conn->close();
?>