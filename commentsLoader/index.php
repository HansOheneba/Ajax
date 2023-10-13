<?php
require_once 'db.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script>
        $(document).ready(function () {
            var count = 2;
            $("button").click(function () {
                count += 2;
                $("#comments").load("loadComments.php", {
                    newCount: count
                })
            });
        });
    </script>


</head>

<body>
    <div id="area">
        <div id="comments">

            <?php


            try {

                $query = "SELECT * FROM comments LIMIT 2 ";
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
            ?>

        </div>

        <button>Show more comments</button>
    </div>

</body>

</html>