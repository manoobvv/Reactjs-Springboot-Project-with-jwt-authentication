package com.example.test.service;

import com.example.test.model.Products;

import com.example.test.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.io.File;
import org.cloudinary.json.JSONArray;
import org.cloudinary.json.JSONObject;

import java.io.IOException;
import java.util.*;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    @Qualifier("com.cloudinary.cloud_name")
    String mCloudName;

    @Autowired
    @Qualifier("com.cloudinary.api_key")
    String mApiKey;

    @Autowired
    @Qualifier("com.cloudinary.api_secret")
    String mApiSecret;

    public ProductServiceImpl(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Void createProductForMap(Products product) throws IOException {
        System.out.println(product.getProductName());
        System.out.println(product.getImage());
        Products productDetails = new Products();
        productDetails.setDescription(product.getDescription());
        productDetails.setProductName(product.getProductName());
        productDetails.setPrice(product.getPrice());
        productDetails.setcategory(product.getcategory());
        productDetails.setNoOfUnits(product.getNoOfUnits());
        String imageUrl = storeImageInCloud(product.getImage());
        productDetails.setProductPictureUrl(imageUrl);
        this.productRepository.save(productDetails);
        // File convertFile = new File("c://reactdownloads//" +
        // product.getImage().getOriginalFilename());
        // convertFile.createNewFile();
        // FileOutputStream fout = new FileOutputStream(convertFile);
        // fout.write(product.getImage().getBytes());
        // fout.close();
        return null;

    }

    public String storeImageInCloud(MultipartFile image) {
        Cloudinary c = new Cloudinary("cloudinary://" + mApiKey + ":" + mApiSecret + "@" + mCloudName);
        Products productDetails = new Products();
        try {
            File f = Files.createTempFile("temp", image.getOriginalFilename()).toFile();
            image.transferTo(f);

            Map response = c.uploader().upload(f, ObjectUtils.emptyMap());
            JSONObject json = new JSONObject(response);
            String url = json.getString("url");
            return new String(url);
        } catch (Exception e) {
            return new String("");
        }
    }

    public List<String> getImage(String aName) {
        Cloudinary c = new Cloudinary("cloudinary://" + mApiKey + ":" + mApiSecret + "@" + mCloudName);
        // System.out.println("shdsjhg :" + c);
        List<String> retval = new ArrayList<String>();
        try {
            Map response = c.api().resource("", ObjectUtils.asMap("type", "upload"));
            JSONObject json = new JSONObject(response);
            JSONArray ja = json.getJSONArray("resources");
            for (int i = 0; i < ja.length(); i++) {
                JSONObject j = ja.getJSONObject(i);
                retval.add(j.getString("url"));
            }

            return (retval);
        } catch (Exception e) {
            return (List<String>) e;
        }
    }

    @Override
    public List<Products> getAllProducts() {
        return this.productRepository.findAll();
    }

    @Override
    public Products getProductById(String productId) {

        Products result = this.productRepository.findById(productId).orElse(null);

        return result;

    }

}