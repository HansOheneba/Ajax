<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <title>Product</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="script.js"></script>

</head>

<body>

<div>
    <h1>Products Table</h1>
</div>
    <div>
        <table id="data-table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date Modified</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

    </div>

    <br>
    <div class="addButton">
        <button type="button" id="addBtn">Add a product</button>
    </div>
    <br><br>


    <div id="form">
        <form id="addForm" class="hidden">
            <h3>Add a product</h3>
            <div>
                <label for="name">Product Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div>
                <label for="description">Product Description</label>
                <textarea name="description" id="description" rows="4" required></textarea>
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" name="price" id="price" step="1" required>
            </div>
            <div class="submit">
                <button type="submit" name="btn_add_product">Add Product</button>
            </div>
        </form>
        <div id="updateForm" class="hidden">
            <h3>Update Product</h3>
            <div>
                <label for="updateId">ID</label>
                <input type="text" name="updateId" id="updateId" disabled>
            </div>
            <div>
                <label for="updateName">Product Name</label>
                <input type="text" name="updateName" id="updateName" required>
            </div>
            <div>
                <label for="updateDescription">Product Description</label>
                <textarea name="updateDescription" id="updateDescription" rows="4" required></textarea>
            </div>
            <div>
                <label for="updatePrice">Price</label>
                <input type="number" name="updatePrice" id="updatePrice" step="1" required>
            </div>
            <div class="submit">
                <button type="button" id="updateProductBtn">Update Product</button>
            </div>
        </div>

    </div>

</body>

</html>