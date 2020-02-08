package com.example.test.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ShoppingList")
public class ShoppingList {
    @Id
    private String id;
    private String cartProductDetails;
    private String buyProductDetails;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCartProductDetails() {
        return cartProductDetails;
    }

    public void setCartProductDetails(String cartProductDetails) {
        this.cartProductDetails = cartProductDetails;
    }

    public String getBuyProductDetails() {
        return buyProductDetails;
    }

    public void setBuyProductDetails(String buyProductDetails) {
        this.buyProductDetails = buyProductDetails;
    }

}
