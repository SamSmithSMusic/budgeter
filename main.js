// JavaScript code for adding budget categories

// Function to add a new budget category
function addBudgetCategory() {
    // Create a new category input field
    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.placeholder = "Category Name";

    // Create a new limit input field
    const limitInput = document.createElement("input");
    limitInput.type = "number";
    limitInput.placeholder = "Budget Limit ($)";

    // Create a container for the category and limit inputs
    const categoryContainer = document.createElement("div");
    categoryContainer.appendChild(categoryInput);
    categoryContainer.appendChild(limitInput);

    // Append the category container to the budget-categories section
    const budgetCategories = document.getElementById("budget-categories");
    budgetCategories.appendChild(categoryContainer);
}

// Event listener for the "Add Category" button
document.getElementById("add-category").addEventListener("click", addBudgetCategory);

// JavaScript code for managing purchases and updating the budget

// Function to add a new purchase
function addPurchase() {
    // Create a new purchase input field
    const purchaseInput = document.createElement("input");
    purchaseInput.type = "text";
    purchaseInput.placeholder = "Item Name";

    // Create a new price input field
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "Price ($)";

    // Create a dropdown for selecting the category
    const categorySelect = document.createElement("select");
    // Populate the dropdown with budget categories (you'll need to implement this)

    // Create a container for the purchase inputs
    const purchaseContainer = document.createElement("div");
    purchaseContainer.appendChild(purchaseInput);
    purchaseContainer.appendChild(priceInput);
    purchaseContainer.appendChild(categorySelect);

    // Append the purchase container to the purchase-history section
    const purchaseHistory = document.getElementById("purchase-history");
    purchaseHistory.appendChild(purchaseContainer);

    // Calculate and update the remaining budget (you'll need to implement this)
}

// Event listener for the "Add Purchase" button
document.getElementById("add-purchase").addEventListener("click", addPurchase);
