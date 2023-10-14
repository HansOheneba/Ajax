<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script>
        $(document).ready(function () {
            var apiUrl = "http://localhost/APIs/API%20Test/ajax/product/";

            function read() {
                $.ajax({
                    type: "GET",
                    url: apiUrl + "read",
                    dataType: "json",
                    success: function (data) {
                        console.log("Data retrieved from the API:", data);
                    },
                    error: function (xhr, status, error) {
                        console.log("Error status:", status);
                        console.log("Error message:", error);
                        console.log("Response:", xhr.responseText);
                    }
                });
            }

            read();
        });
    </script>
</head>

<body>
</body>

</html>