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



            var deleteButton = $("<button type='button' class='delete-button'>Delete</button>");
            deleteButton.on("click", function () {
                var productId = product.id;
                deleteProduct(productId);
            });

            var updateButton = $("<button type='button' class='update-button'>Update</button>");
            updateButton.on("click", function () {
                var productId = product.id;
                populateUpdateForm(product);

                
                if (!$("#addForm").hasClass("hidden")) {
                    $("#addForm").addClass("hidden");
                }
            });

            row.append(updateButton);
            row.append(deleteButton);
            table.find("tbody").append(row);
        });

        $("#deleteBtn").on("click", function () {
            var productId = $(this).data("id");
            deleteProduct(productId);
        });
    }

    $("#addBtn").click(function () {
        $("#addForm").toggleClass("hidden");
        if (!$("#updateForm").hasClass("hidden")) {
            $("#updateForm").addClass("hidden");
        }
    });

    $("#addForm").submit(function (e) {
        e.preventDefault();

        var formData = {
            name: $("#name").val(),
            description: $("#description").val(),
            price: $("#price").val()
        };

        var jsonData = JSON.stringify(formData);

        $.ajax({
            type: "POST",
            url: apiUrl + "create",
            data: jsonData,
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log("API Response:", response);
                read();
                $("#addForm")[0].reset();
                $("#addForm").addClass("hidden");
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    });


    function populateUpdateForm(product) {
        $("#updateId").val(product.id);
        $("#updateName").val(product.name);
        $("#updateDescription").val(product.description);
        $("#updatePrice").val(product.price);


        $("#updateForm").removeClass("hidden");
    }


    $("#updateProductBtn").click(function () {
        var productId = $("#updateId").val();
        var updatedData = {
            name: $("#updateName").val(),
            description: $("#updateDescription").val(),
            price: $("#updatePrice").val()
        };

        var jsonData = JSON.stringify(updatedData);

        $.ajax({
            type: "PUT",
            url: apiUrl + "update?id=" + productId,
            data: jsonData,
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log("API Response:", response);
                read();
                $("#updateForm").addClass("hidden");
            },
            error: function (error) {
                console.log("Error:", error);
            }
        });
    });

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
