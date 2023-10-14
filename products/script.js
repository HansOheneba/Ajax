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
            var row = $("<tr class='border-b dark:border-neutral-500'>");
            row.append("<td class='whitespace-nowrap px-6 py-4 font-medium'>" + product.id + "</td>");
            row.append("<td class='whitespace-nowrap px-6 py-4'>" + product.name + "</td>");
            row.append("<td class='whitespace-nowrap px-6 py-4'>" + product.description + "</td>");
            row.append("<td class='whitespace-nowrap px-6 py-4'>" + product.price + "</td>");
            row.append("<td class='whitespace-nowrap px-6 py-4'>" + product.dateCreated + "</td>");
            row.append("<td class='whitespace-nowrap px-6 py-4'>" + product.dateModified + "</td>");


            var deleteButton = $("<button type='button' class='focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover-bg-red-700 dark:focus:ring-red-900'>Delete</button>");

            deleteButton.on("click", function () {
                var productId = product.id;
                deleteProduct(productId);
            });

            row.append(
                '<td>' +
                '<a href="' + apiUrl + 'update?id=' + product.id + '"><button type="button" id="updateBtn" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:focus:ring-yellow-900">Update</button></a>'
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