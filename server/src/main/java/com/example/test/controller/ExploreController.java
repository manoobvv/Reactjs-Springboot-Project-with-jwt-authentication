package com.example.test.controller;

import java.util.List;

import com.example.test.model.Products;
import com.example.test.repository.ProductRepository;
import com.example.test.repository.ResortRepository;
import com.example.test.repository.RestaurantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.test.service.ProductService;
import com.example.test.service.CartService;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

@Controller
@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping("/explore")
public class ExploreController {

    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    ResortRepository resortRepository;
    @Autowired
    ProductRepository productRepository;

    ProductService productService;

    CartService cartService;

    public ExploreController(final ProductService productService, final CartService cartService) {
        this.productService = productService;
        this.cartService = cartService;
    }

    @RequestMapping(value = "/product/add", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProduct(@ModelAttribute final Products product) throws IOException {
        System.out.println("sdbskjb");
        return new ResponseEntity(this.productService.createProductForMap(product), HttpStatus.OK);
    }

    private void saveUploadedFile(MultipartFile file) throws IOException {
        if (!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            String UPLOADED_FOLDER;
            // Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            // Files.write(path, bytes);
        }
    }

    @RequestMapping(value = "/products/all", method = RequestMethod.GET)
    public ResponseEntity<List<Products>> getAllProducts() {
        // return new ResponseEntity<List<Products>>(productRepository.findAll(),
        // HttpStatus.OK);
        return new ResponseEntity<List<Products>>(this.productService.getAllProducts(), HttpStatus.OK);
    }

    @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
    public ResponseEntity<Products> getProductById(@PathVariable(value = "id") String productId) {
        return new ResponseEntity<Products>(this.productService.getProductById(productId), HttpStatus.OK);
    }

    @RequestMapping(value = "/cart/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> setProductToCart(@PathVariable(value = "id") String productId) throws IOException {
        return new ResponseEntity(this.cartService.setProductToCart(productId), HttpStatus.OK);
    }

    @RequestMapping(value = "/cart", method = RequestMethod.GET)
    public ResponseEntity<List<Products>> getAllCartProducts() {
        return new ResponseEntity<List<Products>>(this.cartService.getAllCartProducts(), HttpStatus.OK);
    }

}
