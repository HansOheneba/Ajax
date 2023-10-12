<?php
require_once 'db.php';

$newCount = $_POST['newCount'];


try {

    $query = "SELECT * FROM comments LIMIT $newCount ";
    $stmt = $db->prepare($query);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo "<h1>Comments</h1>";
        echo "<ul>";
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<li>";
            echo $row['author'] . "<br><br>";
            echo $row['message'] . "<br><br>";
            echo "</li>";
        }
        echo "</ul>";
    } else {
        echo "No comments found.";
    }
} catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}