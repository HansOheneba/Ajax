$(document).ready(function () {
    var apiUrl = "http://localhost/APIs/API%20Test/ajax/product/";

    function read() {
        $.ajax({
            type: "GET",
            url: apiUrl + "read",
            dataType: "json",
            success: function (data) {
                populateTable(data);
            },
            error: function (xhr, status, error) {
                console.log("Error status:", status);
                console.log("Error message:", error);
                console.log("Response:", xhr.responseText);
            }
        });
    }
    function populateTable(data) {
        var table = $("#data-table");


        table.find("tbody").empty();


        data.forEach(function (product) {
            var row = $("<tr>");
            row.append("<td>" + product.id + "</td>");
            row.append("<td>" + product.name + "</td>");
            row.append("<td>" + product.description + "</td>");
            row.append("<td>" + product.price + "</td>");
            row.append("<td>" + product.dateCreated + "</td>");
            row.append("<td>" + product.dateModified + "</td>");


            var deleteButton = $("<button type='button'>Delete</button>");

            deleteButton.on("click", function () {
                var productId = product.id;
                deleteProduct(productId);
            });

            row.append(
                '<td>' +
                '<a href="' + apiUrl + 'update?id=' + product.id + '"><button type="button" id="updateBtn">Update</button></a>'
            );

            row.append(deleteButton);
            table.find("tbody").append(row);
        });
        $("#deleteBtn").on("click", function () {
            var productId = $(this).data("id");
            deleteProduct(productId);
        });
    }
    function deleteProduct(productId) {
        $.ajax({
            type: "DELETE",
            url: apiUrl + "delete?id=" + productId,
            success: function (response) {
                read();
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    }
    read();
});