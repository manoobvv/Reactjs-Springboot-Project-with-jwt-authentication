package com.example.test.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.example.test.model.Products;
import com.example.test.model.ShoppingList;

import com.example.test.repository.ProductRepository;
import com.example.test.repository.CartRepository;

import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private final ProductRepository productRepository;

    private final CartRepository cartRepository;

    public CartServiceImpl(final ProductRepository productRepository, final CartRepository cartRepository) {
        this.productRepository = productRepository;
        this.cartRepository = cartRepository;
    }

    @Override
    public Void setProductToCart(String productId) throws IOException {
        ShoppingList shoppingList = new ShoppingList();
        final List<ShoppingList> result = this.cartRepository.findByProductId(productId);
        if (result.isEmpty()) {

            shoppingList.setCartProductDetails(productId);
            this.cartRepository.save(shoppingList);
        }

        return null;
    }

    @Override
    public List<Products> getAllCartProducts() {

        List<Products> productdetails = new ArrayList<Products>();
        List<ShoppingList> shoppingList = this.cartRepository.findAll();
        for (ShoppingList cartDetails : shoppingList) {
            List<Products> result = this.productRepository.findCartProducts(cartDetails.getCartProductDetails());
            productdetails.addAll(result);
        }
        return productdetails;
    }

}